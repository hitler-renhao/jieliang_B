<template>
  <div class="Home">
    <div class="main">
      <header>
        <span>顾客姓名: </span>
        <input v-model="client" type="text" class="phone" placeholder="顾客姓名">
        <span>手机号: </span>
        <input v-model="iphone" type="text" class="password" placeholder="手机号">
        <button @click="search">查&nbsp;&nbsp;&nbsp;&nbsp;询</button>
      </header>
      <div class="list">
        <p>顾客列表</p>
        <button @click="add" class="addClient">新增顾客</button>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%; text-align: center; margin-top: 40px">
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column label="编号" width="90" prop="number">
            <!-- <templ slot-scope="scope">{{ scope.row.number }}</templ ate> -->
          </el-table-column>
          <el-table-column prop="name" label="顾客姓名" width="110">
          </el-table-column>
          <el-table-column prop="phone" label="顾客电话" width="">
          </el-table-column>
          <el-table-column prop="date" label="添加日期" width="">
          </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip width="80">
            <button class="operation" slot-scope="scope" @click="edit(scope.row.id)">编辑资料</button>
          </el-table-column>
          <el-table-column label="" show-overflow-tooltip width="80">
            <button class="operation" slot-scope="scope" @click="view(scope.row.id)">查看</button>
          </el-table-column>

        </el-table>
        <!-- 分页 -->
        <div class="block">
          <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage1" :pager-count="7"
            :page-size="7" layout="total, prev, pager, next, jumper" :total="total" prev-text="上一页" next-text="下一页"
            :background=true>
          </el-pagination>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        client: '',
        iphone: '',
        tableData: [],
        multipleSelection: [],
        currentPage1: 1,
        total: 100,

        merchantId: 1,
        pageNum: 1,
        pageSize: 7,
      }
    },
    created() {
      this.getClient();
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
        this.pageNum = val;
        this.getClient();
      },
      // 查询
      search() {
        alert(this.client + '_____' + this.iphone)
      },
      // 新增顾客
      add() {
        this.$router.push({
          path: '/EnterClient',
          query: {
            type: 'add'
          }
        })
      },
      // 编辑资料
      edit(id) {
        this.$router.push({
          path: '/EnterClient',
          query: {
            type: 'edit',
            userId: id
          }
        })
      },
      view(id) {
        this.$router.push({
          path: '/ClientDetail',
          query: {
            type: 'edit',
            userId: id
          }
        })
      },
      getClient() {
        this.http.get('/memberAccount/b/queryAccountByMerchantId', {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            merchantId: this.merchantId,
          })
          .then(res => {
            console.log(res.data.data);
            this.total = res.data.data.total
            let data = res.data.data.data;
            this.tableData = [];
            for (var index = 0; index < this.pageSize; index++) {
              this.tableData.push({
                number: data[index].serialNumber,
                name: data[index].name,
                phone: data[index].cellPhoneNumber,
                date: data[index].gmtCreate.split(' ')[0],
                id: data[index].id
              })
            }
          })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Home {
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
      height: 83.3%;
      background-color: #fff;
      border-radius: 18px;
    }
  }

  @media screen and (max-width: 1281px) {
    .main {
      position: relative;
      width: 80%;
      height: 83.3%;
      background-color: #fff;
      border-radius: 18px;
    }
  }

  header {
    position: absolute;
    top: 5%;
    left: 3%;
    width: 100%;
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

  .list {
    width: 76%;
    height: 76%;
    position: absolute;
    top: 15%;
    left: 10%;
    background: #FFFFFF;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.10);
    border-radius: 18px;
    padding: 2%;
  }

  .list p {
    float: left;
  }

  .addClient {
    float: right;
    width: 15%;
    height: 6%;
  }

  .operation {
    display: block;
    width: 100%;
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

</style>
