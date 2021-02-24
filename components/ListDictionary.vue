<template>
  <div>
    <ul>
      <li v-for="(diction, index) in dictionary" :key="index">
        <div
          class="flex my-auto font-bold text-lg cursor-pointer"
          @click="
            $copyText(
              'https://mii.community/dictionary/#' +
                diction.idiom.replace(/ /g, '-')
            ),
              afterCopy()
          "
        >
          <span>-</span>
          <h3
            :id="diction.idiom.replace(/ /g, '-')"
            class="-mt-16 pt-16 ml-2 text-gray-900"
          >
            {{ diction.idiom }}
          </h3>
          <img
            class="my-auto ml-2 h-4 w-4"
            src="~/assets/img/mark-link.svg"
            alt="リンクを表しているマーク"
          />
        </div>
        <h4 class="text-gray-800 mt-2">{{ diction.mean }}</h4>
        <div
          v-if="index != dictionary.length - 1"
          key="not-last-child-diction"
          class="border-t border-dotted border-gray-500 my-3"
        ></div>
      </li>
    </ul>
    <div
      id="notifyCopied"
      class="text-lg fixed bottom-0 z-30 flex justify-center items-center w-64 h-12 mb-4 text-white bg-blue-500 rounded-xl shadow duration-200"
      :class="{ show: notifyCopied }"
    >
      Copied!
    </div>
  </div>
</template>

<script lang="ts">
import { dictionary } from '~/data/dictionary'

import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

export default Vue.extend({
  data() {
    return { dictionary, notifyCopied: false }
  },
  mounted() {
    const hash = decodeURI(location.hash)
    if (hash && hash.match(/^#.+$/)) {
      this.$scrollTo(hash)
    }
  },
  methods: {
    afterCopy: function () {
      if (this.notifyCopied == true) {
        return
      }
      this.notifyCopied = true
      setTimeout(this.hideNotify, 3000)
    },
    hideNotify() {
      this.notifyCopied = false
    },
  },
})
</script>

<style scoped>
#notifyCopied {
  opacity: 0;
  left: calc(50% - 128px);
  transform: translateY(100%);
  &.show {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
