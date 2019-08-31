<template>
<body class="tm-background">
<div class="layout">
<Header/> 
<Canvas/>
<main class="container">
 <slot/>
 </main>
<Footer/>
</div>
</body>
</template>
<script>
import Header from '~/components/Header.vue'
import Canvas from '~/components/Canvas.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Header,
    Canvas,
    Footer
  }
}
</script>
