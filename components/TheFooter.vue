<template>
  <footer
    class="h-32 flex items-center justify-center bg-white border-t text-sm"
  >
    <div class="leading-6 justify-center">
      <div class="flex justify-center">
        <p class="flex">
          このサイトの問題を見つけた場合は
          <a
            class="text-blue-700 flex items-center"
            href="https://github.com/mii-community/mii.community/issues"
            rel="noopener nornoreferrer"
            target="_blank"
          >
            <img
              class="w-4 h-4"
              src="~/assets/img/icon-github.svg"
              alt="GitHubの白黒の丸型アイコン"
            />
            こちら
          </a>
          へ。
        </p>
      </div>
      <div>
        <ul class="flex justify-center">
          <li class="px-2" v-for="page in my_site_maps" :key="page.text">
            <nuxt-link :to="page.to">
              <p class="text-blue-700">{{ page.text }}</p>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <p class="text-center">みぃコミュニティ</p>
      <div id="copyright" class="font-thin text-center">
        <small class="text-sm">© 2021 Tenzyu Masuda</small>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
interface mySiteMap {
  to: string
  text: string
}

const my_site_maps: mySiteMap[] = [
  { to: '/credits/', text: 'credits' },
  { to: '/works/', text: 'works' },
  { to: '/contact/', text: 'contact' },
  { to: '/history/', text: 'history' },
  { to: '/brunches/', text: 'brunches' },
]

export default {
  data() {
    return { my_site_maps }
  },
}
</script>
