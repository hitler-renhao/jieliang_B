<template>
  <div class="EnterConsume">
    <div class="main">
      <div class="left">
        <h2>录入消费</h2>
        <div class="product" v-for="item in product">
          <span class="prodName titles">商品名称:&nbsp;&nbsp;</span>
          <input v-model="item.prodName" type="text" class="large">
          <div class="prodPrice">
            <span>价格:&nbsp;&nbsp;</span>
            <input v-model="item.prodPrice" type="text" class="small">
          </div>
          <div class="prodNumber">
            <span>数量:&nbsp;&nbsp;</span>
            <input v-model="item.prodNumber" type="text" class="small">
          </div>
        </div>
        <i @click="addProd">+</i> <span style="margin-left: 3%">增加商品</span>
        <div class="givePoint">
          <span class="prodName titles">赠送积分:&nbsp;&nbsp;</span>
          <input v-model="givePoint" type="text" class="large">
        </div>
        <div class="fetchWay" style="height: 10%">
          <span>取货方式:&nbsp;&nbsp;</span>
          <div class="way" style="float: right; width: 75%; height: 100%; margin-top: 1.5%;">
            <el-radio v-model="radio" label="1" style="display: block">到店自提</el-radio>
            <el-radio v-model="radio" label="2">快递</el-radio>
            <!-- <span class="expressNumber">快递单号</span> -->
            <input v-model="expressNumber" type="text" style="width: 54%; height: 40%" placeholder="请输入快递单号">
          </div>
        </div>
        <div class="remarks">
          <span class="titless">备注:&nbsp;&nbsp;</span>
          <input v-model="remark" type="text" class="remark">
        </div>
        <div class="btn">
          <button class="" @click="success">完&nbsp;&nbsp;&nbsp;&nbsp;成</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EnterConsume',
    data() {
      return {
        product: [{
          prodName: '',
          prodPrice: '',
          prodNumber: ''
        }],
        givePoint: '',
        expressNumber: '',
        radio: '1',
        remark: '',
        prodCount: 1
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
      },
      // 添加商品
      addProd () {
        this.product.push({
          prodName: '',
          prodPrice: '',
          prodNumber: ''
        })
        alert(this.product.length)
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .EnterConsume {
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
      padding: 3%;
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (max-width: 1281px) {
    .main {
      width: 80%;
      height: 90.3%;
    }
  }

  .left {
    width: 35%;
    height: 90%;
    /* float: left; */
    /* background: pink; */
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
    top: 30%;
    left: 5%;
  }

  input {
    width: 89%;
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

  h2 {
    text-align: center;
    font-size: 40px;
    line-height: 80px;
    margin: 0;
  }


  .btn {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
  }

  button {
    width: 30%;
    height: 50%;
    margin-top: 20%;
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

  .remarks {
    position: relative;
    height: 10%;
  }

  .titless {
    position: absolute;
    top: 40%;
    left: 5%;
  }

  i {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 48px;
    font-size: 30px;
    font-weight: 100;
    color: #69CFC3;
    border-radius: 24px;
    cursor: pointer;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1),
      /*上边阴影*/
      0px 0px 6px 0px rgba(0, 0, 0, 0.1),
      /*左边阴影*/
      0px 0px 6px 0px rgba(0, 0, 0, 0.1),
      /*右边阴影*/
      0px 0px 6px 0px rgba(0, 0, 0, 0.1);
    /*下边阴影*/
  }

</style>
