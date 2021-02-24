<template>
  <ul>
    <li v-for="(contributor, index) in contributors" :key="index">
      <div class="flex my-auto font-bold text-lg">
        <span>-</span>
        <h3 class="ml-2 text-gray-900">{{ contributor.name }}</h3>
      </div>
      <h4
        v-for="value in contributor.values"
        :key="value"
        class="text-gray-800"
      >
        {{ value }}
      </h4>
      <div
        v-if="index != contributors.length - 1"
        key="not-last-child-contributor"
        class="border-t border-dotted border-gray-500 my-3"
      ></div>
    </li>
  </ul>
</template>

<script lang="ts">
import { contributors } from '~/data/contributors'
export default {
  data() {
    return { contributors }
  },
}
</script>
