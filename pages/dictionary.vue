<template>
  <div class="wrapper">
    <main class="container">
      <div class="flex">
        <h1 class="heading text-5xl">Dictionary</h1>
        <img
          class="force-16 md:force-32 my-auto ml-4"
          src="~/assets/img/chat.svg"
          alt="チャットを表しているイラスト"
        />
      </div>

      <div class="container fade">
        <h2 class="heading my-6">みぃコミュニティの慣用句・用語集</h2>
        <list-dictionary></list-dictionary>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { MetaType } from '~/utils/types'
import MetaCurrentPage from '~/utils/meta'

const metaCurrentPage: MetaType = {
  title: 'Dictionary',
  description: 'みぃコミュニティの慣用句や用語などを載せているページです。',
  url: 'https://mii.community/dictionary/',
  type: 'website',
}

export default {
  mixins: [MetaCurrentPage],
  data() {
    return { metaCurrentPage }
  },
}
</script>
