export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    title: '',
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - みぃ` : 'みぃ'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '',
        template: (e) => {
          return e ? `${e} - みぃ` : 'みぃ'
        },
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '',
        template: (e) => {
          return e ? `${e} - みぃ` : 'みぃ'
        },
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: '',
        template: (e) => {
          return e ? `${e} - みぃ` : 'みぃ'
        },
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
        template: (e) => {
          return e ? `${e} - みぃコミュニティ` : 'みぃコミュニティ'
        },
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '',
        template: (e) => {
          return e ? `${e} - みぃコミュニティ` : 'みぃコミュニティ'
        },
      },
      { hid: 'og:url', property: 'og:url', content: 'https://mii.community' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@tenzyumasuda' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://mii.community/icon.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/tailwind.css', '~/assets/css/extend.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
