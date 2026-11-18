<!--
  AppButton.vue
  One button component used everywhere on the site.
  Its look and behaviour are controlled by props:
    - label : the text on the button
    - color : primary | secondary | success | danger
    - type  : button | submit | reset (the HTML button type)
    - to    : (optional) a page path; when given, the button becomes a NuxtLink

  Click events are passed to the parent:
    <AppButton label="Save" color="success" @click="save" />
-->
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

// Colour styles for each `color` value
const colorClasses = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-indigo-600',
  secondary: 'bg-white text-slate-700 ring-1 ring-inset ring-slate-300 hover:bg-slate-100 focus-visible:outline-slate-500',
  success: 'bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:outline-emerald-600',
  danger: 'bg-rose-600 text-white hover:bg-rose-700 focus-visible:outline-rose-600'
}

// Shared styles: same padding, rounded corners and hover transition for every button
const buttonClass = computed(() => [
  'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold shadow-sm',
  'transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer',
  colorClasses[props.color]
])
</script>

<template>
  <!-- Link version: used when a `to` path is given -->
  <NuxtLink v-if="to" :to="to" :class="buttonClass" @click="emit('click', $event)">
    {{ label }}
  </NuxtLink>

  <!-- Regular button version -->
  <button v-else :type="type" :class="buttonClass" @click="emit('click', $event)">
    {{ label }}
  </button>
</template>
