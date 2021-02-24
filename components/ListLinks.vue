<template>
  <ul>
    <li v-for="(link, index) in links" :key="index">
      <div class="flex my-auto font-bold text-lg">
        <span>-</span>
        <h3 class="ml-2 text-gray-900">{{ link.desc }}</h3>
      </div>
      <a :href="link.url" class="text-blue-700">{{ link.url }}</a>
      <div
        v-if="index != links.length - 1"
        key="not-last-child-link"
        class="border-t border-dotted border-gray-500 my-3"
      ></div>
    </li>
  </ul>
</template>

<script>
import { links } from '~/data/links'
export default {
  data() {
    return { links }
  },
}
</script>

<style></style>
