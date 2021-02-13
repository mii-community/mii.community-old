export default {
  head() {
    return {
      title: this.metaCurrentPage.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.metaCurrentPage.title,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.metaCurrentPage.title,
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: this.metaCurrentPage,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.metaCurrentPage.description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.metaCurrentPage.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.metaCurrentPage.url,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: this.metaCurrentPage.type,
        },
      ],
    }
  },
}
