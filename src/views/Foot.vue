<template>
  <div>
    <div class="foot-box">
      <div class="foot">
        <ul v-for="i in list" :key="i.label">
          <h4>{{i.label}}</h4>
          <li v-for="n in i.item" :key="n.name">{{n.name}}</li>
        </ul>
        <div class="code-box">
          <div>微信公众号</div>
          <div class="code"></div>
        </div>
      </div>
    </div>
    <div class="foot-bottom-box">
      <div class="foot-bottom">
        <div>@ 2020 南宁众川置业 东沟岭水悦湾销售中心</div>
        <div>技术支持(wachat) :  xx-20200211</div>
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
          label: "商业合作",
          item: [
            {
              name: "加盟合作"
            },
            {
              name: "网站制作"
            },
            {
              name: "ui/ux设计"
            },
            {
              name: "商品代理"
            }
          ]
        },
        {
          label: "加入我们",
          item: [
            {
              name: "置业团队"
            },
            {
              name: "招聘专栏"
            },
            {
              name: "企业文化"
            }
          ]
        },
        {
          label: "会员权限",
          item: [
            {
              name: "留言板"
            },
            {
              name: "最新资讯"
            },
            {
              name: "专业顾问"
            },
            {
              name: "预约预购"
            }
          ]
        },
        {
          label: "产品中心",
          item: [
            {
              name: "水月湾"
            },
            {
              name: "房屋租售"
            },
            {
              name: "商铺租售"
            }
          ]
        },
        {
          label: "联系我们",
          item: [
            {
              name: "公司地址"
            },
            {
              name: "联系电话"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.foot-box {
  margin-top: 20px;
  padding: 20px 0;
  background: #2c2c2c;
  color: #999;

  .foot {
    display: flex;
    justify-content: space-between;
    width: 1280px;
    margin: 0 auto;
    text-align: center;

    h4 {
      margin-bottom: 20px;
    }

    li {
      margin-top: 10px;
      font-size: 14px;
    }

    li:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}

.code-box {
  text-align: left;

  .code {
    margin-top: 20px;
    width: 120px;
    height: 120px;
    background: orange;
  }
}

.foot-bottom-box {
  border-top: 1px solid #999;
  background: #2c2c2c;
  color: #999;
  width: 100%;
}

.foot-bottom {
  width: 1280px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
}
</style>