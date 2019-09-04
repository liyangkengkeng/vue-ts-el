<template>
  <section class="login" @keyup.enter="handleLogin">
    <div class="content loginBox">
      <el-form :model="loginData" :rules="rules" ref="loginForm" id="loginDetails">
        <el-form-item label="账号：" :label-width="'120px'" prop="loginName">
          <el-input style="width: 300px" v-model="loginData.loginName"></el-input>
        </el-form-item>
        <el-form-item label="密码：" :label-width="'120px'" prop="password">
          <el-input type="password" style="width: 300px" v-model="loginData.password"></el-input>
        </el-form-item>
      </el-form>
      <div style="line-height: 40px">
        <el-button type="primary" :loading="loginLoading" @click="handleLogin">
            登录
          </el-button>
          <span style="color: #99A9BF;font-size: 13px;margin-left: 12%">建议使用chrome或IE8以上版本</span>
      </div>
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
    loginData = {
      loginName: '',
      password: '',
      guId: null
    }
    rules = {
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
        loginName: this.loginData.loginName,
        password: this.loginData.password,
        guId: 'guid'
      })
      .then((res: any) => {
        sessionStorage.setItem('APP_ACCOUNT_SET', JSON.stringify(res.data))
        this.$router.push({ name: 'home' })
      })
    }
  }
</script>

<style lang="scss" scoped>
  .login{
    width: 100vw;
    height: 100vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>