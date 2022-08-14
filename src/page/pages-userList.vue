<template>
  <div>
    <headtop></headtop>
    <div>
      <el-table
        :data="tableDatas"
        style="width: 100%"
        :default-sort="{ prop: 'date', order: 'descending' }"
        highlight-current-row
      >
        <el-table-column type="index" :index="indexMethod" label="#">
        </el-table-column>
        <el-table-column prop="createData" label="日期" sortable width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" sortable width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址" :formatter="formatter">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="20"
        layout="total, prev, pager, next"
        :total="count"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import headtop from "../components/headTop.vue";
import axios from "axios";
export default {
  name: "userList",
  components: {
    headtop,
  },
  data() {
    return {
      currentPage: 1,
      pagesize: 10,
      tableDatas: [],
      count: 300,
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    indexMethod(index) {
      return index + 1;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getUsers();
    },
    getUsers() {
      axios
        .get("http://rap2api.taobao.org/app/mock/304144/getUserInfo3")
        .then((res) => {
          console.log(res);
          this.tableDatas = res.data.data;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
