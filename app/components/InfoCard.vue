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
  accent: {
    type: String,
    default: 'emerald',
    validator: (value) => ['indigo', 'sky', 'emerald', 'amber'].includes(value)
  }
})

const accentClasses = {
  indigo: 'border-l-indigo-300',
  sky: 'border-l-sky-300',
  emerald: 'border-l-sage-700',
  amber: 'border-l-amber-300'
}

const accentClass = computed(() => accentClasses[props.accent])
</script>

<template>
  <article
    class="h-full rounded-xl border border-l-4 border-sage-200 bg-white p-5 shadow-sm"
    :class="accentClass"
  >
    <h3 class="text-lg font-semibold text-sage-950">{{ title }}</h3>
    <p class="mt-2 leading-relaxed text-slate-600">{{ description }}</p>
  </article>
</template>
