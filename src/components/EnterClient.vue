<template>
  <div class="EnterClient">
    <div class="main">
      <div class="center">
        <h2>录入客户</h2>
        <div class="user">
          <span>顾客姓名 :</span>
          <input v-model="userName" type="text" class="password" placeholder="请输入顾客的姓名">
        </div>
        <div class="phone">
          <span>手机号 :</span>
          <input v-model="phone" type="text" class="password" placeholder="请输入顾客的手机号码">
        </div>
        <div class="block">
          <span>生日 :</span>
          <el-date-picker v-model="date" type="date" placeholder="请选择顾客的生日">
          </el-date-picker>
        </div>
        <div class="birthday">
          <i>性别 :</i>
          <div class="radios">
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </div>
        </div>
        <div class="btn">
          <button class="operation" @click="success">完&nbsp;&nbsp;&nbsp;&nbsp;成</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EnterClient',
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
        userName: '',
        phone: '',
        date: '',
        radio: '1',
        type: '',
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
        var pattern = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/;
        console.log(this.userName);
        console.log(this.phone);
        console.log(this.radio);
        
        if (!this.userName || !this.phone || !this.radio) {
          this.$message({
            message: '请将信息填写完整!',
            type: 'error'
          });
        } else if (!pattern.test(this.phone)) {
          this.$message({
            message: '手机号填写有误!',
            type: 'error'
          });
        } else {
          var newDate = new Date(this.date)
          this.http.post('/memberAccount/b/addAccount', {
              merchantId: localStorage.getItem('userId') // 商户ID
                ,
              name: this.userName // 姓名
                ,
              cellPhoneNumber: this.phone // 手机号
                ,
              birthday: newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate() // 生日
                ,
              gender: this.radio // 性别
            })
            .then(res => {
              console.log(res.data.code);
              if (res.data.code == 200) {
                this.$message({
                  message: '录入用户成功!',
                  type: 'success'
                });
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
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .EnterClient {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, #4EC0A3, #80DCE1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user,
  .phone,
  .block {
    height: 10%;
    margin-bottom: 5%;
    position: relative;
  }

  span {
    position: absolute;
    top: 15%;
    left: 5%;
    z-index: 99999999;
  }

  @media screen and (max-width: 1920px) {
    .main {
      position: relative;
      width: 62.5%;
      height: 85.3%;
      background-color: #fff;
      border-radius: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 1281px) {
    .main {
      width: 80%;
      height: 90.3%;
    }
  }

  .center {
    width: 30%;
    height: 80%;
    position: absolute;
  }

  h2 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 30%;
  }

  input {
    display: block;
    width: 60%;
    height: 65%;
    border-radius: 20px;
    border: none;
    outline: none;
    text-align: right;
    padding: 0 10%;
    padding-left: 30%;
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
    color: #bbb;
    font-size: 15px;
  }

  >>>.el-date-editor {
    width: 100%;
  }

  >>>.el-input__inner {
    height: 40px;
    border-radius: 20px;
    border: none;
    outline: none;
    text-align: right;
    /* margin: 0 50px 0 10px; */
    box-shadow: 0px 0px 6px 0px rgba(122, 122, 122, 0.1),
      /*上边阴影*/
      0px 0px 6px 0px rgba(122, 122, 122, 0.1),
      /*左边阴影*/
      0px 0px 6px 0px rgba(122, 122, 122, 0.1),
      /*右边阴影*/
      0px 0px 6px 0px rgba(122, 122, 122, 0.1);
    /*下边阴影*/
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

  span {
    font-size: 16px;
  }

  >>>.el-icon-date {
    display: none;
  }

  i {
    font-style: normal;
    margin-left: 5%;
  }

  .radios {
    float: right;
    margin-right: 5%;
  }

  .btn {
    width: 100%;
    height: 8%;
    ;
    display: flex;
    justify-content: center;
    margin-top: 25%;
  }

  button {
    width: 35%;
    height: 70%;
  }

  span,
  i {
    color: #888;
  }

</style>
