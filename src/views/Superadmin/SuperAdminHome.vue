<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' ,background: '#fff'}" >
      <v-row no-gutters>
        <v-col cols="5">
          <v-row no-gutters style="cursor: pointer;">
            <a-breadcrumb separator=">" class="ml-3 mt-4">
              <a-breadcrumb-item class="headline"><span style="color:green">Kidney </span>Diary</a-breadcrumb-item>
            </a-breadcrumb>
          </v-row>
        </v-col>
        <v-col cols="7" class="pt-2 pr-5">
          <v-row justify="end" align="center">
            <v-avatar size="25">
              <v-img :src="`${image}`" v-if="image !== null"/>
              <v-img src="@/assets/noprofile.png" v-else />
            </v-avatar>
            <span class="pt-2 pl-3 pr-1 pb-2">{{ nameUser }} </span>
            <v-divider vertical class="mx-2" height='50px'></v-divider>
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
       :selected-keys="[defaultPath]"
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
      <v-container grid-list-xs style="background-color:#fff; margin-top:30px; margin-bottom:30px">
        <router-view></router-view>
      </v-container>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { Decode } from '@/services'
export default {
  data () {
    return {
      ListNavbar: [
        { key: '1',
          icon: 'idcard',
          name: 'จัดการ admin',
          path: 'superadmin'
        },
        { key: '2',
          icon: 'idcard',
          name: 'จัดการ superadmin',
          path: 'listsuperadmin'
        }
        // { key: '3',
        //   icon: 'profile',
        //   name: 'รายชื่อผู้ป่วย',
        //   path: 'listuseradmin'
        // }
      ],
      defaultPath: 1,
      nameUser: '',
      image: ''
    }
  },
  created () {
    this.$EventBus.$on('pathNavSuperAdmin', this.pathNavSuperAdmin)
    if (localStorage.getItem('kidnryData') !== null) {
      const kidneyData = JSON.parse(Decode.decode(localStorage.getItem('kidnryData')))
      // console.log('kidneydata ===>', kidneyData)
      this.nameUser = kidneyData.admin.firstName + ' ' + kidneyData.admin.lastName
      this.image = kidneyData.admin.image
      this.pathNavSuperAdmin()
    } else {
      this.$router.push('/').catch(() => {})
    }
  },
  methods: {
    gopage (val) {
      // console.log('path :', val)
      if (val.name === 'ออกจากระบบ') {
        this.logout()
      } else {
        if (val !== this.$router.currentRoute.name) {
          // console.log(val);
          this.$router.push(val).catch(() => {})
        }
      }
    },
    pathNavSuperAdmin () {
      if (this.$router.currentRoute.name === 'superadmin') {
        this.defaultPath = 1
      } else if (this.$router.currentRoute.name === 'listsuperadmin') {
        this.defaultPath = 2
      } 
      // else if (this.$router.currentRoute.name === 'listuseradmin') {
      //   this.defaultPath = 3
      // }
    },
    logout () {
      localStorage.removeItem('kidnryData')
      this.$router.push('/').catch(() => {})
    }
  }
}
</script>

<style scoped>
.v-divider--vertical {
  margin-top: 10px;
  height: 50px;
}
</style>
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