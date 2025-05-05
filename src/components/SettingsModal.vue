<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useEventListener } from '@vueuse/core';
import type { AuthorConfig } from '../types/author';
import { configFields } from '../controllers/configController';

interface Props {
  initialConfig: AuthorConfig;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'save', config: AuthorConfig): void;
}>();

const modalRef = ref<HTMLDivElement | null>(null);
const config = ref<AuthorConfig>({ ...props.initialConfig });

useEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    emit('close');
  }
});

const handleClickOutside = (event: MouseEvent) => {
  if (modalRef.value && !modalRef.value.contains(event.target as Node)) {
    emit('close');
  }
};

const handleSave = () => {
  emit('save', config.value);
  emit('close');
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div 
      ref="modalRef"
      class="bg-white rounded-lg p-6 w-full max-w-md"
    >
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Content Settings</h2>
        <button 
          @click="emit('close')"
          class="p-2 hover:bg-slate-100 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div class="space-y-4">
        <component
          v-for="field in configFields"
          :key="field.key"
          :is="field.editComponent"
          v-model="config[field.key]"
        />
      </div>
      <div class="mt-6 flex justify-end space-x-3">
        <button 
          @click="emit('close')"
          class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button 
          @click="handleSave"
          class="btn-primary"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>