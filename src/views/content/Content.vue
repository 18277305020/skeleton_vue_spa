<template>
  <div class="content-key">
    <h3>置业团队</h3>
    <div class="column">
      <div class="column-bar">
        <AdColumn />
      </div>
    </div>
     <h3>优质推荐</h3>
    <div class="column">
      <div class="column-bar">
        <DisplayColumn />
      </div>
    </div>
    <h3>更多动态</h3>
    <div class="column">
      <div class="column-bar">
        <RecommendationColumn />
      </div>
    </div>
    <h3>关于我们</h3>
    <div class="column">
      <div class="column-bar">
        <Team />
      </div>
    </div>
  </div>
</template>

<script>
import AdColumn from "./AdColumn";
import DisplayColumn from "./DisplayColumn";
import RecommendationColumn from "./RecommendationColumn";
import Team from "./Team";

export default {
  components: {
    AdColumn,
    DisplayColumn,
    RecommendationColumn,
    Team
  }
};
</script>

<style lang="less" scoped>
.content-key{
  text-align: center;

  h3{
    margin: 20px 0;
  }
}

.column {
  width: 100%;
  margin: 0 auto;
  border: 1px solid #e7e7e7;
  border-left: 0;
  border-right: 0;

  .column-bar {
    width: 1280px;
    margin: 0 auto;
  }
}
</style>