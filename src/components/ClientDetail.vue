<template>
  <div class="ClientDetail">
    <div class="main">
      <header>
        <span>顾客姓名: </span>
        <input v-model="client" type="text" class="phone" placeholder="顾客姓名" readonly>
        <span>手机号: </span>
        <input v-model="iphone" type="text" class="password" placeholder="手机号" readonly>
        <button @click="edit" class="btn">修改资料</button>
        <button @click="enterConsume" class="btn">录入消费</button>
      </header>
      <div class="nav">
        <span style="margin-left: 1%">生日: </span>
        <input v-model="birthday" type="text" class="birthday" placeholder="生日" style="width: 18%" readonly>
        <span class="remarks">备注: </span>
        <input v-model="remark" type="text" class="remark" placeholder="备注" readonly>
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
          <el-table-column label="编号" width="160">
            <template slot-scope="scope">{{ scope.row.transactionNo }}</template>
          </el-table-column>
          <el-table-column prop="name" label="顾客姓名" width="80">
          </el-table-column>
          <!-- <el-table-column prop="phone" label="顾客电话" width="110">
          </el-table-column> -->
          <el-table-column prop="goodsNames" label="购买商品" width="">
          </el-table-column>
          <el-table-column prop="optometryCount" label="验光单" width="70">
          </el-table-column>
          <el-table-column prop="totalPrice" label="消费金额" width="80">
          </el-table-column>
          <el-table-column prop="point" label="所得积分" width="80">
          </el-table-column>
          <el-table-column prop="gmtCreate" label="添加日期" width="100">
          </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip width="80">
            <button class="operation" @click="view(scope.row.id)" slot-scope="scope">查看</button>
          </el-table-column>
          <el-table-column label="" show-overflow-tooltip width="110">
            <button class="operation" @click="entering(scope.row.id)" slot-scope="scope">录入验光单</button>
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
        birthday: '',
        remark: '',
        tableData: [],
        multipleSelection: [],
        currentPage1: 1,
        total: 100,
        totalNumber: 999,
        totalMoney: 9999.99,
        totalPoint: 999,
        userId: 1,
      }
    },
    created() {
      this.userId = this.$route.query.userId;
      this.getUserInfomation();
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
      getUserInfomation() {
        this.http.get('/memberAccount/accountAllDetails', {
            offset: 0,
            size: 111,
            userAccountId: this.userId
          })
          .then(res => {
            if (res.data.code == 200) {
              console.log(res);
              let data = res.data.data;
              // top
              this.client = data.accountDetails.name;
              this.iphone = data.accountDetails.cellPhoneNumber;
              this.birthday = data.accountDetails.birthday.split(' ')[0];
              this.remark = data.accountDetails.remark;

              // middle
              this.totalNumber = data.accountDetails.totalNumberSpending || 0;
              this.totalMoney = data.accountDetails.totalAmountSpending || 0;
              this.totalPoint = data.pointDetails.point || 0;

              // bottom
              for (var index = 0; index < data.orderDetailList.length; index++) {
                data.orderDetailList[index].gmtCreate = data.orderDetailList[index].gmtCreate.split(' ')[0];
                data.orderDetailList[index].totalPrice = data.orderDetailList[index].totalPrice.toFixed(2);
                this.tableData.push(data.orderDetailList[index])
              }
              this.total = data.orderDetailList.length
              console.log(this.tableData);

            } else if (res.data.code == 400) {
              this.$message({
                message: res.data.message,
                type: 'error'
              });
            }
          })
      },
      // 修改资料
      edit() {
        this.$router.push({
          path: '/EnterClient',
          query: {
            type: 'edit',
            userId: this.userId
          }
        })
      },
      // 录入消费
      enterConsume() {
        this.$router.push({
          path: '/EnterConsume',
          query: {
            userId: this.userId
          }
        })
      },
      // 录入验光单
      entering() {
        this.$router.push({
          path: '/EnterOptomer',
        })
      },
      // 查看订单信息
      view(id) {
        this.$router.push({
          path: '/ConsumeDetail',
          query: {
            id: id
          }
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
    margin: 0 40px 0 10px;
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
    width: 100%;
    height: 24px;
    margin: 0;
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
