<template>
  <header
    class="h-16 flex justify-around sticky top-0 left-0 z-50 opacity-75 bg-white border-b shadow"
  >
    <h1 class="my-auto text-lg">
      <nuxt-link to="/" class="p-5">Mii</nuxt-link>
    </h1>
    <nav class="my-auto w-2/3 sm:w-1/2">
      <ul class="flex justify-around text-xs">
        <li v-for="nav in navs" :key="nav.text">
          <nuxt-link :to="nav.url" class="p-5 md:text-md">{{
            nav.text
          }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
interface Nav {
  url: string
  text: string
}

const navs: Nav[] = [
  { url: '/credits/', text: 'Credits' },
  { url: '/works/', text: 'Works' },
  { url: '/contact/', text: 'Contact' },
]

export default {
  data() {
    return { navs }
  },
}
</script>
