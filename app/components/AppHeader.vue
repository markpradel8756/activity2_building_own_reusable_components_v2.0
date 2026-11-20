<template>
  <header class="border-b border-sage-200 bg-white">
    <nav
      aria-label="Main navigation"
      class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-3 sm:px-8 sm:py-4"
    >
      <NuxtLink
        to="/"
        class="flex items-center gap-2.5 rounded-lg font-bold text-sage-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage-700 sm:text-lg"
      >
        <span aria-hidden="true" class="grid size-8 place-items-center rounded-lg bg-sage-700 text-sm text-white sm:size-9">
          SH
        </span>
        StudentHub
      </NuxtLink>

      <div class="flex items-center gap-1 text-sm font-medium text-slate-600">
        <NuxtLink
          to="/"
          exact-active-class="bg-sage-100 text-sage-800"
          class="inline-flex min-h-11 items-center rounded-lg px-2.5 hover:bg-sage-50 hover:text-sage-800 focus-visible:outline-2 focus-visible:outline-sage-700 sm:px-4"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/students"
          exact-active-class="bg-sage-100 text-sage-800"
          class="inline-flex min-h-11 items-center rounded-lg px-2.5 hover:bg-sage-50 hover:text-sage-800 focus-visible:outline-2 focus-visible:outline-sage-700 sm:px-4"
        >
          Students
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
