<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'danger'].includes(value)
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  },
  to: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])

// Keep the full Tailwind class names so Tailwind can find them.
const colorClasses = {
  primary: 'border-sage-700 bg-sage-700 text-white hover:border-sage-800 hover:bg-sage-800',
  secondary: 'border-sage-200 bg-white text-sage-800 hover:bg-sage-50',
  success: 'border-emerald-700 bg-emerald-700 text-white hover:bg-emerald-800',
  danger: 'border-rose-700 bg-rose-700 text-white hover:bg-rose-800'
}

const buttonClass = computed(() => [
  'inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg border px-4 py-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-700',
  colorClasses[props.color] || colorClasses.primary
])
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="buttonClass" @click="emit('click', $event)">
    {{ label }}
  </NuxtLink>

  <button v-else :type="type" :class="buttonClass" @click="emit('click', $event)">
    {{ label }}
  </button>
</template>
