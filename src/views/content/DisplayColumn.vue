<template>
  <div class="display-box">
    <div v-for="i in 2" :key="i.id" class="display-item">
      <div class="display-hand">
        <div class="display-hand-left">
          <div>UNIT TYPE</div>
          <div>户型图</div>
        </div>
        <div class="move">更多</div>
      </div>
      <div class="display-content">
        <div class="display-content-title">
          <h4>水悦湾</h4>
          <div class="display-content-information">内容内内容内内容内内容内内容内内容内内容内内容内内容内</div>
        </div>
        <div class="display-content-img-list">
          <div class="display-content-img" v-for="i in 4" :key="i.id"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.display-box {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.display-item {
  width: 49%;
  border: 1px solid #e7e7e7;
  border-top: 0;
  border-bottom: 0;
}

.display-hand {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #e7e7e7;
}

.display-hand-left{
    display: flex;
    font-weight: bold;

    div{
        margin-right: 20px;
    }
}

.move{
    font-size: 14px;
    color: #999;
    cursor: pointer;
}

.display-content {
  display: flex;
  padding: 20px;
}

.display-content-title {
  width: 140px;
  padding-right: 20px;
  text-align: center;
}

.display-content-information {
  margin-top: 20px;
   text-align: left;
}

.display-content-img-list {
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.display-content-img {
  width: 140px;
  height: 140px;
  margin-bottom: 4px;
  background: orange;
}
</style>