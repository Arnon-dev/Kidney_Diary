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
             height="100%"
             src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            </v-img>
          </v-col>
          <v-col cols="12" md="5">
            <v-container>
              <v-row justify="start" align="center">
                <v-form ref="loginform" v-model="checklogin" :lazy-validation="lazy">
                  <v-card elevation="0" width="100%" tile>
                    <v-card-text class="pb-0">
                      <v-row no-gutters dense>
                        <v-col cols="12" md="3" class="pt-2">
                          <p>E-mail</p>
                        </v-col>
                        <v-col cols="12" md="9">
                          <v-text-field v-model="username" placeholder="กรุณากรอกอีเมล์" filled rounded dense :rules="rules.emailRules" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" class="pt-2">
                          <p>Password</p>
                        </v-col>
                        <v-col cols="12" md="9">
                          <v-text-field v-model="password" placeholder="กรุณากรอกพาสเวิร์ด" filled rounded dense :rules="rules.password" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" class="pt-2">
                          <p>ชื่อ</p>
                        </v-col>
                        <v-col cols="12" md="9">
                          <v-text-field v-model="name" placeholder="กรุณากรอกชื่อ" filled rounded dense :rules="rules.name" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" class="pt-2">
                          <p>นามสกุล</p>
                        </v-col>
                        <v-col cols="12" md="9" >
                          <v-text-field v-model="sername" placeholder="กรุณากรอกนามสกุล" filled rounded dense :rules="rules.sername" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" class="pt-2">
                          <p>ตำแหน่ง</p>
                        </v-col>
                        <v-col cols="12" md="9">
                          <v-text-field v-model="duty" placeholder="กรุณากรอกตำเหน่ง" filled rounded dense :rules="rules.duty" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" class="pt-2">
                          <p>โรงพยาบาล</p>
                        </v-col>
                        <v-col cols="12" md="9">
                          <v-select v-model="hospital" :items="items" filled placeholder="กรุณาเลือกโรงพยาบาล" rounded dense :rules="rules.selectRules" required></v-select>
                        </v-col>
                        <v-col cols="12" md="12">
                          <p>อัพโหลดบัตรประจำตัวประชาชน</p>
                        </v-col>
                        <v-col cols="12" md="12">
                          <v-file-input v-model="image" placeholder="กรุณาอัพรูปบัตรประจำตัวประชาชน" rounded filled prepend-icon="mdi-camera" :rules="rules.image" dense required></v-file-input>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-row no-gutters>
                        <v-col cols="12" md="6" sm="6">
                          <v-btn class="error" @click="cancel()">ยกเลิก</v-btn>
                        </v-col>
                        <v-col cols="12" md="6" sm="6" class="pl-16">
                          <v-btn color="primary" @click="login()">ลงทะเบียน</v-btn>
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
      name: '',
      sername: '',
      duty: '',
      hospital: '',
      image: '',
      checklogin: true,
      lazy: false,
      rules: {
        password: [v => (v || '').length > 0 || 'Password is required'],
        image: [v => (v || '').length > 0 || 'Image is required'],
        name: [v => (v || '').length > 0 || 'Name is required'],
        sername: [v => (v || '').length > 0 || 'Sername is required'],
        duty: [v => (v || '').length > 0 || 'Duty is required'],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        selectRules: [val => (val || '').length > 0 || 'This field is required'],
      },
      items: ['โรงพยาบาลพระราม 9', 'โรงพยาบาลสงขชานครินทร์', 'โรงพยาบาลกรุงเทพ', 'โรงพยาบาลหาดใหญ่'],
    }
  },
  methods: {
    login () {
      if (this.$refs.loginform.validate(true)) {
        this.$router.push("/").catch(() => {})
      }
    },
    cancel () {
      this.$router.push("/").catch(() => {})
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