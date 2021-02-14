<template>
  <div class="wrapper">
    <main class="container">
      <div class="flex">
        <h1 class="heading text-5xl">History</h1>
        <img
          class="force-16 md:force-32 my-auto ml-4"
          src="~/assets/img/updated.svg"
          alt="来歴を表しているイラスト"
        />
      </div>

      <div class="container fade">
        <h2 class="heading my-6">みぃコミュニティの来歴</h2>
        <card-history></card-history>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { MetaType } from '~/utils/types'
import MetaCurrentPage from '~/utils/meta'

const metaCurrentPage: MetaType = {
  title: 'History',
  description: 'みぃコミュニティの来歴を載せているページです。',
  url: 'https://mii.community/history/',
  type: 'website',
}

export default {
  mixins: [MetaCurrentPage],
  data() {
    return { metaCurrentPage }
  },
}
</script>
