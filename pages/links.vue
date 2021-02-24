<template>
  <div class="wrapper">
    <main class="container">
      <div class="flex">
        <h1 class="heading text-5xl">Links</h1>
        <img
          class="force-16 md:force-32 my-auto ml-4"
          src="~/assets/img/link.svg"
          alt="リンクを表しているイラスト"
        />
      </div>

      <div class="container fade">
        <h2 class="heading my-6">みぃコミュニティの関連リンク集</h2>
        <list-links></list-links>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { MetaType } from '~/utils/types'
import MetaCurrentPage from '~/utils/meta'

const metaCurrentPage: MetaType = {
  title: 'Links',
  description: 'みぃコミュニティの関連リンクを載せているページです。',
  url: 'https://mii.community/links/',
  type: 'website',
}

export default {
  mixins: [MetaCurrentPage],
  data() {
    return { metaCurrentPage }
  },
}
</script>
