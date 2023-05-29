import { defineNuxtConfig } from 'nuxt/config'
import pkg from './package.json'

export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: `%s - ${pkg.name}`,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  telemetry: false,
  serverHandlers: [{ route: '/api/**', handler: '~/server/api.ts' }],
  modules: ['@nuxtjs/eslint-module', '@element-plus/nuxt'],
  srcDir: 'src',
})
