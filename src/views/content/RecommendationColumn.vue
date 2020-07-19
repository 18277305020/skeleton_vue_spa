<template>
  <div>
      <img :src="banner" class="banner-box">
  </div>
</template>

<script>
export default {
data(){
        return{
            banner:require('@/assets/img/banner.jpg')
        }
    }
}
</script>

<style lang="less" scoped>
.banner-box{
    display: block;
    width: 100%;
}
</style>