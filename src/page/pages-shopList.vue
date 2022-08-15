<template>
  <div>
    <headtop></headtop>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="店铺名称">
              <span>{{ props.row.shopName }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺介绍">
              <span>{{ props.row.introduce }}</span>
            </el-form-item>
            <el-form-item label="联系电话">
              <span>{{ props.row.tel }}</span>
            </el-form-item>
            <el-form-item label="评分">
              <span>{{ props.row.score }}</span>
            </el-form-item>
            <el-form-item label="销售量">
              <span>{{ props.row.saleCount }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="店铺名称" prop="shopName"> </el-table-column>
      <el-table-column label="店铺地址" prop="address"> </el-table-column>
      <el-table-column label="店铺介绍" prop="introduce"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="tableData.length"
    >
    </el-pagination>
    <!-- 弹窗组件 -->

    <!-- Form -->

    <el-dialog title="修改店铺信息" :visible.sync="dialogFormVisible">
      <el-form :model="selectTable">
        <el-form-item label="店铺名称" :label-width="formLabelWidth">
          <el-input
            v-model="selectTable.shopName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="详细地址" :label-width="formLabelWidth">
          <el-input v-model="selectTable.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺介绍" :label-width="formLabelWidth">
          <el-input
            v-model="selectTable.introduce"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="selectTable.tel" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitChange">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import headtop from "../components/headTop.vue";
export default {
  name: "shopList",
  components: {
    headtop,
  },
  data() {
    return {
      tableData: [],
      currentPage: 1,
      selectTable: {},
      dialogFormVisible: false,
      address: {},
      formLabelWidth: "120px",
    };
  },
  created() {
    this.getShopList();
  },
  methods: {
    getShopList() {
      axios
        .get("http://rap2api.taobao.org/app/mock/304144/getShopList")
        .then((res) => {
          // console.log(res);
          this.tableData = res.data.data;
          this.tableData.name = res.data.data.shopName;
          this.tableData.address = res.data.data.address;
          this.tableData.description = res.data.data.introduce;
          this.tableData.id = res.data.data.id;
          this.tableData.phone = res.data.data.tel;
        });
    },
    handleEdit(index, row) {
      this.selectTable = row;
      this.dialogFormVisible = true;
      this.address.address = row.address;
      console.log(this.selectTable);
      // console.log(index, row);
    },
    handleDelete(index, row) {
      // console.log(row.id);
      // 发送 delete 请求
      axios({
        method: "delete",
        url: "http://rap2api.taobao.org/app/mock/304144/deleteShop",
        data: {
          id: row.id,
        },
      }).then((res) => {
        //console.log(res.data.msg);
        this.$message.success(res.data.msg);
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    submitChange() {
      this.dialogFormVisible = false;
      this.$message.success("添加成功");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
