<!--
  Default layout: only provides the page frame.
  Each page places the reusable AppHeader and AppFooter itself,
  so you can clearly see the same components being reused on every page.
-->
<template>
  <div class="flex min-h-screen flex-col">
    <slot />
  </div>
</template>
