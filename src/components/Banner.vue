<template>
  <div class="banner-column" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <div class="banner-bar" ref="bannerBar">
      <div class="banner-box" ref="bannerBox">
        <img :src="i.src" class="banner" v-for="i in list" :key="i.name" />
      </div>
    </div>
    <span class="left" @click="onLeft"></span>
    <span class="right" @click="onRight"></span>
    <div class="banner-line">
      <div
        class="line"
        @click="onLine(ind)"
        v-for="(n,ind) in list"
        :key="n.name"
        :class="index === ind?'red':''"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      list: [
        {
          name: "1",
          src: require("@/assets/img/banner1.png")
        },
        {
          name: "2",
          src: require("@/assets/img/banner2.png")
        },
        {
          name: "3",
          src: require("@/assets/img/banner3.png")
        }
      ],
      time: () => {}
    };
  },
  mounted() {
    this.mouseleave();
  },
  methods: {
    onRight() {
      if (this.index < this.list.length - 1) {
        let wid = this.$refs.bannerBar.clientWidth;
        this.index++;
        this.$refs.bannerBox.style.transform = `translate(-${this.index *
          wid}px,0)`;
      } else {
        this.index = -1;
        this.onRight();
      }
    },
    onLeft() {
      if (this.index > 0) {
        let wid = this.$refs.bannerBar.clientWidth;
        this.index--;
        this.$refs.bannerBox.style.transform = `translate(-${this.index *
          wid}px,0)`;
      } else {
        this.index = this.list.length;
        this.onLeft();
      }
    },
    onLine(index) {
      this.index = index - 1;
      this.onRight()
    },
    mouseenter() {
      clearInterval(this.time);
    },
    mouseleave() {
      this.time = setInterval(() => {
        this.onRight();
      }, 3000);
    }
  }
};
</script>

<style lang="less" scoped>
.banner-column {
  position: relative;

  span {
    height: 40px;
    width: 20px;
    background: #2c2c2c;
    position: absolute;
    top: calc(50% - 20px);
    cursor: pointer;
  }

  span:hover {
    opacity: 0.8;
    transition: 0.3s;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }

  .banner-bar {
    width: 100%;
    overflow: hidden;

    .banner-box {
      display: flex;
      transition: 0.3s;

      .banner {
        display: block;
        width: 100%;
      }
    }
  }
}

.banner-line {
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 20px;

  .line {
    height: 10px;
    width: 10px;
    margin-left: 10px;
    border-radius: 50%;
    border: 2px solid #2c2c2c;
    transition: 1s;
    cursor: pointer;
  }

  .red {
    background: #2c2c2c;
  }
}
</style>