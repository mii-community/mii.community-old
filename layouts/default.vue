<template>
  <div class="bgWrapper" ontouchstart="">
    <the-header></the-header>
    <div class="min-height md:max-w-screen-md md:mx-auto">
      <Nuxt />
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: `https://mii.community${this.$route.path}`,
        },
      ],
    }
  },
}
</script>

<style scoped>
.bgWrapper {
  background-color: #f7f8fb;
}

.min-height {
  /* 
  192px は header + footer
  1px は スクロールバーがあるときとないときの横幅のズレをなくすため
  */

  min-height: calc(100vh - 192px + 1px);
}
</style>
