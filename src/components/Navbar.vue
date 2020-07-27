<template>
  <div>
    <div class="nav-bar">
      <div class="nav">
        <div>logo</div>
        <ul>
          <li
            @click="onItem(i,n)"
            v-for="(i,n) in list"
            :key="i.label"
            :class="n === index?'hover-color':''"
          >{{i.label}}</li>
        </ul>
        <ul class="login">
          <li>登陆</li>
          <li>|</li>
          <li>注册</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          label: "首页 | HOME",
          url: "/"
        },
        {
          label: "水悦湾 | SHUIYUEWAN",
          url: "/suiyuewan"
        },
        {
          label: "看房团 | HOUSEKEEPING",
          url: "/"
        },
        {
          label: "楼讯 | PROPERTY",
          url: "/"
        },
        {
          label: "问答百科 | Q&A",
          url: "/"
        },
        {
          label: "团队 | TEAM",
          url: "/team"
        },
        {
          label: "加入我们 | JOIN US",
          url: "/jionus"
        }
      ],
      index: 0
    };
  },
  methods: {
    onItem(row, index) {
      this.index = index;
      this.$router.push(row.url);
    }
  }
};
</script>

<style lang="less" scoped>
.nav-bar {
  background: #2c2c2c;
  color: #999;
  font-size: 14px;
  .nav {
    display: flex;
    justify-content: space-between;
    width: 1280px;
    margin: 0 auto;

    ul {
      display: flex;

      li {
        line-height: 50px;
        margin-left: 30px;
        cursor: pointer;
      }
    }

    .login {
      li {
        margin-left: 10px;
        font-size: 12px;
      }
    }
  }
}

.hover-color {
  color: #fcbd0e;
  transition: 0.3s;
}
</style>