<template>
  <div class="wrapper">
    <main class="container fade">
      <div class="flex mx-auto justify-center items-center">
        <img
          class="w-4/5 my-4 lg:w-1/2 lg:my-8"
          src="~/assets/img/page_not_found.svg"
          alt="404 Page を表しているイラスト"
        />
      </div>
      <h1 class="heading text-center text-3xl">PAGE NOT FOUND</h1>
      <div class="container px-4 mx-auto">
        <hr class="my-8 border" />
        <div class="text-gray-900 novel">{{ miiNovel.value }}</div>
        <div class="text-gray-700 border-l border-gray-500 pl-4 my-4 flex">
          <h2>
            {{ miiNovel.author }}
          </h2>
          <span class="px-2">|</span>
          <h3>みぃ小説</h3>
          <span class="pl-2">- {{ miiNovel.identifyText }}</span>
        </div>

        <nuxt-link to="/"
          ><h3 class="text-blue-700 text-xl my-4">
            Back to the home page.
          </h3></nuxt-link
        >
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { miiNovels } from '~/utils/novels'

const miiNovel = miiNovels[Math.floor(Math.random() * miiNovels.length)]
export default Vue.extend({
  data() {
    return { miiNovel }
  },
})
</script>

<style scoped>
.novel {
  word-wrap: break-word;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  white-space: break-spaces;
}
</style>
