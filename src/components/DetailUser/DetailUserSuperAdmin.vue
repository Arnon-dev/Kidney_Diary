<template>
  <v-container>
    <v-form ref="detailUser" v-model="checkForm" :lazy-validation="lazy">
      <v-row class="ml-2 mr-2" no-gutters>
        <v-col cols="12">
          <v-card outlined>
            <v-row  no-gutters align="center">
              <v-col cols="11" class="mt-5 ml-10">
                <h2>รายละเอียดผู้ป่วย</h2>
              </v-col>
              <v-col cols="12" class="mb-5"><v-divider></v-divider></v-col>
              <!-- Name Patient -->
              <v-col cols="12" md="2" class="pl-3 pb-5"><span class="f-right">ชื่อ-นามสกุล</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="fullname" dense></v-text-field>
              </v-col>
              <!-- Hospital -->
              <v-col cols="12" md="1" class="pl-3 pb-5"><span class="f-right">โรงพยาบาล</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="hospital" dense></v-text-field>
              </v-col>
              <!-- sex -->
              <v-col cols="12" md="2" class="pl-3 pb-5 pt-0" ><span class="f-right">เพศ</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="sex" dense ></v-text-field>
              </v-col>
              <!-- Start to Clean Kidney -->
              <v-col cols="12" md="1" class="pl-3 pb-5 pt-0"><span class="f-right">วันที่วางสายท่อล้างไต</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="startDate" dense></v-text-field>
              </v-col>
              <!-- Email -->
              <v-col cols="12" md="2" class="pl-3 pb-5 pt-0"><span class="f-right">วันเดือนปีเกิด</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="birthDate" dense></v-text-field>
              </v-col>
              <!-- start Kidney -->
              <v-col cols="12" md="1" class="pl-3 pb-5 pt-0"><span class="f-right">วันที่เริ่มล้างไตทางช่องท้อง</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="startKidney" dense></v-text-field>
              </v-col>
              <!-- Year -->
              <v-col cols="12" md="2" class="pl-3 pb-5 pt-0"><span class="f-right">อายุ</span></v-col>
              <v-col cols="12" md="4" class="pl-3 pb-0">
                <v-text-field outlined v-model="year" dense ></v-text-field>
              </v-col>
              <!-- Phone -->
              <v-col cols="12" md="1" class="pl-3 pb-5 pt-0"><span class="f-right">หมายเลขหน่วยไตเทียม</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="phone" dense></v-text-field>
              </v-col>
              <!-- Mobile -->
              <v-col cols="12" md="2" class="pl-3 pb-5 pt-0"><span class="f-right">เบอร์โทรศัพท์</span></v-col>
              <v-col cols="12" md="4" class="pl-3 pb-0">
                <v-text-field outlined v-model="mobile" dense ></v-text-field>
              </v-col>
              <!-- Nurse Name -->
              <v-col cols="12" md="1" class="pl-3 pb-5 pt-0"><span class="f-right">ชื่อพยาบาลผู้สอน</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="Nursename" dense></v-text-field>
              </v-col>
              <!-- Nurse Mobile -->
              <v-col cols="12" md="2" class="pl-3 pb-5 pt-0"><span class="f-right">หมายเลขโทรศัพท์พยาบาลผู้สอน</span></v-col>
              <v-col cols="12" md="4" class="pl-3 pb-0">
                <v-text-field outlined v-model="Nursemobile" dense ></v-text-field>
              </v-col>
              <!-- Phone -->
              <v-col cols="12" md="1" class="pl-3 pb-5 pt-0"><span class="f-right">หมายเหตุ</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="note" dense></v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" class="mt-5">
          <v-card outlined>
            <v-row  no-gutters align="center">
              <v-col cols="11" class="mt-5 ml-10">
                <h2>แดชบอร์ด</h2>
              </v-col>
              <v-col cols="12" class="mb-5"><v-divider></v-divider></v-col>
              <v-col cols='12' md='12' lg='6' sm='12' xs='12'>
                <v-card class="ma-2 pa-2" tile max-height='100%' height="100%" outlined>
                  <Urinegraph/>
                </v-card>
              </v-col>
              <v-col cols='12' md='12' lg='6' sm='12' xs='12'>
                <v-card class="ma-2 pa-2" tile max-height='100%' height="100%" outlined>
                  <BloodPresure/>
                </v-card>
              </v-col>
              <v-col cols="12" md='12' lg='12' sm='12' xs='12'>
                <v-card class="ma-2 pa-2" tile max-height='100%' height="100%" outlined>
                  <Timegraph/>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
      </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  components: {
    Urinegraph: () => import('@/components/DashBoard/urinegaingraph.vue'),
    BloodPresure: () => import('@/components/DashBoard/bloodpresuregraph.vue'),
    Timegraph: () => import('@/components/DashBoard/timegraph.vue')
  },
  data () {
    return {
      lazy: false,
      checkForm: true,
      fullname: '',
      hospital: '',
      sex: '',
      startDate: '',
      birthDate: '',
      year: '',
      startKidney: '',
      phone: '',
      mobile: '',
      Nursename: '',
      Nursemobile: '',
      note: ''
    }
  }
}
</script>

<style>

</style>