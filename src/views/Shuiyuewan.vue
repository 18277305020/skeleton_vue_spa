<template>
  <div class="box">
    <div class="BirdIllustration">鸟战图</div>

    <div>
      <div class="title">户型图</div>

      <div class="li">
        <div
          class="item"
          v-for="(i,index) in item"
          :key="i+index"
          :class="(index + 1)%3 === 0 ?'margin-n':''"
        >12313</div>
      </div>
    </div>

    <div>
      <div class="title">样板房</div>
       <div class="li">
      <div
          class="item"
          v-for="(i,index) in item"
          :key="i+index"
          :class="(index + 1)%3 === 0 ?'margin-n':''"
        >12313</div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: [1, 2, 3, 4, 1, 2, 3, 4]
    };
  }
};
</script>

<style scoped>
.box {
  padding: 20px;
}

.BirdIllustration {
  height: 400px;
  border-radius: 4px;
  background: blueviolet;
}

.title {
  margin: 20px auto;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.li {
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.item {
  width: 400px;
  height: 200px;
  margin-bottom: 20px;
  margin-right: 40px;
  border-radius: 4px;
  background: chocolate;
}

.margin-n {
  margin-right: 0;
}
</style>