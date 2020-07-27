<template>
  <div class="home">
    <Navbar />
    <router-view />
    <Foot />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Foot from "@/views/Foot";

export default {
  name: "Home",
  components: {
    Navbar,
    Foot
  }
};
</script>
