<template>
  <div class="wrapper">
    <main class="container">
      <div class="flex">
        <h1 class="heading text-5xl">Credits</h1>
        <img
          class="force-16 md:force-32 my-auto ml-4"
          src="~/assets/img/team.svg"
          alt="集団、チームを表しているイラスト"
        />
      </div>

      <div class="fade mt-6">
        <h2 id="Supporters" class="heading text-2xl mt-2 mb-3">Supporters</h2>
        <list-supporters></list-supporters>
        <h2 id="Contributors" class="heading text-2xl mt-6 mb-3">
          Contributors
        </h2>
        <list-contributors></list-contributors>
        <div class="mt-8 mb-4 pl-4 border-l-2 border-gray-600">
          <p>
            Supporters には、Patreon
            などでみぃコミュニティを金銭的に支援してくださった方の
            名前と一言コメント を載せています。
          </p>
          <p>
            Contributors
            には、みぃコミュニティになんらかの形で貢献してくださった方の
            名前と貢献内容 を載せています。
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { MetaType } from '~/utils/types'
import MetaCurrentPage from '~/utils/meta'

const metaCurrentPage: MetaType = {
  title: 'Credits',
  description: '寄付や貢献などをしてくれた方を載せているページです。',
  url: 'https://mii.community/credits/',
  type: 'website',
}

export default {
  mixins: [MetaCurrentPage],
  data() {
    return { metaCurrentPage }
  },
}
</script>
