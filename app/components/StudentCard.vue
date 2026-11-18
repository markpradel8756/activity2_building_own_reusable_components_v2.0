<!--
  StudentCard.vue
  Displays ONE student. It has no student data of its own:
  everything it shows comes from the parent page through props.
  The same component is used for every student on every page.

  Example:
    <StudentCard
      name="Andrea Villanueva"
      student-id="2023-00142"
      course="BS Information Technology"
      :year-level="3"
      avatar="/images/avatars/avatar-1.svg"
    />
-->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  // Required information
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

  // Optional information
  avatar: {
    type: String,
    default: '' // when empty, the student's initials are shown instead
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

// Turns 1 into "1st Year", 2 into "2nd Year", and so on
const yearLabel = computed(() => {
  const suffixes = { 1: 'st', 2: 'nd', 3: 'rd' }
  return `${props.yearLevel}${suffixes[props.yearLevel] || 'th'} Year`
})

// "Andrea Villanueva" -> "AV" (used when no avatar image is given)
const initials = computed(() =>
  props.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
)

// Show the extra details section only if the parent passed any
const hasDetails = computed(() => props.email || props.section)
</script>

<template>
  <article
    class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
  >
    <!-- Avatar + name -->
    <div class="flex items-center gap-4">
      <img
        v-if="avatar"
        :src="avatar"
        :alt="`Avatar of ${name}`"
        class="h-16 w-16 shrink-0 rounded-full object-cover ring-4 ring-slate-100"
        width="64"
        height="64"
      >
      <div
        v-else
        class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-700 ring-4 ring-slate-100"
        aria-hidden="true"
      >
        {{ initials }}
      </div>

      <div class="min-w-0">
        <h3 class="truncate text-lg font-semibold text-slate-900">{{ name }}</h3>
        <p class="text-sm text-slate-500">ID: {{ studentId }}</p>
      </div>
    </div>

    <!-- Course and year level -->
    <dl class="mt-5 space-y-2 text-sm">
      <div class="flex justify-between gap-4">
        <dt class="text-slate-500">Course</dt>
        <dd class="text-right font-medium text-slate-800">{{ course }}</dd>
      </div>
      <div class="flex items-center justify-between gap-4">
        <dt class="text-slate-500">Year Level</dt>
        <dd>
          <span class="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
            {{ yearLabel }}
          </span>
        </dd>
      </div>

      <!-- Optional details (only shown when the parent passes them) -->
      <template v-if="hasDetails">
        <div v-if="section" class="flex justify-between gap-4 border-t border-slate-100 pt-2">
          <dt class="text-slate-500">Section</dt>
          <dd class="font-medium text-slate-800">{{ section }}</dd>
        </div>
        <div v-if="email" class="flex justify-between gap-4">
          <dt class="text-slate-500">Email</dt>
          <dd class="truncate font-medium text-slate-800">{{ email }}</dd>
        </div>
      </template>
    </dl>
  </article>
</template>
