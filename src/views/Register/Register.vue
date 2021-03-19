<template>
  <a-layout id="components-layout-demo-fixed">
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
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
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
             height="100%"
             src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            </v-img>
          </v-col>
          <v-col cols="12" md="5">
            <v-container>
              <v-row justify="start" align="center" no-gutters dense>
                <v-form ref="loginform" v-model="checklogin" :lazy-validation="lazy">
                  <v-card elevation="0" width="100%" tile>
                    <v-card-text class="pb-0">
                      <v-row no-gutters dense>
                        <v-col cols="12" md="3" sm="12" class="pt-2">
                          <p>E-mail <span style="color: red;">*</span></p>
                        </v-col>
                        <v-col cols="12" md="9" sm="12">
                          <v-text-field v-model="username" placeholder="กรุณากรอกอีเมล์" filled rounded dense :rules="rules.emailRules"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" sm="12" class="pt-2">
                          <p>Password <span style="color: red;">*</span></p>
                        </v-col>
                        <v-col cols="12" md="9" sm="12">
                          <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" placeholder="กรุณากรอกพาสเวิร์ด" filled rounded dense :rules="rules.password" @click:append="show1 = !show1"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" sm="12" class="pt-2">
                          <p>ชื่อ <span style="color: red;">*</span></p>
                        </v-col>
                        <v-col cols="12" md="9" sm="12">
                          <v-text-field v-model="name" placeholder="กรุณากรอกชื่อ" filled rounded dense :rules="rules.name"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" sm="12" class="pt-2">
                          <p>นามสกุล <span style="color: red;">*</span></p>
                        </v-col>
                        <v-col cols="12" md="9" sm="12">
                          <v-text-field v-model="sername" placeholder="กรุณากรอกนามสกุล" filled rounded dense :rules="rules.sername"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" sm="12" class="pt-2">
                          <p>ตำแหน่ง <span style="color: red;">*</span></p>
                        </v-col>
                        <v-col cols="12" md="9" sm="12">
                          <v-text-field v-model="duty" placeholder="กรุณากรอกตำเหน่ง" filled rounded dense :rules="rules.duty"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" sm="12" class="pt-2">
                          <p>โรงพยาบาล <span style="color: red;">*</span></p>
                        </v-col>
                        <v-col cols="12" md="9" sm="12">
                          <v-select v-model="hospital" :items="itemshospital" item-text="name" item-value="id" filled placeholder="กรุณาเลือกโรงพยาบาล" rounded dense :rules="rules.selectRules"></v-select>
                        </v-col>
                        <!-- <v-col cols="12" md="3" sm="12" class="pt-2">
                          <p>หน้าที่</p>
                        </v-col>
                        <v-col cols="12" md="9" sm="12">
                          <v-select v-model="type" :items="itemstype" filled placeholder="กรุณาเลือกหน้าที่" item-text="role" item-value="values"  :rules="rules.selectRules" rounded dense></v-select>
                        </v-col> -->
                        <v-col cols="12" md="12" sm="12">
                          <p>อัพโหลดบัตรประจำตัวประชาชน <span style="color: red;">*</span></p>
                        </v-col>
                        <v-col cols="12" md="12" sm="12">
                          <input type="file" ref="image" id="picTure" accept="image/*" @change="showPicture">
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-row no-gutters dense align="center" justify="center">
                        <v-col cols="5" md="5" sm="12">
                          <v-btn class="error" @click="cancel()">ยกเลิก</v-btn>
                        </v-col>
                        <v-col cols="5" md="5" sm="12">
                          <v-btn color="primary" @click="confirm()">ลงทะเบียน</v-btn>
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
      show1: false,
      username: '',
      password: '',
      name: '',
      sername: '',
      duty: '',
      hospital: '',
      imageBase: '',
      type: '',
      image: '',
      checklogin: true,
      lazy: false,
      rules: {
        password: [v => !!v || 'กรุณาใส่รหัสผ่าน'],
        image: [v => !!v || 'กรุณาใส่รูปภาพ'],
        name: [v => !!v || 'กรุณาใส่ชื่อ'],
        sername: [v => !!v || 'กรุณาใส่นามสกุล'],
        duty: [v => !!v || 'กรุณาใส่ตำแหน่ง'],
        emailRules: [
          v => !!v || 'กรุณาใส่อีเมล',
          v => /.+@.+\..+/.test(v) || 'กรุณาใส่อีเมลให้ถูกต้อง',
        ],
        selectRules: [val => !!val || 'This field is required'],
      },
      itemshospital: [],
      itemstype: [
        { role: 'admin', values: 'ADMIN' },
        { role: 'superadmin', values: 'SUPERADMIN' }
      ]
    }
  },
  created () {
    this.getAllHopital()
  },
  watch: {
    hospital(val) {
      console.log(val)
    }
  },
  methods: {
    async confirm () {
      if (this.$refs.loginform.validate(true)) {
        const dataUser = {
          email: this.username,
          password: this.password,
          hospitalId: this.hospital,
          firstName: this.name,
          lastName: this.sername,
          position: this.duty,
          type: 'ADMIN',
          image: this.imageBase
        }
        // console.log('data', data)
        var formData = {
          dataUser: dataUser
        }
        await this.$store.dispatch('actionsRegister', formData)
        var response = await this.$store.state.stateRegisterUser
        if (response.response_status === 'SUCCESS'){
          this.$swal.fire({
            icon: 'success',
            title: 'Create User Success',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push("/").catch(() => {})
        } else {
          this.$swal.fire({
            icon: 'error',
            title: `${response.message}`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
    },
    cancel () {
      this.username = ''
      this.password = ''
      this.hospital = ''
      this.name = ''
      this.sername = ''
      this.duty = ''
      this.resetValidation()
      this.$router.push("/").catch(() => {})
    },
    async getAllHopital () {
      await this.$store.dispatch('actionsGelAllHospital')
      var response = await this.$store.state.stateGetAllHospital
      // console.log(response)
      if (response.response_status === 'SUCCESS') {
        this.itemshospital = response.data
      }
    },
    showPicture (e) {
      const files = e.target.files
      // console.log('files =====>', files)
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        const element = files[0]
        const reader = new FileReader()
        reader.readAsDataURL(element)
        reader.onload = () => {
          this.imageBase = reader.result
        }
      }
    },
    resetValidation () {
      this.$refs.loginform.resetValidation()
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