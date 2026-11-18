<!--
  AppHeader.vue
  Reusable navigation header. Placed at the top of every page.
  - Shows the site name
  - Uses <NuxtLink> for client-side navigation
  - Collapses into a menu button on small screens
-->
<script setup>
import { ref, watch } from 'vue'

// Navigation links are kept in one list so new pages are easy to add.
const links = [
  { label: 'Home', to: '/' },
  { label: 'Students', to: '/students' }
]

// Controls the mobile menu (open / closed)
const isMenuOpen = ref(false)

// Close the mobile menu automatically after navigating to another page
const route = useRoute()
watch(() => route.path, () => {
  isMenuOpen.value = false
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
      <!-- Website name -->
      <NuxtLink to="/" class="flex items-center gap-2 text-lg font-bold text-slate-900">
        <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-extrabold text-white">
          SH
        </span>
        StudentHub
      </NuxtLink>

      <!-- Desktop links -->
      <ul class="hidden items-center gap-1 sm:flex">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            exact-active-class="bg-indigo-50 !text-indigo-700"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile menu button -->
      <button
        type="button"
        class="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 sm:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
          <path v-if="!isMenuOpen" stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </nav>

    <!-- Mobile links -->
    <ul v-show="isMenuOpen" id="mobile-menu" class="space-y-1 border-t border-slate-200 px-4 py-3 sm:hidden">
      <li v-for="link in links" :key="link.to">
        <NuxtLink
          :to="link.to"
          class="block rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
          exact-active-class="bg-indigo-50 !text-indigo-700"
        >
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>
