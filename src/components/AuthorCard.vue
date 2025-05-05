<script setup lang="ts">
import { computed } from 'vue';
import type { AuthorConfig } from '../types/author';
import { configFields } from '../controllers/configController';

interface Props {
  id: string;
  selected: boolean;
  loading?: boolean;
  config: AuthorConfig;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false
});

const emit = defineEmits<{
  (e: 'select'): void;
  (e: 'settings'): void;
}>();

const cardClasses = computed(() => ({
  'border-blue-500': props.selected,
  'opacity-50': props.loading
}));
</script>

<template>
  <div 
    :class="['card cursor-pointer', cardClasses]"
    @click="emit('select')"
  >
    <div class="flex justify-between items-start">
      <div>
        <span class="text-lg font-medium block mb-2">{{ id }}</span>
        <div class="text-sm text-gray-500 space-y-1">
          <p v-for="field in configFields" :key="field.key">
            {{ field.label }}: 
            <component 
              :is="field.displayComponent"
              :value="config[field.key]"
            />
          </p>
        </div>
      </div>
      <button 
        @click.stop="emit('settings')"
        class="p-2 hover:bg-slate-100 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</template>