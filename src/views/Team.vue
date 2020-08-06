<template>
  <div>
      <div class="team-box">
        <Button type="primary">Primary</Button>
        <img :src="src" class="img">
      </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    src:require('@/assets/img/test.jpg')
  }
}
}
</script>

<style lang="less" scoped>
.team-box{
    width: 1280px;
    margin: 0 auto;
}

.img{
  width: 100%;
}
</style>