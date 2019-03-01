<template>
  <div class="CosumeDetail">
    <div class="main">
      <h3>顾客:&nbsp;&nbsp;{{ clientName }}</h3>
      <div class="left">
        <div class="product" v-for="item in product">
          <span class="prodName titles">商品名称:&nbsp;&nbsp;</span>
          <input v-model="item.goodsName" type="text" class="large" readonly>
          <div class="prodPrice">
            <span>价格:&nbsp;&nbsp;</span>
            <input v-model="item.goodsPrice" type="text" class="small" readonly>
          </div>
          <div class="prodNumber">
            <span>数量:&nbsp;&nbsp;</span>
            <input v-model="item.purchaseQuantity" type="text" class="small" readonly>
          </div>
        </div>
        <div class="givePoint">
          <span class="prodName titles">赠送积分:&nbsp;&nbsp;</span>
          <input v-model="givePoint" type="text" class="large" readonly>
        </div>
        <div class="fetchWay" style="height: 10%">
          <span>取货方式:&nbsp;&nbsp;</span>
          <div class="way" style="float: right; width: 70%; height: 100%; margin-top: 1.5%;">
            <el-radio v-model="radio" label="1" style="display: block">到店自提</el-radio>
            <el-radio v-model="radio" label="2">快递</el-radio>
            <!-- <span class="expressNumber">快递单号</span> -->
            <input v-model="expressNumber" type="text" style="width: 49%; height: 40%" placeholder="请输入快递单号" readonly>
          </div>
        </div>
        <div class="remarks">
          <span class="titles">备注:&nbsp;&nbsp;</span>
          <input v-model="remark" type="text" class="remark" readonly>
        </div>
      </div>
      <div class="right" v-if="off">
        <el-radio-group v-model="radio2">
          <el-radio label="1">远用</el-radio>
          <el-radio label="2">近用</el-radio>
          <el-radio label="3">多用</el-radio>
        </el-radio-group>
        <div class="tables">
          <table border="0" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <td></td>
                <td>球镜SPH</td>
                <td>柱镜CYL</td>
                <td>轴位AXI</td>
                <td>棱镜</td>
                <td>棱镜底</td>
                <td>矫正视力</td>
                <td>瞳距</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>R</td>
                <td> {{ 1 }} </td>
                <td> {{ 2 }} </td>
                <td> {{ 3 }} </td>
                <td> {{ 4 }} </td>
                <td> {{ 5 }} </td>
                <td> {{ 6 }} </td>
                <td rowspan="2"> {{ 7 }} </td>
              </tr>
              <tr>
                <td>L</td>
                <td> {{ 1 }} </td>
                <td> {{ 2 }} </td>
                <td> {{ 3 }} </td>
                <td> {{ 4 }} </td>
                <td> {{ 5 }} </td>
                <td> {{ 6 }} </td>
                <td> {{ 7 }} </td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li class="fl">ADD: {{ }} </li>
            <li class="fl">渐进片RPD：</li>
            <li class="fl">LPD: </li>
            <li class="fl">RPH: </li>
            <li class="fl">LPH: </li>
            <li class="fl">焦距: </li>
          </ul>
        </div>
        <div class="suggest">
          <span>诊断建议: </span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <h3 class="fr" style="margin-right: 5%">验光师: {{ optomertrist }} </h3>
      </div>
      <div class="right" v-else="off">
        <div class="centers">
          <span>验光数据: 无</span>
          <button class="operation" @click="success">点击录入</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CosumeDetail',
    data() {
      return {
        off: true,
        clientName: '张无忌',
        product: [],
        givePoint: '9999',
        expressNumber: '123456789',
        radio: '1',
        remark: '123',
        radio2: '1',
        optomertrist: '张三',

        sphR: '',
        sphL: '',
        cylR: '',
        cylL: '',
        axiR: '',
        axiL: '',
        prismR: '',
        prismL: '',
        base_prism: '',
        base_prism: '',
        bcva: '',
        bcva: '',
        pd: '',
        pd: ''
      }
    },
    created() {
      this.id = this.$route.query.id
      console.log(this.id);
      this.getDetails();
    },
    methods: {
      success() {
        alert('姓名_____' + this.userName + '\n手机号_____' + this.phone + '\n生日_____' + this.date + '\n性别_____' + this.radio)
        var newDate = new Date(this.date)
        alert(newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate())
      },
      getDetails() {
        this.http.get('/order/b/queryOrderData', {
            offset: 0,
            size: 111,
            orderId: 1
          })
          .then(res => {
            if (res.data.code == 200) {
              let data = res.data.data;
              this.clientName = data.order.name;
              // left-top
              var obj = {};
              var prodName, prodNumber, prodPrice;
              for(var index = 0; index < data.orderdetail.length; index++) {
                this.product.push(data.orderdetail[index]);
                this.product[index].purchaseQuantity = this.product[index].purchaseQuantity || 0;
              }
              // 取货方式
              this.radio = (data.order.deliveryWay || 1) + '';
              this.expressNumber = data.order.logisticsNo || '';
              this.givePoint = data.order.point || 0;
              this.remark = data.order.remark || '无';

              // 用途
              this.radio2 = (data.optometryDetail[0].use || 1) + '';

              // 表格

              
              

            } else if (res.data.code == 400) {
              this.$message({
                message: res.data.message,
                type: 'error'
              });
            }
          })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .CosumeDetail {
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
      width: 56.5%;
      height: 79.3%;
      background-color: #fff;
      border-radius: 18px;
      padding: 3%
    }
  }

  @media screen and (max-width: 1281px) {
    .main {
      width: 80%;
      height: 90.3%;
    }
  }

  h3 {
    /* margin-top: 20%; */
  }

  .product,
  .givePoint {
    position: relative;
    width: 100%;
    height: 10%;
    margin-bottom: 8%;
  }

  .prodNumber,
  .prodPrice {
    position: absolute;
    width: 50%;
    height: 40%;
  }

  .prodNumber {
    right: 0;
  }

  .prodPrice {
    left: 0;
  }

  .prodName {
    position: absolute;
    top: 27%;
    left: 5%;
  }

  input {
    width: 90%;
    height: 40%;
    border-radius: 20px;
    border: none;
    outline: none;
    text-align: right;
    padding: 0 5%;
    margin-top: 5%;
    box-shadow: 0px 0px 6px 0px rgba(122, 122, 122, 0.1),
      /*上边阴影*/
      0px 0px 6px 0px rgba(122, 122, 122, 0.1),
      /*左边阴影*/
      0px 0px 6px 0px rgba(122, 122, 122, 0.1),
      /*右边阴影*/
      0px 0px 6px 0px rgba(122, 122, 122, 0.1);
    /*下边阴影*/
  }

  .small {
    display: inline;
    width: 50%;
    height: 100%;
  }

  .left {
    width: 30%;
    height: 90%;
    float: left;
    /* background: pink; */
  }

  .right {
    position: relative;
    width: 60%;
    height: 90%;
    float: right;
    /* background: skyblue; */
  }

  .way {
    position: relative;
  }

  .expressNumber {
    position: absolute;
    font-size: 14px;
    top: 4.5%;
    left: 40%;
  }

  >>>.el-radio__label {
    font-size: 14px;
  }

  .remarks {
    position: relative;
    height: 10%;
  }

  .remarks span {
    position: absolute;
    top: 40%;
    left: 5%;
  }

  .remark {
    width: 90%;
    height: 50%;
  }

  .titles {
    color: #ddd;
  }


  >>>.el-radio-group {
    margin-top: 5%;
    margin-left: 5%;
  }

  .tables {
    width: 87%;
    height: 35%;
    background-color: #fff;
    margin: 2% auto;
    border-radius: 18px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1),
      /*上边阴影*/
      0px 0px 12px 0px rgba(0, 0, 0, 0.1),
      /*左边阴影*/
      0px 0px 12px 0px rgba(0, 0, 0, 0.1),
      /*右边阴影*/
      0px 0px 12px 0px rgba(0, 0, 0, 0.1);
    /*下边阴影*/
    padding: 1%;
  }

  td {
    width: 2%;
    height: 6.5vh;
    border-left: 1px solid #dedede;
    border-top: 1px solid #dedede;
    color: #666;
    text-align: center;
  }

  tr td:first-child {
    border-left: none;
  }

  tr td:last-child {
    border-right: none;
  }

  thead td {
    border-top: none;
  }

  tbody tr:last-child td {
    border-bottom: 1px solid #ccc;
  }

  .right ul {
    margin-top: 2%;
    height: 100%;
  }

  .right ul li {
    margin-left: 6%;
    font-family: 'simsun'
  }

  .suggest {
    width: 87%;
    margin: 5% auto;
  }

  .suggest span {
    vertical-align: top;
    font-weight: 7400;
  }

  textarea {
    width: 85%;
    border: none;
    outline: none;
    border-radius: 18px;
    resize: none;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1),
      /*上边阴影*/
      0px 0px 12px 0px rgba(0, 0, 0, 0.1),
      /*左边阴影*/
      0px 0px 12px 0px rgba(0, 0, 0, 0.1),
      /*右边阴影*/
      0px 0px 12px 0px rgba(0, 0, 0, 0.1);
    /*下边阴影*/
    padding: 1%;
  }

  .centers {
    width: 40%;
    height: 10%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%)
  }

  .centers span {
    font-size: 16px;
    color: #333;
    font-weight: 700;
  }

  button {
    width: 45%;
    height: 50%;
    margin-left: 5%;
    border-radius: 18px;
    background-color: #EE9E81;
    color: #fff;
    font-size: 16px;
    box-shadow: 0px 0px 6px 0px rgba(238, 159, 130, 0.5),
      /*上边阴影*/
      0px 0px 6px 0px rgba(238, 159, 130, 0.5),
      /*左边阴影*/
      0px 0px 6px 0px rgba(238, 159, 130, 0.5),
      /*右边阴影*/
      0px 0px 6px 0px rgba(238, 159, 130, 0.5);
    /*下边阴影*/
  }

</style>
