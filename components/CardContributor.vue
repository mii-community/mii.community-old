<template>
  <ul>
    <li v-for="(contributor, index) in contributors" :key="index">
      <div class="flex my-auto font-bold text-lg">
        <span>-</span>
        <h3 class="ml-2 text-gray-900">{{ contributor.name }}</h3>
      </div>
      <span class="text-gray-800">{{ contributor.value }}</span>
      <div
        v-if="index != contributors.length - 1"
        key="not-last-child-contributor"
        class="border-t border-dotted border-gray-500 my-3"
      ></div>
    </li>
  </ul>
</template>

<script lang="ts">
interface Contributor {
  name: string
  value: string
}

const contributors: Contributor[] = [
  {
    name: '橘。',
    value: 'DiscordBot「みぃ様」のイラストレーター',
  },
  {
    name: 'Kesigomon',
    value: 'MinecraftServer「みぃクラフト」のホスト',
  },
  {
    name: 'chun37',
    value: '「みぃ様」のコードレビュー, リファクタリング',
  },
  {
    name: 'Hirosuke',
    value: 'DiscordBot「Wikipedian」の発案, 監督',
  },
  {
    name: 'AttoCat',
    value: '「みぃ様」にPoll機能を実装',
  },
]

export default {
  data() {
    return { contributors }
  },
}
</script>
