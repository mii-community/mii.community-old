export default {
  server: {
    host: '0.0.0.0',
    port: 3110
  },
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
    titleTemplate: (e) => {
      return e ? `${e} - みぃ` : 'みぃコミュニティ'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '',
        template: (e) => {
          return e ? `${e} - みぃ` : 'みぃコミュニティ'
        },
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '',
        template: (e) => {
          return e ? `${e} - みぃ` : 'みぃコミュニティ'
        },
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: '',
        template: (e) => {
          return e ? `${e} - みぃ` : 'みぃコミュニティ'
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
      { hid: 'og:url', property: 'og:url', content: 'https://mii.community/' },
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
    '@nuxtjs/google-analytics',
  ],

  googleAnalytics: {
    id: 'UA-189734739-1',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/redirect-module',
    '@nuxtjs/sitemap',
    'nuxt-clipboard2',
    'vue-scrollto/nuxt',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
      name: 'みぃ',
    },
  },

  redirect: [
    {
      from: '^(\\/[^\\?]*[^\\/])(\\?.*)?$',
      to: '$1/$2',
      statusCode: 301,
    },
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://mii.community/',
    trailingSlash: true,
    exclude: ['/for-ignore-purgecss/'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    trailingSlash: true,
    extendRoutes(routes, resolve) {
      routes.push({
        name: '404error',
        path: '*',
        component: resolve('~/pages/404.vue'),
      })
    },
  },
}
