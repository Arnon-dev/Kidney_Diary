<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' ,background: '#fff'}" class="header">
      <v-row no-gutters>
        <v-col cols="5">
          <v-row no-gutters style="cursor: pointer;">
            <a-breadcrumb separator=">" class="ml-3 mt-4">
              <a-breadcrumb-item class="headline"><span style="color:green">Kidney </span>Diary</a-breadcrumb-item>
            </a-breadcrumb>
          </v-row>
        </v-col>
      </v-row>
    </a-layout-header>
    <a-layout-content>
      <v-container class="fill-height" fluid>
        <v-card
         height="auto"
         width="80%"
         class="mx-auto"
         outlined
         elevation="3"
        >
        <v-row no-gutters>
          <v-col cols="12" md="7">
            <v-img 
             width="100%"
             height="450"
             src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            </v-img>
          </v-col>
          <v-col cols="12" md="5">
            <v-container>
              <v-row justify="center" align="center">
                <v-form ref="loginform" v-model="checklogin" :lazy-validation="lazy">
                  <v-card elevation="0" width="100%" class="mt-16">
                    <v-card-text class="pb-0">
                      <v-row no-gutters dense>
                        <v-col cols="12" md="12">
                          <p>E-mail</p>
                        </v-col>
                        <v-col cols="12" md="12">
                          <v-text-field v-model="username" placeholder="กรุณากรอกอีเมล์" filled rounded dense :rules="rules.emailRules" required @keyup.enter="login()"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                          <p>Password</p>
                        </v-col>
                        <v-col cols="12" md="12">
                          <v-text-field :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :type="show ? 'text' : 'password'" @click:append="show = !show" v-model="password" placeholder="กรุณากรอกพาสเวิร์ด" filled rounded dense :rules="rules.password" required @keyup.enter="login()"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-row no-gutters dense justify="center" align="center">
                        <v-col cols="12" md="6" sm="12" xs="12">
                          <v-btn text style="text-decoration: underline;" @click="gotoRegister()">ลงทะเบียน</v-btn>
                        </v-col>
                        <v-col cols="12" md="6" sm="12" xs="12" class="pl-16">
                          <v-btn color="primary" @click="login()">เข้าสู่ระบบ</v-btn>
                        </v-col>
                      </v-row>
                    </v-card-actions>
                  </v-card>
                </v-form>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-card>
      </v-container>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { Encode } from '@/services'
export default {
  data () {
    return {
      username: '',
      show: false,
      password: '',
      checklogin: true,
      lazy: false,
      rules: {
        password: [v => (v || '').length > 0 || 'กรุณาใส่รหัสผ่าน'],
        emailRules: [
          v => !!v || 'กรุณาใส่อีเมล',
          v => /.+@.+\..+/.test(v) || 'กรุณาใส่อีเมลให้ถูกต้อง',
        ],
      },
    }
  },
  methods: {
    async login () {
      if (this.$refs.loginform.validate(true)) {
        var dataLogin = {
          email: this.username,
          password: this.password
        }
        var formData = {
          dataLogin: dataLogin
        }
        await this.$store.dispatch('actionsLogin', formData)
        var response = await this.$store.state.stateLoginUser
        // console.log('resposne', response.data.admin)
        if (response.response_status === 'SUCCESS') {
          if (response.data.admin.type === 'ADMIN') {
            localStorage.setItem('kidnryData', Encode.encode(response.data))
            this.$router.push({ path: "/admin" }).catch(() => {})
          } else if (response.data.admin.type === 'SUPERADMIN') {
            localStorage.setItem('kidnryData', Encode.encode(response.data))
            this.$router.push({ path: "/superadmin" }).catch(() => {})
          }
        } else {
          this.$swal.fire({
            icon: 'error',
            title: 'อีเมลหรือรหัสผ่านผิด',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
    },
    gotoRegister () {
      localStorage.removeItem('kidnryData')
      this.$router.push("register").catch(() => {})
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