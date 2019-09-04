<template>
  <div class='box'>
    <div class="menu__left">
      <el-menu
        id="menu__left__menus"
        :default-active="$route.name"
        :router="true"
        :collapse="isCollapse"
        style="border-style:none;text-align: center"
        class="el-menu-vertical-demo"
        :unique-opened="true"
        background-color="#4A4A4A"
        text-color="#fff">
        <template v-for="item in APP_ACCOUNT.menuVOList">
          <el-menu-item v-if="item.childMenu==0" style="position: relative" :key="item.url" :index="item.url"
                        :route="{name:item.url}">
            <i :class="item.icon" class="iconClass" :style="item.iconStyle" aria-hidden="true"></i>
            <span slot="title" class="firstTitleClass" :style="item.nameStyle">{{item.name}}</span>
          </el-menu-item>
          <el-submenu v-else style="position: relative;" :key="item.url" :index="item.url">
            <template slot="title">
              <i :style="item.iconStyle" class="iconClass" :class="item.icon"></i>
              <span slot="title" class="firstTitleClass" :style="item.nameStyle">{{item.name}}</span>
            </template>
            <el-menu-item aria-hidden="true" style="position: relative" v-for="child in item.childMenu"
                          :key="child.id" :index="child.url"
                          :route="{name:child.url}">
              <span slot="title" class="titleClass">{{child.name}}</span>
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </div>
    <div ref="menuRight" class="menu__right">
      <div class="menu__right__content">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Watch, Vue} from 'vue-property-decorator';
  import * as $api from '@/services/api'
  @Component({
  })
  export default class Index extends Vue {
    APP_ACCOUNT:any = sessionStorage.getItem('APP_ACCOUNT_SET')
    isCollapse:boolean = false
    created () {
      if (!this.APP_ACCOUNT) {
        this.$alert('请重新登录容', '提示', {
          confirmButtonText: '确定',
          callback: this.$router.push({ name: 'login' })
        });
      } else {
        const arr = JSON.parse(sessionStorage.getItem('APP_ACCOUNT_SET'))
        arr.menuVOList.map(item => {
          item.flag = false
          return item 
        })
        arr.menuVOList[0].flag = true
        this.APP_ACCOUNT = arr
      }
      // this.APP_ACCOUNT = [
      //   {
      //     name: '慢病首页',
      //     icon: 'fa fa-home',
      //     childMenu: []
      //   },
      //   {
      //     name: '角色管理',
      //     icon: 'fa fa-home',
      //     childMenu: []
      //   },
      //   {
      //     name: '人员管理',
      //     icon: 'fa fa-home',
      //     childMenu: []
      //   },
      //   {
      //     name: '医院配置',
      //     icon: 'fa fa-home',
      //     childMenu: []
      //   },
      //   {
      //     name: '处方药品',
      //     icon: 'fa fa-home',
      //     childMenu: []
      //   },
      //   {
      //     name: '处方管理',
      //     icon: 'fa fa-home',
      //     childMenu: []
      //   },
      //   {
      //     name: '患者档案',
      //     icon: 'fa fa-home',
      //     url:'',
      //     childMenu: [
      //       {name: '建档交互',url:''},
      //       {name: '未建档会员',url:''}
      //     ]
      //   },
      //   {
      //     name: '订单管理',
      //     icon: 'fa fa-home',
      //     childMenu: []
      //   },
      //   {
      //     name: '会员中心',
      //     icon: 'fa fa-home',
      //     childMenu: []
      //   }
      // ]
    }
  }
</script>

<style lang="scss" scoped>
  .box{
    display: flex;
    .left{
      font-size: 14px;
      width: 240px;
      flex-shrink: 0;
      min-height: 100vh;
      background: #fff;
      border-right: 1px solid #ccc;
      .logo{
        width: 160px;
        height: 50px;
        margin: 10px auto;
        display: block;
      }
      .nav-father{
        padding: 10px 20px;
        box-sizing: border-box;
        .iconClass{
          width: 16px;
          height: 16px;
          margin-right: 20px;
        }
      }
      .nav-sub{
        padding: 10px 46px
      }
    }
    .right{
      width: 100%;
      min-height: 100vh
    }
  }
</style>