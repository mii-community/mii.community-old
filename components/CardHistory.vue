<template>
  <ul>
    <li v-for="(history, index) in histories" :key="index">
      <div class="flex my-auto font-bold text-lg">
        <span>-</span>
        <h3 class="ml-2 text-gray-900">{{ history.date }}</h3>
      </div>
      <div v-for="value in history.values" :key="value" class="text-gray-800">
        {{ value }}
      </div>
      <div
        v-if="index != histories.length - 1"
        key="not-last-child-history"
        class="border-t border-dotted border-gray-500 my-3"
      ></div>
    </li>
  </ul>
</template>

<script lang="ts">
interface History {
  date: string
  values: Array<string>
}

const histories: History[] = [
  {
    date: '2020年 4月 21日',
    values: ['🌟Discordサーバー「みぃ」誕生', 'DiscordBot「みぃ様」を実装'],
  },
  {
    date: '2020年 5月 2日',
    values: ['DiscordBot「みゃあ様」(みぃ様のデバッグ)を追加'],
  },
  {
    date: '2020年 5月 16日',
    values: ['MinecraftServer「みぃクラフト」を開始'],
  },
  {
    date: '2020年 8月 11日',
    values: ['TwitterList「みぃツイート」を公開'],
  },
  {
    date: '2021年 1月 10日',
    values: [
      'Website「みぃサイト(旧)」を公開',
      'GoogleCalendar「みぃカレンダー」を公開',
    ],
  },
  {
    date: '2021年 1月 16日',
    values: ['🌟“Discordサーバー「みぃ」”から「みぃコミュニティ」へ拡張'],
  },
  {
    date: '2021年 1月 17日',
    values: ['みぃプレイリスト(Spotify版)を公開'],
  },
  {
    date: '2021年 2月 5日',
    values: ['みぃサーバーに レベル の概念を追加'],
  },
  {
    date: '2021年 2月 7日',
    values: ['みぃプレイリスト(YouTube版)を公開'],
  },
  {
    date: '2021年 2月 10日',
    values: ['みぃサーバーに オンライン時間ランキング を実装'],
  },
  {
    date: '2021年 2月 14日',
    values: [
      'みぃサイト(旧)を閉鎖',
      '🌟みぃコミュニティの公式サイトを公開',
      'Twitterの公式アカウントを公開',
      'Twitterの公式タグを決定: #みぃコミュニティ',
    ],
  },
]

export default {
  data() {
    return { histories }
  },
}
</script>
