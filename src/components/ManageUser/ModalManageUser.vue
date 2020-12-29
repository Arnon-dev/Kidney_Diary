<template>
  <v-dialog v-model="ModalEditSellerShop" scrollable width="850" persistent>
    <v-form ref="UserDetail" v-model="checkValidate" :lazy-validation="lazy">
      <v-card>
        <v-card-title>ข้อมูลผู้ใช้งาน</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 500px;">
          <v-row dense justify="start" align="center" no-gutters>
              <v-col cols="2" md="2" sm="12" class="pb-2">
                ชื่อ
              </v-col>
              <v-col cols="4" md="4" sm="12">
                <v-text-field v-model="name" dense></v-text-field>
              </v-col>
              <v-col cols="2" md="2" sm="12" class="pb-2 pl-4">
                นามสกุล
              </v-col>
              <v-col cols="12" md="4" sm="12">
                <v-text-field v-model="name" dense></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="12" class="pb-2">
                ตำแหน่ง
              </v-col>
              <v-col cols="12" md="4" sm="12">
                <v-text-field v-model="name" dense></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="12" class="pb-2 pl-4">
                หมายเลขโทรศัพท์
              </v-col>
              <v-col cols="12" md="4" sm="12">
                <v-text-field v-model="name" dense></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="12" class="pb-2">
                อีเมล์
              </v-col>
              <v-col cols="12" md="4" sm="12">
                <v-text-field v-model="name" dense></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="12" class="pb-2 pl-4">
                โรงพยาบาล
              </v-col>
              <v-col cols="12" md="4" sm="12">
                <v-text-field v-model="name" dense></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="12">
                สถานะ
              </v-col>
              <v-col cols="12" md="10" sm="12">
                <v-radio-group
                 v-model="row"
                 row
                >
                  <v-radio
                   label="อนุมัติ"
                   value="active"
                  ></v-radio>
                  <v-radio
                   label="ไม่อนุมัติ"
                   value="inactive"
                  ></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" md="2" sm="12">
                หน้าที่
              </v-col>
              <v-col cols="12" md="10" sm="12">
                <v-radio-group
                 v-model="row"
                 row
                >
                  <v-radio
                   label="Admin"
                   value="Admin"
                  ></v-radio>
                  <v-radio
                   label="Observer"
                   value="Observer"
                  ></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" md="2" sm="12">
                สำเนาบัตรประชาชน
              </v-col>
              <v-col cols="12" md="12" sm="12">
                <v-row justify="center" align="center" class="mt-1">
                  <v-img
                   lazy-src="https://picsum.photos/id/11/10/6"
                   max-height="200"
                   max-width="300"
                   src="https://picsum.photos/id/11/500/300"
                  ></v-img>
                </v-row>
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
      name: 'ทดสอบ',
      row: null,
    }
  },
  computed: {
    ModalEditSellerShop () {
      return this.$store.state.stateModalManageUser
    },
  },
  methods: {
    Cancel () {
      this.$store.commit("mutationModalManageUSer")
    }
  }
}
</script>

<style>

</style>