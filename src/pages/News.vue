<template>
  <Layout>
                <section id="start" class="section is-transparent is-relative">
                <!-- Container -->
                <div class="container">
                  <div class="columns is-vcentered">
        <div class="columns is-vcentered">
      <div class="column is-12">

     <h1>Welcome to Vue Wordpress blog</h1>
    <div class="post-list">
      <p class="has-text-light" v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </p>
    </div>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
    </div>
</div>
                  </div></div>
                <!-- /Container -->
                </section>
    
    
  </Layout>
   <!-- Icon Features section -->
            
            
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'

export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: 'Milligram Vue Wordpress News'
  }
}
</script>
