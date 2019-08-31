<template>
<Layout>
<h1>Zilch</h1>   

</Layout>
</template>
<script>
export default {
      head () {
        return {
          title: `Gridsome Vue Wordpress`,
          metaInfo: [
            {
              hid: 'description',
              name: 'description',
              content: 'Gridsome Vue - A front-end wordpress SEO friendly in vue.js'
            },
            {
              property: 'og:title',
              content: 'Gridsome Vue'
            },
            {
              property: 'og:description',
              content: 'Gridsome Vue - A front-end wordpress SEO friendly in vue.js'
            },
            {
              property: 'og:type',
              content: 'post'
            },
            {
              name: 'twitter:title',
              content: 'Gridsome Vue'
            },
            {
              name: 'twitter:description',
              content: 'Gridsome Vue - A front-end wordpress SEO friendly in vue.js'
            }
          ]
        }
      }
    }
</script>
<style>
.container {
width:90%;
}
</style>
