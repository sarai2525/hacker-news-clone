// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  serverHandlers: [{ route: "/api/**", handler: "~/server/index.ts" }],
  modules: ["@nuxtjs/eslint-module"],
});
