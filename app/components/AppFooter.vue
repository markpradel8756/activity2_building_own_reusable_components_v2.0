<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-sage-200 bg-white">
    <div class="mx-auto flex max-w-6xl flex-col gap-1.5 px-5 py-6 text-sm text-slate-600 sm:flex-row sm:justify-between sm:px-8">
      <p>&copy; {{ currentYear }} <span class="font-semibold text-sage-950">StudentHub</span></p>
      <p>All student records are fictional.</p>
    </div>
  </footer>
</template>
