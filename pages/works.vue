<template>
  <div class="wrapper">
    <main class="container">
      <div class="flex">
        <h1 class="heading text-5xl">Works</h1>
        <img
          class="force-16 md:force-32 my-auto ml-4"
          src="~/assets/img/portfolio.svg"
          alt="ポートフォリオを表すイラスト"
        />
      </div>

      <div class="container fade">
        <h2 class="heading my-6">メンバーの作品</h2>
        <card-work></card-work>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { MetaType } from '~/utils/types'
import MetaCurrentPage from '~/utils/meta'

const metaCurrentPage: MetaType = {
  title: 'Works',
  description: 'メンバーの作品の一部を載せているページです。',
  url: 'https://mii.community/works/',
  type: 'website',
}

export default {
  mixins: [MetaCurrentPage],
  data() {
    return { metaCurrentPage }
  },
}
</script>
