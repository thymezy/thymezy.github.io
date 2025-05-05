<script setup lang="ts">
import { ref } from 'vue';
import AuthorCard from './components/AuthorCard.vue';
import SettingsModal from './components/SettingsModal.vue';
import type { Author, AuthorConfig } from './types/author';
import { DEFAULT_CONFIG } from './types/author';

const selectedAuthors = ref<Set<string>>(new Set());
const showSettings = ref(false);
const loading = ref(false);
const currentAuthor = ref<string | null>(null);

const authors = ref<Author[]>([
  { 
    id: 'author1',
    config: { ...DEFAULT_CONFIG, frequency: 'daily', format: 'article' }
  },
  { 
    id: 'author2',
    config: { ...DEFAULT_CONFIG, frequency: 'weekly', format: 'video', autoPublish: true }
  },
  { 
    id: 'author3',
    config: { ...DEFAULT_CONFIG, frequency: 'monthly', format: 'podcast' }
  },
  { 
    id: 'author4',
    config: { ...DEFAULT_CONFIG, frequency: 'daily', format: 'video', autoPublish: true }
  },
  { 
    id: 'author5',
    config: { ...DEFAULT_CONFIG, frequency: 'weekly', format: 'article' }
  },
]);

const toggleAuthor = (id: string) => {
  if (selectedAuthors.value.has(id)) {
    selectedAuthors.value.delete(id);
  } else {
    selectedAuthors.value.add(id);
  }
};

const handleProcess = async () => {
  loading.value = true;
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));
  loading.value = false;
};

const currentAuthorConfig = ref<AuthorConfig | null>(null);

const openSettings = (id: string) => {
  const author = authors.value.find(a => a.id === id);
  if (author) {
    currentAuthor.value = id;
    currentAuthorConfig.value = { ...author.config };
    showSettings.value = true;
  }
};

const handleSaveSettings = (config: AuthorConfig) => {
  if (currentAuthor.value) {
    const author = authors.value.find(a => a.id === currentAuthor.value);
    if (author) {
      author.config = config;
    }
  }
  showSettings.value = false;
  currentAuthor.value = null;
  currentAuthorConfig.value = null;
};
</script>

<template>
  <div class="min-h-screen flex">
    <!-- Left Panel -->
    <div class="w-1/3 border-r border-gray-200 p-4 relative">
      <h1 class="text-2xl font-bold mb-6">Content Authors</h1>
      
      <div class="space-y-4 mb-24">
        <AuthorCard
          v-for="author in authors"
          :key="author.id"
          :id="author.id"
          :selected="selectedAuthors.has(author.id)"
          :loading="loading"
          :config="author.config"
          @select="toggleAuthor(author.id)"
          @settings="openSettings(author.id)"
        />
      </div>

      <!-- Fixed CTA Button -->
      <div class="fixed bottom-0 left-0 w-1/3 p-4 bg-white border-t border-gray-200">
        <button 
          class="btn-primary w-full"
          :disabled="selectedAuthors.size === 0 || loading"
          @click="handleProcess"
        >
          <span v-if="loading">Processing...</span>
          <span v-else>Process Selected ({{ selectedAuthors.size }})</span>
        </button>
      </div>
    </div>

    <!-- Right Panel -->
    <div class="w-2/3 p-4">
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-xl font-semibold mb-4">Content Display</h2>
        <div v-if="loading" class="space-y-4">
          <div class="h-4 bg-slate-200 rounded animate-pulse"></div>
          <div class="h-4 bg-slate-200 rounded animate-pulse w-5/6"></div>
          <div class="h-4 bg-slate-200 rounded animate-pulse w-4/6"></div>
        </div>
        <div v-else-if="selectedAuthors.size === 0" class="text-center text-gray-500 py-8">
          Select authors from the left panel to view their content
        </div>
        <div v-else>
          <p class="text-gray-600">
            Selected authors: {{ Array.from(selectedAuthors).join(', ') }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Settings Modal -->
  <SettingsModal
    v-if="showSettings && currentAuthorConfig"
    :initial-config="currentAuthorConfig"
    @close="showSettings = false"
    @save="handleSaveSettings"
  />
</template>