<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' ,background: '#fff'}" class="header">
      <v-row no-gutters>
        <v-col cols="5">
          <v-row no-gutters style="cursor: pointer;">
            <a-breadcrumb separator=">" class="ml-3 mt-4">
              <a-breadcrumb-item class="headline"><span style="color:green">Kidnry </span>Diary</a-breadcrumb-item>
            </a-breadcrumb>
          </v-row>
        </v-col>
      </v-row>
    </a-layout-header>
    <a-layout-content>
      <v-container class="fill-height" fluid>
        <v-card
         height="auto"
         width="70%"
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
                            <v-text-field v-model="username" placeholder="กรุณากรอกอีเมล์" filled rounded dense :rules="rules.emailRules" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                            <p>Password</p>
                        </v-col>
                        <v-col cols="12" md="12">
                            <v-text-field v-model="password" placeholder="กรุณากรอกพาสเวิร์ด" filled rounded dense :rules="rules.password" required></v-text-field>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-row no-gutters dense>
                        <v-col cols="12" md="6">
                          <v-btn text style="text-decoration: underline;" @click="gotoRegister()">ลงทะเบียน</v-btn>
                        </v-col>
                        <v-col cols="12" md="6" class="pl-16">
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
export default {
  data () {
    return {
      username: '',
      password: '',
      checklogin: true,
      lazy: false,
      rules: {
        password: [v => (v || '').length > 0 || 'Password is required'],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
      },
    }
  },
  methods: {
    login () {
      if (this.$refs.loginform.validate(true)) {
        if (this.username === 'admin@mail.com' && this.password === '1234') {
          this.$router.push("admin").catch(() => {})
        } else if (this.username === 'superadmin@mail.com' && this.password === '1234') {
          this.$router.push("superadmin").catch(() => {})
        }
      }
    },
    gotoRegister () {
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