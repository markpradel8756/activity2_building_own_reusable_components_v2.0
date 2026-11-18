<!-- Home page. -->
<script setup>
import { ref, computed } from 'vue'
import { students } from '~/data/students'

useHead({ title: 'Home | StudentHub' })

// Featured students
const featuredStudents = computed(() => students.slice(0, 3))

// Information cards
const infoItems = [
  {
    title: 'Student Directory',
    description: 'Browse student profiles that show each student\'s name, ID number, course and year level in one place.',
    accent: 'indigo'
  },
  {
    title: 'Reusable Components',
    description: 'Every card, button, header and footer is a single Vue component reused across all pages of the site.',
    accent: 'sky'
  },
  {
    title: 'Dynamic Props',
    description: 'Pages pass data into components through props, so one StudentCard can display any student.',
    accent: 'emerald'
  }
]

// Button demo
const greetCount = ref(0)
function sayHello() {
  greetCount.value++
}
function resetGreeting() {
  greetCount.value = 0
}
</script>

<template>
  <div class="flex flex-1 flex-col">
    <AppHeader />

    <main class="flex-1">
      <!-- Welcome -->
      <section class="bg-gradient-to-b from-indigo-50 to-slate-50">
        <div class="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <p class="text-sm font-semibold uppercase tracking-wider text-indigo-600">Welcome to StudentHub</p>
          <h1 class="mx-auto mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Student information, organized in one place
          </h1>
          <p class="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            StudentHub is a simple student information website. It shows how reusable Vue components
            and props can display many student records without repeating the same code.
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <AppButton label="View All Students" color="primary" to="/students" />
            <AppButton label="Learn More" color="secondary" to="/#about" />
          </div>
        </div>
      </section>

      <!-- Featured students -->
      <section class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 sm:text-3xl">Featured Students</h2>
            <p class="mt-2 text-slate-600">Each card below is the same StudentCard component with different props.</p>
          </div>
          <AppButton label="See Full List" color="secondary" to="/students" />
        </div>

        <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StudentCard
            v-for="student in featuredStudents"
            :key="student.id"
            :name="student.name"
            :student-id="student.studentId"
            :course="student.course"
            :year-level="student.yearLevel"
            :avatar="student.avatar"
          />
        </div>
      </section>

      <!-- About -->
      <section id="about" class="scroll-mt-20 border-y border-slate-200 bg-white">
        <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 class="text-2xl font-bold text-slate-900 sm:text-3xl">About This Website</h2>
          <p class="mt-2 text-slate-600">What StudentHub offers and how it is built.</p>

          <div class="mt-8 grid gap-6 md:grid-cols-3">
            <InfoCard
              v-for="item in infoItems"
              :key="item.title"
              :title="item.title"
              :description="item.description"
              :accent="item.accent"
            />
          </div>
        </div>
      </section>

      <!-- Button demo -->
      <section class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div class="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-10">
          <h2 class="text-2xl font-bold text-slate-900">Try the Reusable Button</h2>
          <p class="mx-auto mt-2 max-w-xl text-slate-600">
            These buttons all come from <code class="rounded bg-slate-100 px-1.5 py-0.5 text-sm">AppButton.vue</code>.
            Only their props and click handlers are different.
          </p>

          <div class="mt-6 flex flex-wrap justify-center gap-3">
            <AppButton label="Say Hello" color="success" @click="sayHello" />
            <AppButton label="Reset" color="danger" @click="resetGreeting" />
          </div>

          <p class="mt-5 text-sm text-slate-600" aria-live="polite">
            <template v-if="greetCount > 0">
              Hello! You clicked the button <span class="font-semibold text-emerald-700">{{ greetCount }}</span>
              {{ greetCount === 1 ? 'time' : 'times' }}.
            </template>
            <template v-else>Click "Say Hello" to see the click event in action.</template>
          </p>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>
