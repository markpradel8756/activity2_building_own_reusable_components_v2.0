<!-- Reusable button component. -->
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

// Button colours
const colorClasses = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-indigo-600',
  secondary: 'bg-white text-slate-700 ring-1 ring-inset ring-slate-300 hover:bg-slate-100 focus-visible:outline-slate-500',
  success: 'bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:outline-emerald-600',
  danger: 'bg-rose-600 text-white hover:bg-rose-700 focus-visible:outline-rose-600'
}

// Shared button styles
const buttonClass = computed(() => [
  'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold shadow-sm',
  'transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer',
  colorClasses[props.color]
])
</script>

<template>
  <!-- Link button -->
  <NuxtLink v-if="to" :to="to" :class="buttonClass" @click="emit('click', $event)">
    {{ label }}
  </NuxtLink>

  <!-- Regular button -->
  <button v-else :type="type" :class="buttonClass" @click="emit('click', $event)">
    {{ label }}
  </button>
</template>
