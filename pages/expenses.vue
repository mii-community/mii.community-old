<template>
  <div class="wrapper">
    <main class="container">
      <div class="flex">
        <h1 class="heading text-5xl">Expenses</h1>
        <img
          class="force-16 md:force-32 my-auto ml-4"
          src="~/assets/img/credit_card.svg"
          alt="クレジットカードを表しているイラスト"
        />
      </div>

      <div class="container fade">
        <h2 class="heading my-6">みぃコミュニティの収支など</h2>
        <card-money></card-money>
        <table-expenses class="mt-4"></table-expenses>
        <p class="mt-8 mb-4 pl-4 border-l-2 border-gray-600">
          残高のマイナス分は管理人が出しています。
        </p>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { MetaType } from '~/utils/types'
import MetaCurrentPage from '~/utils/meta'

const metaCurrentPage: MetaType = {
  title: 'Expenses',
  description: 'みぃコミュニティのお金について載せているページです。',
  url: 'https://mii.community/expenses/',
  type: 'website',
}

export default {
  mixins: [MetaCurrentPage],
  data() {
    return { metaCurrentPage }
  },
}
</script>
