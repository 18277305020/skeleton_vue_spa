<template>
  <div class="home">
  <Navbar />
  <Banner />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'

export default {
  name: 'Home',
  components: {
    Navbar,
    Banner
  },
}
</script>
