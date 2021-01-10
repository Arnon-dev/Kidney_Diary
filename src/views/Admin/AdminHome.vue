<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' ,background: '#fff'}" >
      <v-row no-gutters>
        <v-col cols="5">
          <v-row no-gutters style="cursor: pointer;">
            <a-breadcrumb separator=">" class="ml-3 mt-4">
              <a-breadcrumb-item class="headline"><span style="color:green">Kidnry </span>Diary</a-breadcrumb-item>
            </a-breadcrumb>
          </v-row>
        </v-col>
        <v-col cols="7" class="pt-7 pr-5">
          <v-row justify="end" align="center">
            <v-btn text @click="logout()">
              <v-icon>mdi-logout</v-icon> ออกจากระบบ
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </a-layout-header>
    <a-layout-sider width="230" :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, background: '#fff', marginTop:'70px' }">
      <a-menu
       style="width: 256px"
       :default-selected-keys="[defaultPath]" 
       :selectedKeys="[defaultPath]"
       mode="inline"
       theme="light"
       v-for="item in ListNavbar"
       :key="item.key"
      >
        <a-menu-item :key="item.key" @click="gopage(item.path)">
          <a-icon :type="item.icon" />{{item.name}}
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout-content :style="{ overflow: 'initial', marginTop:'60px', marginLeft:'235px'}">
      <v-container grid-list-xs style="background-color:#fff;margin-top:30px;margin-bottom:30px">
        <router-view></router-view>
      </v-container>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  data () {
    return {
      ListNavbar: [
        { key: '1',
          icon: 'dot-chart',
          name: 'ภาพรวม',
          path: 'admin'
        },
        { key: '2',
          icon: 'profile',
          name: 'รายชื่อผู้ป่วย',
          path: 'listuser'
        },
      ],
      defaultPath: 1
    }
  },
  created () {
    this.$EventBus.$on('pathNav', this.pathNav)
    this.pathNav()
  },
  methods: {
    gopage (val) {
      console.log('path :', val)
      if (val.name === 'ออกจากระบบ') {
        this.logout()
      } else {
        if (val !== this.$router.currentRoute.name) {
          this.$router.push(val).catch(() => {})
        }
      }
    },
    pathNav () {
      if (this.$router.currentRoute.name === 'admin') {
        this.defaultPath = 1
      } else if (this.$router.currentRoute.name === 'listuser') {
        this.defaultPath = 2
      }
    },
    logout () {
      this.$router.push('/').catch(() => {})
    }
  }
}
</script>

<style>
.ant-layout-header {
  padding: 0px !important;
}
.ant-popover-inner-content {
    padding: 0px 0px !important;
}
.v-application ul, .v-application ol {
    padding: 0px 0px !important;
}
.v-application ol, .v-application ul {
    padding: 0px 0px !important;
}
</style>