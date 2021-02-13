<template>
  <div class="wrapper">
    <main class="container">
      <div class="flex">
        <h1 class="heading text-5xl">Contact</h1>
        <img
          class="force-16 md:force-32 my-auto ml-4"
          src="~/assets/img/mention.svg"
          alt="メンションを表すイラスト"
        />
      </div>

      <div class="container fade">
        <h2 class="heading my-6">升田 天珠, Tenzyu Masuda</h2>
        <ul class="space-y-2 sm:max-w-screen-sm">
          <li v-for="connect in connects" :key="connect.url">
            <a
              target="_blank"
              rel="noopener noreferrer"
              :href="connect.url"
              :class="`shadow-md flex items-center fade-button py-3 text-black border-${connect.color} hover:bg-${connect.color}`"
            >
              <div class="w-1/3 flex justify-center">
                <img
                  class="h-10 w-auto"
                  :src="require(`~/assets/img/${connect.img}.svg`)"
                  :alt="connect.alt"
                />
              </div>
              <span
                class="flex items-center text-lg font-medium tracking-wide"
                >{{ connect.text }}</span
              >
            </a>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
interface Connect {
  url: string
  img: string
  alt: string
  text: string
  color: string
}

const connects: Connect[] = [
  {
    url: 'https://twitter.com/tenzyumasuda',
    img: 'icon-twitter',
    alt: 'icon twitter',
    text: 'Twitter',
    color: 'blue-600',
  },
  {
    url: 'https://instagram.com/tenzyumasuda',
    img: 'icon-instagram',
    alt: 'icon instagram',
    text: 'Instagram',
    color: 'pink-600',
  },
  {
    url: 'https://www.paypal.me/masudatenzyu',
    img: 'icon-paypal',
    alt: 'icon paypal',
    text: 'PayPal (Donate)',
    color: 'blue-700',
  },
]
import { MetaType } from '~/utils/types'
import MetaCurrentPage from '~/utils/meta'

const metaCurrentPage: MetaType = {
  title: 'Contact',
  description: '管理人への連絡先を纏めているページです。',
  url: 'https://mii.community/contact/',
  type: 'website',
}

export default {
  mixins: [MetaCurrentPage],
  data() {
    return { connects, metaCurrentPage }
  },
}
</script>
