<template>
  <div class="ad">
    <span class="left" @click="onLeft"></span>
    <div class="ad-box">
      <div class="ad-box-bar" :style="{width: `${list.length * 320}px`}" ref="adBox">
        <div class="item" v-for="i in list" :key="i.id">
          <div class="title">
            <div class="key">ABOUT</div>
            <div class="at">关于</div>
          </div>
          <div class="content">
            <div class="img"></div>
            <div class="list">
              <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
            </div>
          </div>
        </div>
        <!-- <div class="item" v-for="i in 2" :key="i.id">
          <div class="title">
            <div class="key">TRENDS</div>
            <div class="at">动态</div>
          </div>
          <div class="content">
            <div class="list-t">
              <div class="li" v-for="(n,index) in news" :key="n.id" v-show="index < 4">
                <div class="time">2012.2</div>
                <div class="text">我是新闻我是新闻我是新闻我是新闻我是我是新闻我是新闻我是新闻我是新闻我是</div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <span class="rigth" @click="onRight"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6],
      news: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      index: 0
    };
  },
  methods: {
    onRight() {
      if (this.index < this.list.length - 4) {
        this.index++;
        this.$refs.adBox.style.transform = `translate(-${this.index *
          320}px,0)`;
      } 
    },
    onLeft() {
      if (this.index > 0) {
        this.index--;
        this.$refs.adBox.style.transform = `translate(-${this.index *
          320}px,0)`;
      } 
    }
  }
};
</script>

<style lang="less" scoped>
.ad {
  position: relative;

  span {
    position: absolute;
    height: 40px;
    width: 20px;
    background: #2c2c2c;
    top: 60px;
    cursor: pointer;
  }

  .left {
    left: -20px;
  }

  .rigth {
    right: -22px;
  }
}

.ad-box {
  width: 100%;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  border-top: 0;
  border-bottom: 0;
}

.ad-box-bar {
  display: flex;
  transition: 0.5s;

  .item {
    width: 25%;
    height: 130px;
    padding: 20px;

    .title {
      display: flex;

      .key {
        line-height: 40px;
        font-size: 24px;
        font-weight: bold;
      }

      .at {
        height: 40px;
        line-height: 44px;
        margin-left: 20px;
        font-size: 14px;
        font-weight: bold;
      }
    }

    .content {
      display: flex;
      align-items: center;

      .img {
        width: 80px;
        height: 80px;
        background: orange;
      }

      .list {
        flex: 1;
        margin-left: 20px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }

      .list-t {
        .li {
          display: flex;
          align-items: center;
          font-size: 14px;

          .time {
            color: red;
          }

          .text {
            margin-left: 10px;
            color: #999;
            overflow: hidden;

            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
}
</style>