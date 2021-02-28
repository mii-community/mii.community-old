<template>
  <ul>
    <li v-for="(history, index) in histories" :key="index">
      <div class="flex my-auto font-bold text-lg">
        <span>-</span>
        <h3 class="ml-2 text-gray-900">{{ history.date }}</h3>
      </div>
      <h4 v-for="value in history.values" :key="value" class="text-gray-800">
        {{ value }}
      </h4>
      <div
        v-if="index != histories.length - 1"
        key="not-last-child-history"
        class="border-t border-dotted border-gray-500 my-3"
      ></div>
    </li>
  </ul>
</template>

<script lang="ts">
import { histories } from '~/data/histories'

export default {
  data() {
    return { histories }
  },
}
</script>
