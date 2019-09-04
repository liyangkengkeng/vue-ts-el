<template>
  <section class="sections" @keyup.enter="handleLogin">
    <div class="content loginBox">
      <el-form :model="loginData" :rules="rules" ref="loginForm" id="loginDetails">
        <el-form-item label="账号：" :label-width="'120px'" prop="account">
          <el-input style="width: 300px" v-model="loginData.loginName"></el-input>
        </el-form-item>
        <el-form-item label="密码：" :label-width="'120px'" prop="password">
          <el-input type="password" style="width: 300px" v-model="loginData.password"></el-input>
        </el-form-item>
      </el-form>
      <el-row style="line-height: 40px">
        <el-col :span="7" :offset="17">
          <el-button type="primary" :loading="loginLoading" @click="handleLogin">
            登录
          </el-button>
        </el-col>
      </el-row>
      <span style="color: #99A9BF;font-size: 13px;margin-left: 12%">建议使用chrome或IE8以上版本</span>
    </div>
  </section>
</template>

<script lang="ts">
  import {Component, Watch, Vue} from 'vue-property-decorator';
  import * as $api from '@/services/api'
  @Component({
    
  })
  export default class Login extends Vue {
    loginLoading: boolean = false
    loginData: {
      loginName: '',
      password: '',
      guId: null
    }
    rules: {
      account: [
        { required: true, message: '不能为空' }
      ],
      password: [
        { required: true, message: '不能为空' }
      ],
      verifyCode: [
        { required: true, message: '不能为空' }
      ]
    }
    handleLogin () {
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      let guid = ''
      for (let i = 1; i <= 23; i++) {
        let num = Math.random() * 35
          guid += chars[num]
      }
      $api.USER_LOGIN({
        loginName:'Admin',
        password:'111111',
        guId: 'guid'
      })
      .then(res => {
        console.log(res)
      })
    }
    goTo(url:string){
      this.$router.push({name:url});
    };
  }
</script>

<style lang="scss">
  .login{
    padding: 50px 0;
    text-align: center;
    .back{
      font-size: 24px;
      display: inline-block;
    }
    .choose{
      text-align: right;
      padding-right: 20px;
      a{
        color: #495060;
      }
    }
    .content{
      width: 900px;
      margin: 0 auto;
      padding: 50px 30px;
      form {
        width: 520px;
        margin: 0 auto;
        text-align: left;
      }
    }
  }
</style>