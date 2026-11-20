<script setup>
import { computed, ref } from 'vue'
import { students } from '~/data/students'

useHead({ title: 'Students | StudentHub' })

const filters = [
  { label: 'All years', value: 0 },
  { label: '1st Year', value: 1 },
  { label: '2nd Year', value: 2 },
  { label: '3rd Year', value: 3 },
  { label: '4th Year', value: 4 }
]
const selectedYear = ref(0)

const filteredStudents = computed(() => {
  if (selectedYear.value === 0) return students

  return students.filter((student) => student.yearLevel === selectedYear.value)
})
</script>

<template>
  <div>
    <section class="border-b border-sage-200 bg-sage-50">
      <div class="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <h1 class="text-4xl font-bold tracking-tight text-sage-950 sm:text-5xl">Student directory</h1>
        <p class="mt-3 text-slate-600 sm:text-lg">Browse sample student records by year level.</p>
      </div>
    </section>

    <section aria-label="Student records" class="mx-auto max-w-6xl px-5 py-9 sm:px-8 sm:py-12">
      <div class="flex flex-wrap gap-2" role="group" aria-label="Filter students by year level">
        <AppButton
          v-for="filter in filters"
          :key="filter.value"
          :label="filter.label"
          :color="selectedYear === filter.value ? 'primary' : 'secondary'"
          :aria-pressed="selectedYear === filter.value"
          @click="selectedYear = filter.value"
        />
      </div>

      <p class="mt-5 text-sm text-slate-600" role="status">
        Showing {{ filteredStudents.length }} of {{ students.length }} students
      </p>

      <div class="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        <StudentCard
          v-for="student in filteredStudents"
          :key="student.studentId"
          :name="student.name"
          :student-id="student.studentId"
          :course="student.course"
          :year-level="student.yearLevel"
          :avatar="student.avatar"
          :section="student.section"
          :email="student.email"
        />
      </div>
      <p v-if="filteredStudents.length === 0" class="text-slate-600">No students found for this year level.</p>
    </section>
  </div>
</template>
