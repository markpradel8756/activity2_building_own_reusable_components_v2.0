// Nuxt config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  // Global styles
  css: ['~/assets/css/main.css'],

  // Tailwind plugin
  vite: {
    plugins: [tailwindcss()]
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'StudentHub | Student Information Website',
      meta: [
        {
          name: 'description',
          content: 'A student information website built with reusable Vue components and props.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
