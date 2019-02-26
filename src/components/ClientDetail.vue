<template>
  <div class="ClientDetail">
    <div class="main">
      <header>
        <span>顾客姓名: </span>
        <input v-model="client" type="text" class="phone" placeholder="顾客姓名">
        <span>手机号: </span>
        <input v-model="iphone" type="text" class="password" placeholder="手机号">
        <button @click="search" class="btn">修改资料</button>
        <button @click="search" class="btn">录入消费</button>
      </header>
      <div class="nav">
        <span>生日: </span>
        <input v-model="client" type="text" class="birthday" placeholder="生日">
        <span class="remarks">备注: </span>
        <input v-model="iphone" type="text" class="remark" placeholder="备注">
      </div>
      <p class="totals">
        <span>消费总次数: </span>
        <b> {{ totalNumber }} </b>
        <span>消费总金额: </span>
        <b> {{ totalMoney }} </b>
        <span>积分: </span>
        <b> {{ totalPoint }} </b>
      </p>
      <div class="list">
        <p>消费记录</p>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;  margin-top: 30px">
          <el-table-column type="selection" width="40">
          </el-table-column>
          <el-table-column label="编号" width="70">
            <template slot-scope="scope">{{ scope.row.number }}</template>
          </el-table-column>
          <el-table-column prop="name" label="顾客姓名" width="80">
          </el-table-column>
          <!-- <el-table-column prop="phone" label="顾客电话" width="110">
          </el-table-column> -->
          <el-table-column prop="product" label="购买商品" width="">
          </el-table-column>
          <el-table-column prop="optoList" label="验光单" width="70">
          </el-table-column>
          <el-table-column prop="consumeMoney" label="消费金额" width="80">
          </el-table-column>
          <el-table-column prop="getPoint" label="所得积分" width="80">
          </el-table-column>
          <el-table-column prop="date" label="添加日期" width="100">
          </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip  width="160">
            <button class="operation" @click="view">查看</button>
            <button class="operation" @click="entering">录入验光单</button>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="block">
          <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="5" layout="total, prev, pager, next, jumper"
            :total="total" prev-text="上一页" next-text="下一页" :background=true>
          </el-pagination>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ClientDetail',
    data() {
      return {
        client: '',
        iphone: '',
        tableData: [],
        multipleSelection: [],
        currentPage1: 1,
        total: 100,
        totalNumber: 999,
        totalMoney: 9999.99,
        totalPoint: 999
      }
    },
    created() {
      // this.http.post('/123', {
      //   phone: '123'
      // })
      // .then( res => {
      //   console.log();
      // })
      for (var index = 0; index < 5; index++) {
        this.tableData.push({
          number: 1001,
          name: '王小虎',
          phone: '18310215054',
          product: '摩根波士镜架x1蔡司镜片x1摩根波士镜架x1蔡司镜片x1',
          optoList: '无',
          consumeMoney: 100,
          getPoint: 100,
          date: '2016-05-03',
        })
      }
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleCurrentChange(val) {
        console.log(`${val}`);
        this.http.post('/123', {
          pageNum: `${val}`,
        })
      },
      // 查询
      search() {
        alert(this.client + '_____' + this.iphone)
      },
      // 录入验光单
      entering() {
        this.$router.push({
          path: '/EnterOptomer',
        })
      },
      view() {
        this.$router.push({
          path: '/ConsumeDetail'
        })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ClientDetail {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, #4EC0A3, #80DCE1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1920px) {
    .main {
      position: relative;
      width: 62.5%;
      height: 85.3%;
      background-color: #fff;
      border-radius: 18px;
    }
    .list {
      height: 72%;
    }
  }

  @media screen and (max-width: 1281px) {
    .main {
      width: 80%;
      height: 90.3%;
    }
    .list {
      height: 73%;
    }
  }

  header {
    position: absolute;
    top: 3%;
    left: 4%;
    width: 90%;
    height: 100%;
  }

  span {
    font-size: 16px;
    font-weight: 600;
  }

  input {
    width: 20%;
    height: 4%;
    border-radius: 20px;
    border: none;
    outline: none;
    text-align: center;
    margin: 0 50px 0 10px;
    box-shadow: 0px 0px 6px 0px rgba(122, 122, 122, 0.1),
      /*上边阴影*/
      0px 0px 6px 0px rgba(122, 122, 122, 0.1),
      /*左边阴影*/
      0px 0px 6px 0px rgba(122, 122, 122, 0.1),
      /*右边阴影*/
      0px 0px 6px 0px rgba(122, 122, 122, 0.1);
    /*下边阴影*/
  }

  ::-webkit-input-placeholder {
    color: #ddd;
  }

  button {
    width: 12%;
    height: 4%;
    border-radius: 18px;
    background-color: #68CFC3;
    color: #fff;
    font-size: 16px;
    box-shadow: 0px 0px 6px 0px rgba(104, 207, 195, 0.5),
      /*上边阴影*/
      0px 0px 6px 0px rgba(104, 207, 195, 0.5),
      /*左边阴影*/
      0px 0px 6px 0px rgba(104, 207, 195, 0.5),
      /*右边阴影*/
      0px 0px 6px 0px rgba(104, 207, 195, 0.5);
    /*下边阴影*/
  }

  .btn {
    float: right;
    margin-left: 30px;
  }

  .nav {
    width: 100%;
    height: 10%;
    position: absolute;
    top: 9%;
    left: 6.5%;
  }

  .remarks {
    margin-left: 1.5%;
  }

  .birthday,
  .remark {
    height: 40%;
  }

  .remark {
    width: 340px;
  }

  .list {
    width: 86%;
    position: absolute;
    top: 20%;
    left: 4%;
    background: #FFFFFF;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.10);
    border-radius: 18px;
    padding: 2%;
  }

  .list p {
    float: left;
  }

  .operation {
    display: block;
    width: 70%;
    height: 24px;
    margin: 5px;
    box-shadow: none;
    font-size: 12px;
  }

  .block {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  >>>.cell {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .totals {
    width: 100%;
    position: absolute;
    top: 16%;
    left: 2.5%
  }
  .totals span {
    margin-left: 4%;
    font-weight: 100;
  }
  .totals b {
    color: #68CFC3;
  }

</style>
