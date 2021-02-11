<template>
  <div class="wrapper">
    <main class="fade">
      <div class="fade flex justify-center">
        <img
          src="~/assets/img/socialmedia.svg"
          alt="ソーシャルメディアを表すイラスト"
          class="force-32"
        />
      </div>
      <div id="links" class="sm:max-w-screen-sm mx-auto">
        <ul class="space-y-2">
          <li v-for="link in links" :key="link.url">
            <a
              :href="link.url"
              target="_blank"
              ref="noopener noreferrer"
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
    url: 'https://discord.gg/Jqsd7VcDur',
    img: 'icon-discord',
    alt: 'icon discord',
    text: 'Join Our Place',
    color: 'indigo-600',
  },
  {
    url: 'https://github.com/mii-community',
    img: 'icon-github',
    alt: 'icon github',
    text: 'Read Our Codes',
    color: 'gray-900',
  },
  {
    url: 'https://twitter.com/i/lists/1293148576634114049',
    img: 'icon-twitter',
    alt: 'icon twitter',
    text: 'See Our Tweets',
    color: 'blue-500',
  },
  {
    url:
      'https://open.spotify.com/playlist/0nS5HXPdDe3RBGHshYpOp4?si=9L3X88gjQlK99KRDyDrdEA',
    img: 'icon-spotify',
    alt: 'icon spotify',
    text: 'Hear Our Favorites',
    color: 'green-700',
  },
  {
    url:
      'https://calendar.google.com/calendar/u/1?cid=N25mZW1hc3Z2OXBncjJlbmVtOGw0MDVmZmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ',
    img: 'icon-calendar',
    alt: 'icon calendar',
    text: 'Check Our Events',
    color: 'blue-600',
  },
]

export default {
  data() {
    return { links }
  },
}
</script>
