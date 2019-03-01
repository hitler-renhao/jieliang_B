<template>
  <div class="Login">
    <div class="main">
      <div class="entering">
        <input v-model="phone" type="text" class="phone" placeholder="用户名">
        <input v-model="password" type="text" class="password" placeholder="密码">
        <button @click="Login">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        phone: '',
        password: ''
      }
    },
    methods: {
      // getSms() {
      //   this.http.post('/sms/smsSend', {
      //       phone: this.phone,
      //       sign: '0'
      //     })
      //     .then(res => {
      //       console.log(res.data.code);
      //       if (res.data.code == 2000) {
      //         alert('验证码发送成功, 请注意查收! ')
      //       } else if (res.data.code == 400 && res.data.msg == '{phone=手机号格式有误！}') {
      //         alert('手机号格式有误！')
      //       } else if (res.data.code == 400 && res.data.msg == '{phone=手机号不能为空！}') {
      //         alert('手机号不能为空！')
      //       }
      //     })
      // },
      Login() {
        this.http.post('/merchant/b/login', {
            userName: this.phone,
            userPwd: this.password
          })
          .then(res => {
            console.log(res.data.code);
            if (res.data.code == 2000) {
              alert(111)
            } else {
              alert(res.data.message)
            }
          })
      }
    },
    created() {
      //   this.http.get('posts').then(res=>{
      //     console.log(res.data)
      // }) 
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Login {
    width: 100%;
    height: 100vh;
    background: url(../assets/img/login-bg.png) no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main {
    width: 22.4%;
    height: 66.7%;
    background: url(../assets/img/login.png) no-repeat;
    background-size: 100%;
    background-position: center center;
  }

  .entering {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%);
  }

  input {
    display: block;
    width: 240px;
    height: 40px;
    border-radius: 20px;
    border: none;
    outline: none;
    text-align: center;
    margin-bottom: 30px;
  }

  ::-webkit-input-placeholder {
    color: #ddd;
  }

  button {
    width: 120px;
    height: 36px;
    border-radius: 18px;
    background-color: #fff;
    color: #5CB09B;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-size: 14px;
  }

</style>
