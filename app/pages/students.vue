<!--
  Students page (/students)
  Reuses the SAME components as the homepage:
  AppHeader, StudentCard, InfoCard, AppButton and AppFooter.
  Here StudentCard also receives the optional `section` and `email` props.
-->
<script setup>
import { ref, computed } from 'vue'
import { students } from '~/data/students'

useHead({ title: 'Students | StudentHub' })

// Summary numbers, shown with <InfoCard>
const courseCount = new Set(students.map((student) => student.course)).size
const summaryItems = [
  {
    title: `${students.length} Students`,
    description: 'Total number of sample student records in the directory.',
    accent: 'indigo'
  },
  {
    title: `${courseCount} Courses`,
    description: 'BS Information Technology, BS Computer Science and BS Information Systems.',
    accent: 'sky'
  },
  {
    title: '4 Year Levels',
    description: 'Students from first year up to fourth year are included.',
    accent: 'amber'
  }
]

// Year level filter (uses AppButton click events)
const filters = [
  { label: 'All', value: 0 },
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
  <div class="flex flex-1 flex-col">
    <AppHeader />

    <main class="flex-1">
      <!-- Page title and introduction -->
      <section class="bg-gradient-to-b from-indigo-50 to-slate-50">
        <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Student Directory</h1>
          <p class="mt-3 max-w-2xl text-lg text-slate-600">
            Browse the list of students below. Every card is rendered by the same
            <code class="rounded bg-white px-1.5 py-0.5 text-base">StudentCard</code> component,
            with each student's information passed in through props.
          </p>
        </div>
      </section>

      <!-- Summary cards -->
      <section class="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <div class="grid gap-6 md:grid-cols-3">
          <InfoCard
            v-for="item in summaryItems"
            :key="item.title"
            :title="item.title"
            :description="item.description"
            :accent="item.accent"
          />
        </div>
      </section>

      <!-- Filter + student list -->
      <section class="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 class="text-2xl font-bold text-slate-900">All Students</h2>

          <!-- The active filter uses color="primary", the others use color="secondary" -->
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
        </div>

        <p class="mt-3 text-sm text-slate-500">
          Showing {{ filteredStudents.length }} of {{ students.length }} students
        </p>

        <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StudentCard
            v-for="student in filteredStudents"
            :key="student.id"
            :name="student.name"
            :student-id="student.studentId"
            :course="student.course"
            :year-level="student.yearLevel"
            :avatar="student.avatar"
            :section="student.section"
            :email="student.email"
          />
        </div>

        <p v-if="filteredStudents.length === 0" class="mt-6 rounded-xl bg-white p-6 text-center text-slate-500">
          No students found for this year level.
        </p>

        <div class="mt-10 flex justify-center">
          <AppButton label="Back to Home" color="secondary" to="/" />
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>
