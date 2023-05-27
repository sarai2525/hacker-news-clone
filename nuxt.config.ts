import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  telemetry: false,
  serverHandlers: [{ route: '/api/**', handler: '~/server/index.ts' }],
  modules: ['@nuxtjs/eslint-module'],
})
