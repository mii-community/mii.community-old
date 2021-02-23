<template>
  <ul>
    <li v-for="(supporter, index) in supporters" :key="index">
      <div class="flex my-auto font-bold text-lg">
        <span>-</span>
        <h3 class="ml-2 text-gray-900">{{ supporter.name }}</h3>
      </div>
      <div class="flex text-gray-800 items-center">
        <span>ひとこと:</span>
        <span class="ml-1">{{ supporter.message }}</span>
      </div>
      <div
        v-if="index != supporters.length - 1"
        key="not-last-child-supporter"
        class="border-t border-dotted border-gray-500 my-3"
      ></div>
    </li>
  </ul>
</template>

<script lang="ts">
interface Supporter {
  name: string
  message: string
}

const supporters: Supporter[] = [
  { name: 'HiraginoYuki', message: '1兆円寄付しました。' },
  { name: 'Hirosuke', message: 'こんにちは' },
]

export default {
  data() {
    return { supporters }
  },
}
</script>
