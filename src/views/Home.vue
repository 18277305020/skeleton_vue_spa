<template>
  <div class="home">
    <Navbar />
    <Banner />
    <Content />
    <Foot />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Content from '@/views/content/Content'
import Foot from "@/views/Foot";

export default {
  name: "Home",
  components: {
    Navbar,
    Banner,
    Content,
    Foot
  }
};
</script>
