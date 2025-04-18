<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useEventListener } from '@vueuse/core';

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'save', config: {
    frequency: string;
    format: string;
    autoPublish: boolean;
  }): void;
}>();

const modalRef = ref<HTMLDivElement | null>(null);
const frequency = ref('daily');
const format = ref('article');
const autoPublish = ref(false);

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
  emit('save', {
    frequency: frequency.value,
    format: format.value,
    autoPublish: autoPublish.value
  });
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
        <div class="form-group">
          <label class="block text-sm font-medium text-gray-700 mb-1">Content Frequency</label>
          <select 
            v-model="frequency"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div class="form-group">
          <label class="block text-sm font-medium text-gray-700 mb-1">Content Format</label>
          <select 
            v-model="format"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="article">Article</option>
            <option value="video">Video</option>
            <option value="podcast">Podcast</option>
          </select>
        </div>
        <div class="form-group">
          <label class="flex items-center gap-2">
            <input 
              type="checkbox"
              v-model="autoPublish"
              class="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
            >
            <span class="text-sm font-medium text-gray-700">Auto-publish content</span>
          </label>
        </div>
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