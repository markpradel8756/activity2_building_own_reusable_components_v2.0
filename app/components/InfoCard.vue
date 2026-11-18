<!--
  InfoCard.vue
  A simple card for informational content.
  The title and description come from props, so the same card
  can show any content without editing this file.

  Example:
    <InfoCard title="Our Mission" description="..." accent="emerald" />
-->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // Optional colour of the top accent bar
  accent: {
    type: String,
    default: 'indigo',
    validator: (value) => ['indigo', 'sky', 'emerald', 'amber'].includes(value)
  }
})

// Full class names are written out so Tailwind can find them when building the CSS
const accentClasses = {
  indigo: 'bg-indigo-500',
  sky: 'bg-sky-500',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500'
}

const accentClass = computed(() => accentClasses[props.accent])
</script>

<template>
  <div
    class="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
  >
    <span :class="['absolute inset-x-0 top-0 h-1', accentClass]" aria-hidden="true" />
    <h3 class="text-lg font-semibold text-slate-900">{{ title }}</h3>
    <p class="mt-2 leading-relaxed text-slate-600">{{ description }}</p>
  </div>
</template>
