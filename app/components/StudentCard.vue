<script setup>
import { computed } from 'vue'

const props = defineProps({
  // Required props
  name: {
    type: String,
    required: true
  },
  studentId: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  yearLevel: {
    type: Number,
    required: true,
    validator: (value) => value >= 1 && value <= 5
  },

  // Optional props
  avatar: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  section: {
    type: String,
    default: ''
  }
})

const yearLabel = computed(() => {
  const suffixes = { 1: 'st', 2: 'nd', 3: 'rd' }
  return `${props.yearLevel}${suffixes[props.yearLevel] || 'th'} Year`
})

const initials = computed(() =>
  props.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
)
</script>

<template>
  <article class="h-full rounded-xl border border-sage-200 bg-white p-5 shadow-sm">
    <div class="flex items-center gap-3">
      <img
        v-if="avatar"
        :src="avatar"
        alt=""
        class="size-12 shrink-0 rounded-full object-cover"
        width="48"
        height="48"
      >
      <div
        v-else
        class="grid size-12 shrink-0 place-items-center rounded-full bg-sage-100 font-bold text-sage-800"
        aria-hidden="true"
      >
        {{ initials }}
      </div>

      <div class="min-w-0">
        <h3 class="wrap-break-word text-lg font-semibold leading-snug text-sage-950">{{ name }}</h3>
        <p class="mt-0.5 text-sm text-slate-600">ID {{ studentId }}</p>
      </div>
    </div>

    <dl class="mt-4 space-y-2.5 border-t border-sage-200 pt-4 text-sm">
      <div class="flex justify-between gap-4">
        <dt class="text-slate-600">Course</dt>
        <dd class="min-w-0 wrap-break-word text-right font-medium text-slate-800">{{ course }}</dd>
      </div>
      <div class="flex items-center justify-between gap-4">
        <dt class="text-slate-600">Year level</dt>
        <dd>
          <span class="inline-block rounded-full bg-sage-100 px-2.5 py-0.5 font-medium whitespace-nowrap text-sage-800">
            {{ yearLabel }}
          </span>
        </dd>
      </div>

      <div v-if="section" class="flex justify-between gap-4">
        <dt class="text-slate-600">Section</dt>
        <dd class="text-right font-medium text-slate-800">{{ section }}</dd>
      </div>
      <div v-if="email" class="flex justify-between gap-4">
        <dt class="text-slate-600">Email</dt>
        <dd class="min-w-0 [overflow-wrap:anywhere] text-right font-medium text-slate-800">{{ email }}</dd>
      </div>
    </dl>
  </article>
</template>
