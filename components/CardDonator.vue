<template>
  <ul class="space-y-6">
    <li v-for="(donator, index) in donators" :key="index">
      <div class="flex my-auto font-bold text-lg">
        <span>-</span>
        <h3 class="ml-2 text-gray-900">{{ donator.name }}</h3>
      </div>
      <div class="flex text-gray-800 items-center">
        <span>ひとこと:</span>
        <span class="ml-1">{{ donator.message }}</span>
      </div>
      <div
        v-if="index != donators.length - 1"
        key="not-last-child-donator"
        class="border-t border-dotted border-gray-500 my-3"
      ></div>
    </li>
  </ul>
</template>

<script lang="ts">
interface Donator {
  name: string
  message: string
}

const donators: Donator[] = [
  { name: 'HiraginoYuki', message: '1兆円寄付しました。' },
]

export default {
  data() {
    return { donators }
  },
}
</script>
