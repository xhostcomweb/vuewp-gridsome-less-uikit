<template>
  <div class="post-div">
   <h2 class="title is-3 is-light is-spaced" v-html="post.title" />
    <div class="has-text-light" v-html="post.excerpt" />
    <br />
    <g-link class="button is-info" :to="post.path">
      Read More on Vue site
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="css" scoped>
     .post-div {
     margin-top:40px!important;
     }
</style>
