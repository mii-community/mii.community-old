<template>
  <div class="wrapper">
    <main class="fade">
      <div class="fade flex justify-center">
        <img
          src="~/assets/img/socialmedia.svg"
          alt="ソーシャルメディアを表しているイラスト"
          class="force-32"
        />
      </div>
      <div id="links" class="sm:max-w-screen-sm mx-auto">
        <ul class="space-y-2">
          <li v-for="link in links" :key="link.url">
            <a
              target="_blank"
              rel="noopener noreferrer"
              :href="link.url"
              :class="`shadow-md flex items-center fade-button py-3 text-black border-${link.color} hover:bg-${link.color}`"
            >
              <div class="w-1/3 flex justify-center">
                <img
                  class="h-10 w-auto"
                  :src="require(`~/assets/img/${link.img}.svg`)"
                  :alt="link.alt"
                />
              </div>
              <span class="flex items-center text-lg font-medium tracking-wide">
                {{ link.text }}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
interface Link {
  url: string
  img: string
  alt: string
  text: string
  color: string
}

const links: Link[] = [
  {
    url: 'https://invite.mii.community',
    img: 'icon-discord',
    alt: 'Discordの白黒の丸型アイコン',
    text: 'Join Our Place',
    color: 'indigo-600',
  },
  {
    url: 'https://open.mii.community/github',
    img: 'icon-github',
    alt: 'GitHubの白黒の丸型アイコン',
    text: 'Read Our Codes',
    color: 'gray-900',
  },
  {
    url: 'https://open.mii.community/tweets',
    img: 'icon-twitter',
    alt: 'Twitterの白黒の丸型アイコン',
    text: 'See Our Tweets',
    color: 'blue-500',
  },
  {
    url: 'https://open.mii.community/scrapbox',
    img: 'icon-scrapbox',
    alt: 'Scrapboxの白黒の丸型アイコン',
    text: 'View Our Notes',
    color: 'green-500',
  },
  {
    url: 'https://open.mii.community/patreon',
    img: 'icon-patreon',
    alt: 'Patreon の白黒の丸型アイコン',
    text: 'Support Mii Community',
    color: 'orange-500',
  },
]

export default {
  data() {
    return { links }
  },
}
</script>
