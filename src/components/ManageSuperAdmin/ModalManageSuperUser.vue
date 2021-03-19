<template>
  <v-dialog v-model="ModalEditSellerShop" scrollable width="850" persistent>
    <v-form ref="UserDetail" v-model="checkValidate" :lazy-validation="lazy">
      <v-card>
        <v-card-title><v-icon large class="pr-4">mdi-account-plus</v-icon>เพิ่มข้อมูล superadmin</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 100%">
          <v-row dense justify="start" align="center" no-gutters>
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
        <v-divider class="mt-3"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error"  @click="Cancel()">ยกเลิก</v-btn>
          <v-btn color="success"  @click="Confirm()">ตกลง</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      checkValidate: true,
      lazy: false,
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
      itemshospital: [],
      rules: {
        password: [v => !!v || 'Password is required'],
        image: [v => !!v || 'Image is required'],
        name: [v => !!v || 'Name is required'],
        sername: [v => !!v || 'Sername is required'],
        duty: [v => !!v || 'Duty is required'],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        selectRules: [val => !!val || 'This field is required'],
      },
    }
  },
  computed: {
    ModalEditSellerShop () {
      return this.$store.state.stateModalManageUser
    },
  },
  created () {
    this.getAllHopital()
  },
  methods: {
    async Confirm () {
      if (this.$refs.UserDetail.validate(true)) {
        const dataUser = {
          email: this.username,
          password: this.password,
          hospitalId: this.hospital,
          firstName: this.name,
          lastName: this.sername,
          position: this.duty,
          type: 'SUPERADMIN',
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
          this.$EventBus.$emit('GetAllSuperAdmin')
          this.$store.commit("mutationModalManageUSer")
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
    Cancel () {
      this.username = ''
      this.password = ''
      this.hospital = ''
      this.name = ''
      this.sername = ''
      this.duty = ''
      this.resetValidation()
      this.$store.commit("mutationModalManageUSer")
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
      this.$refs.UserDetail.resetValidation()
    }
  }
}
</script>

<style>

</style>