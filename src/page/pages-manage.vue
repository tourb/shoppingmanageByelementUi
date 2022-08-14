<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <el-menu
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @open="handleOpen"
            @close="handleClose"
            :default-active="defaultActive"
            router
          >
            <el-menu-item index="manage">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-document-remove"></i>
                <span>数据管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="userList">用户列表</el-menu-item>
                <el-menu-item index="shopList">商家列表</el-menu-item>
                <el-menu-item index="foodList">食品列表</el-menu-item>
                <el-menu-item index="orderList">订单列表</el-menu-item>
                <el-menu-item index="adminList">管理员列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-plus"></i>
                <span>添加数据</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="addShop">添加商铺</el-menu-item>
                <el-menu-item index="addGoods">添加商品</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-star-on"></i>
                <span>图表</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="visitor">用户分布</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-edit"></i>
                <span>编辑</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="vueEdit">文本编辑</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="adminSet">管理员设置</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-info"></i>
                <span>说明</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="explain">说明</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="20" style="overflow: auto">
        <div class="grid-content bg-purple-light">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "pages-manage",
  computed: {
    defaultActive: function () {
      return this.$route.path.replace("/", "");
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #545c64;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 100vh;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
