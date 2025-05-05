import type { Component } from 'vue';
import type { AuthorConfig } from '../types/author';

export interface ConfigField {
  key: keyof AuthorConfig;
  label: string;
  displayComponent: Component;
  editComponent: Component;
}

// Display components for each config type
const FrequencyDisplay = {
  props: ['value'],
  template: `<span>{{ value.charAt(0).toUpperCase() + value.slice(1) }}</span>`
} as Component;

const FormatDisplay = {
  props: ['value'],
  template: `<span>{{ value.charAt(0).toUpperCase() + value.slice(1) }}</span>`
} as Component;

const AutoPublishDisplay = {
  props: ['value'],
  template: `<span>{{ value ? 'Yes' : 'No' }}</span>`
} as Component;

// Edit components for each config type
const FrequencyEdit = {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  template: `
    <div class="form-group">
      <label class="block text-sm font-medium text-gray-700 mb-1">Content Frequency</label>
      <select 
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </div>
  `
} as Component;

const FormatEdit = {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  template: `
    <div class="form-group">
      <label class="block text-sm font-medium text-gray-700 mb-1">Content Format</label>
      <select 
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="article">Article</option>
        <option value="video">Video</option>
        <option value="podcast">Podcast</option>
      </select>
    </div>
  `
} as Component;

const AutoPublishEdit = {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  template: `
    <div class="form-group">
      <label class="flex items-center gap-2">
        <input 
          type="checkbox"
          :checked="modelValue"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
          class="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
        >
        <span class="text-sm font-medium text-gray-700">Auto-publish content</span>
      </label>
    </div>
  `
} as Component;

export const configFields: ConfigField[] = [
  {
    key: 'frequency',
    label: 'Frequency',
    displayComponent: FrequencyDisplay,
    editComponent: FrequencyEdit,
  },
  {
    key: 'format',
    label: 'Format',
    displayComponent: FormatDisplay,
    editComponent: FormatEdit,
  },
  {
    key: 'autoPublish',
    label: 'Auto-publish',
    displayComponent: AutoPublishDisplay,
    editComponent: AutoPublishEdit,
  },
];