<script setup lang="ts">
import { ref } from 'vue';
import CreatorCard from './components/CreatorCard.vue';
import SettingsModal from './components/SettingsModal.vue';

interface Creator {
  id: string;
  config: {
    frequency: string;
    format: string;
    autoPublish: boolean;
  };
}

const selectedCreators = ref<Set<string>>(new Set());
const showSettings = ref(false);
const loading = ref(false);
const currentCreator = ref<string | null>(null);

const creators = ref<Creator[]>([
  { 
    id: 'creator1',
    config: {
      frequency: 'daily',
      format: 'article',
      autoPublish: false
    }
  },
  { 
    id: 'creator2',
    config: {
      frequency: 'weekly',
      format: 'video',
      autoPublish: true
    }
  },
  { 
    id: 'creator3',
    config: {
      frequency: 'monthly',
      format: 'podcast',
      autoPublish: false
    }
  },
  { 
    id: 'creator4',
    config: {
      frequency: 'daily',
      format: 'video',
      autoPublish: true
    }
  },
  { 
    id: 'creator5',
    config: {
      frequency: 'weekly',
      format: 'article',
      autoPublish: false
    }
  },
]);

const toggleCreator = (id: string) => {
  if (selectedCreators.value.has(id)) {
    selectedCreators.value.delete(id);
  } else {
    selectedCreators.value.add(id);
  }
};

const handleProcess = async () => {
  loading.value = true;
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));
  loading.value = false;
};

const openSettings = (id: string) => {
  currentCreator.value = id;
  showSettings.value = true;
};

const handleSaveSettings = (config: Creator['config']) => {
  if (currentCreator.value) {
    const creator = creators.value.find(c => c.id === currentCreator.value);
    if (creator) {
      creator.config = config;
    }
  }
};
</script>

<template>
  <div class="min-h-screen flex">
    <!-- Left Panel -->
    <div class="w-1/3 border-r border-gray-200 p-4 relative">
      <h1 class="text-2xl font-bold mb-6">Content Creators</h1>
      
      <div class="space-y-4 mb-24">
        <CreatorCard
          v-for="creator in creators"
          :key="creator.id"
          :id="creator.id"
          :selected="selectedCreators.has(creator.id)"
          :loading="loading"
          :config="creator.config"
          @select="toggleCreator(creator.id)"
          @settings="openSettings(creator.id)"
        />
      </div>

      <!-- Fixed CTA Button -->
      <div class="fixed bottom-0 left-0 w-1/3 p-4 bg-white border-t border-gray-200">
        <button 
          class="btn-primary w-full"
          :disabled="selectedCreators.size === 0 || loading"
          @click="handleProcess"
        >
          <span v-if="loading">Processing...</span>
          <span v-else>Process Selected ({{ selectedCreators.size }})</span>
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
        <div v-else-if="selectedCreators.size === 0" class="text-center text-gray-500 py-8">
          Select creators from the left panel to view their content
        </div>
        <div v-else>
          <p class="text-gray-600">
            Selected creators: {{ Array.from(selectedCreators).join(', ') }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Settings Modal -->
  <SettingsModal
    v-if="showSettings"
    @close="showSettings = false"
    @save="handleSaveSettings"
  />
</template>