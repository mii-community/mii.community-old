<template>
  <ul>
    <li
      class="transform duration-500 hover:shadow-lg rounded-bl-lg rounded-br-lg px-4 py-2 -mx-3"
      v-for="(subdomain, index) in subdomains"
      :key="index"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        :href="`https://${subdomain.sub}.mii.community/`"
      >
        <div class="flex my-auto font-bold text-lg">
          <h3 class="text-blue-700">
            https://{{ subdomain.sub }}.mii.community/
          </h3>
        </div>
        <h4 class="text-gray-800 no-underline">
          {{ subdomain.desc }}
        </h4>
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
interface Subdomain {
  sub: string
  desc: string
}

const subdomains: Subdomain[] = [
  {
    sub: 'tenzyu',
    desc: '升田天珠 のウェブサイトへのリダイレクトです。',
  },
  { sub: 'starlight', desc: 'Starlight のホームページです。' },
]

export default {
  data() {
    return { subdomains }
  },
}
</script>
