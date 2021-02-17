<template>
  <div>
    <header
      class="h-16 flex justify-around sticky top-0 left-0 z-50 opacity-75 bg-white border-b shadow"
    >
      <h1 class="my-auto text-lg">
        <nuxt-link to="/" class="p-5" v-on:click.native="flag = false"
          >Mii</nuxt-link
        >
      </h1>

      <button
        id="menu-toggle"
        class="p-5 focus:outline-none"
        v-on:click="flag = !flag"
      >
        MENU
      </button>
      <nav id="nav-in-header" class="hidden my-auto w-2/3 max-w-screen-md">
        <ul class="flex justify-around text-sm">
          <li v-for="(nav, index) in navs" :key="index">
            <nuxt-link :to="nav.url" class="py-5">{{ nav.text }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <nav
      id="menu-body"
      class="w-full h-screen fixed top-0 left-0 z-30 z-100 h-full bg-gray-700 transition ease-in-out duration-200"
      :class="{ open: flag }"
    >
      <ul class="mx-auto mt-20 space-y-3">
        <li
          v-for="(nav, index) in navs"
          :key="index"
          class="w-1/2 md:max-w-screen-md mx-auto text-center text-gray-100 text-2xl border-b border-white duration-300"
        >
          <nuxt-link
            class="w-full block py-3"
            :to="nav.url"
            v-on:click.native="flag = false"
          >
            {{ nav.text }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
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
  { url: '/history/', text: 'History' },
  { url: '/brunches/', text: 'Brunches' },
  { url: '/dictionary/', text: 'Dictionary' },
]

export default {
  data() {
    return {
      navs,
      flag: false,
    }
  },
}
</script>

<style scoped>
#menu-body {
  opacity: 0;
  transform: translateX(-100%);
  &.open {
    opacity: 1;
    transform: translateX(0%);
  }
}

@media (min-width: 1000px) {
  #nav-in-header {
    display: block;
  }
  #menu-toggle {
    display: none;
  }
}
</style>
