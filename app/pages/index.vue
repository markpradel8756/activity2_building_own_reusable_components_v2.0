<script setup>
import { students } from '~/data/students'

useHead({ title: 'Home | StudentHub' })

const featuredStudents = students.slice(0, 3)
</script>

<template>
  <div>
    <section class="border-b border-sage-200 bg-sage-50">
      <div class="mx-auto max-w-5xl px-5 py-14 text-center sm:px-8 sm:py-20">
        <h1 class="text-4xl font-bold tracking-tight text-sage-950 sm:text-6xl">
          Student information
          <span class="block text-sage-700">in one place.</span>
        </h1>
        <p class="mx-auto mt-5 max-w-md leading-relaxed text-slate-600 sm:text-lg">
          Browse sample student profiles with their student ID, course, and year level.
        </p>
        <div class="mt-7 flex flex-wrap justify-center gap-3">
          <AppButton label="Browse Students" color="primary" to="/students" />
          <AppButton label="About StudentHub" color="secondary" to="#about" />
        </div>
      </div>
    </section>

    <section aria-labelledby="featured-heading" class="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
      <h2 id="featured-heading" class="text-2xl font-bold tracking-tight text-sage-950 sm:text-3xl">
        Featured students
      </h2>
      <div class="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        <StudentCard
          v-for="student in featuredStudents"
          :key="student.studentId"
          :name="student.name"
          :student-id="student.studentId"
          :course="student.course"
          :year-level="student.yearLevel"
          :avatar="student.avatar"
        />
      </div>
    </section>

    <section id="about" aria-labelledby="about-heading" class="border-t border-sage-200 bg-sage-50/60">
      <div class="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
        <h2 id="about-heading" class="text-2xl font-bold tracking-tight text-sage-950 sm:text-3xl">
          About StudentHub
        </h2>
        <div class="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-5">
          <InfoCard
            title="Student directory"
            description="See all six sample profiles in the directory and use the year filters to narrow the list."
          />
          <InfoCard
            title="Reusable Vue components"
            description="Each student card uses the same Vue component. The page passes each student's details to it through props."
          />
        </div>
      </div>
    </section>
  </div>
</template>
