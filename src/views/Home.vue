<template>
  <div class="home">
  <Navbar />
  <Banner />
  <Content />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Content from '@/views/content/Content'

export default {
  name: 'Home',
  components: {
    Navbar,
    Banner,
    Content
  },
}
</script>
