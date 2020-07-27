<template>
  <div class="home">
    <Banner />
    <Content />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Content from '@/views/content/Content'

export default {
  name: "Home",
  components: {
    Banner,
    Content,
  }
};
</script>
