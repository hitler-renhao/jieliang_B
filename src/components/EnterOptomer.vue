<template>
  <div class="EnterOptomer">
    <div class="main">
      <h2>录入验光单</h2>
      <div class="right">
        <el-radio-group v-model="radio2">
          <el-radio :label="1">远用</el-radio>
          <el-radio :label="2">近用</el-radio>
          <el-radio :label="3">多用</el-radio>
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
                <td>
                  <input type="text">
                </td>
                <td>
                  <input type="text">
                </td>
                <td>
                  <input type="text">
                </td>
                <td>
                  <input type="text">
                </td>
                <td>
                  <input type="text">
                </td>
                <td>
                  <input type="text">
                </td>
                <td>
                  <input type="text">
                </td>
              </tr>
              <tr>
                <td>L</td>
                <td>
                  <input type="text">
                </td>
                <td>
                  <input type="text">
                </td>
                <td>
                  <input type="text">
                </td>
                <td>
                  <input type="text">
                </td>
                <td>
                  <input type="text">
                </td>
                <td>
                  <input type="text">
                </td>
                <td>
                  <input type="text">
                </td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li class="fl">ADD: <input type="text" class="middle"> </li>
            <li class="fl">渐进片RPD：<input type="text" class="middle"> </li>
            <li class="fl">LPD: <input type="text" class="middle"> </li>
            <li class="fl">RPH: <input type="text" class="middle"> </li>
            <li class="fl">LPH: <input type="text" class="middle"> </li>
            <li class="fl">焦距: <input type="text" class="middle"> </li>
          </ul>
        </div>
        <div class="suggest">
          <span style="font-weight: 400">诊断建议:&nbsp;&nbsp;</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <h3 class="" style="margin-left: 7%; font-weight: 400;">验光师:&nbsp;&nbsp;<input type="text" class="optomertrist"></h3>
        <div class="btn">
          <button class="" @click="success">完&nbsp;&nbsp;&nbsp;&nbsp;成</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EnterOptomer',
    data() {
      return {
        radio2: 3,
        optomertrist: '张三'
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
  .EnterOptomer {
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
    }
  }

  @media screen and (max-width: 1281px) {
    .main {
      width: 80%;
      height: 90.3%;
    }
  }

  .right {
    position: relative;
    width: 100%;
    height: 90%;
    float: right;
    /* background: skyblue; */
  }

  h2 {
    text-align: center;
    font-size: 40px;
    line-height: 80px;
    margin: 0;
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
    width: 16.6%;
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

  .btn {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
  }

  button {
    width: 10%;
    height: 50%;
    margin-top: 2%;
    border-radius: 18px;
    background-color: #68CFC3;
    color: #fff;
    font-size: 16px;
    box-shadow: 0px 0px 6px 0px rgba(104,207,195,0.5),
      /*上边阴影*/
      0px 0px 6px 0px rgba(104,207,195,0.5),
      /*左边阴影*/
      0px 0px 6px 0px rgba(104,207,195,0.5),
      /*右边阴影*/
      0px 0px 6px 0px rgba(104,207,195,0.5);
    /*下边阴影*/
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 20px;
  }

  .middle {
    width: 30%;
    height: 1%;
    border-bottom: 1px solid #ccc;
  }

  >>>.el-radio-group {
    margin-left: 7%;
  }

  .optomertrist {
    border: 1px solid #ccc;
  }

  .optomertrist {
    width: 20%;
    border-radius: 18px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1),
      /*上边阴影*/
      0px 0px 12px 0px rgba(0, 0, 0, 0.1),
      /*左边阴影*/
      0px 0px 12px 0px rgba(0, 0, 0, 0.1),
      /*右边阴影*/
      0px 0px 12px 0px rgba(0, 0, 0, 0.1);
    /*下边阴影*/
    padding: 5px 10px;
  }

</style>
