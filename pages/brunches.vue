<template>
  <div class="wrapper">
    <main class="container">
      <div class="flex">
        <h1 class="heading text-5xl">Brunches</h1>
        <img
          class="force-16 md:force-32 my-auto ml-4"
          src="~/assets/img/link.svg"
          alt="リンクを表しているイラスト"
        />
      </div>

      <div class="container fade">
        <h2 class="heading my-6">mii.community のサブドメイン一覧</h2>
        <card-brunch></card-brunch>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { MetaType } from '~/utils/types'
import MetaCurrentPage from '~/utils/meta'

const metaCurrentPage: MetaType = {
  title: 'Brunches',
  description: 'みぃコミュニティのサブドメイン一覧を載せているページです。',
  url: 'https://mii.community/brunches/',
  type: 'website',
}

export default {
  mixins: [MetaCurrentPage],
  data() {
    return { metaCurrentPage }
  },
}
</script>
