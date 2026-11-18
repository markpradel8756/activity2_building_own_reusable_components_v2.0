<!-- Reusable site footer. -->
<script setup>
// Current year
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="mt-auto border-t border-slate-200 bg-white">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:px-6">
      <p>
        &copy; {{ currentYear }} <span class="font-semibold text-slate-700">StudentHub</span>. All rights reserved.
      </p>
      <p>All student records shown are fictional sample data.</p>
    </div>
  </footer>
</template>
