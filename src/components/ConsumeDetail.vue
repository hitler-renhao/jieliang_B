<template>
  <div class="CosumeDetail">
    <div class="main">
      <div class="left">
        <h3>顾客:&nbsp;&nbsp;{{ clientName }}</h3>
        <div class="product" v-for="item in product">
          <span class="prodName">商品名称:&nbsp;&nbsp;</span>
          <input v-model="item.prodName" type="text" class="large" readonly>
          <div class="prodPrice">
            <span>价格:&nbsp;&nbsp;</span>
            <input v-model="item.prodPrice" type="text" class="small" readonly>
          </div>
          <div class="prodNumber">
            <span>数量:&nbsp;&nbsp;</span>
            <input v-model="item.prodNumber" type="text" class="small">
          </div>
        </div>
        <div class="givePoint">
          <span class="prodName">赠送积分:&nbsp;&nbsp;</span>
          <input v-model="givePoint" type="text" class="large">
        </div>
        <div class="fetchWay" style="height: 10%">
          <span>取货方式:&nbsp;&nbsp;</span>
          <div class="way" style="float: right; width: 75%; height: 100%; margin-top: 1.5%;">
            <el-radio v-model="radio" label="1" style="display: block">到店自提</el-radio>
            <el-radio v-model="radio" label="2">快递</el-radio>
            <span class="expressNumber">快递单号</span>
            <input v-model="expressNumber" type="text" style="width: 54%; height: 40%">
          </div>

        </div>
      </div>
      <div class="right">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CosumeDetail',
    data() {
      return {
        clientName: '张无忌',
        product: [{
          prodName: '1234565',
          prodPrice: '999',
          prodNumber: '100'
        }, {
          prodName: '1234565',
          prodPrice: '999',
          prodNumber: '100'
        }],
        givePoint: '9999',
        expressNumber: '123456789',
        radio: '1'
      }
    },
    created() {
      this.type = this.$route.query.type
      this.userId = this.$route.query.userId
      console.log(this.type);
      console.log(this.userId);

      if (this.type == 'edit') {
        // this.http.post('/123', {
        //   userId: this.userId
        // })
        // .then( res => {
        //   console.log(res);
        // this.userName = '贾二蛋'
        // this.phone = '18310215054'
        // this.date = '2019-02-25'
        // this.radio = '男'
        // })

      }
    },
    methods: {
      success() {
        alert('姓名_____' + this.userName + '\n手机号_____' + this.phone + '\n生日_____' + this.date + '\n性别_____' + this.radio)
        var newDate = new Date(this.date)
        alert(newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate())
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
    margin-top: 20%;
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
    width: 40%;
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
    height: 100%;
    float: left;
    background: pink;
  }

  .right {
    width: 60%;
    height: 100%;
    float: right;
    background: skyblue;
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

</style>
