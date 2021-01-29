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
                <v-text-field outlined v-model="fullname" dense disabled></v-text-field>
                <!-- <span>{{ fullname }}</span> -->
              </v-col>
              <!-- Hospital -->
              <v-col cols="12" md="1" class="pl-3 pb-5"><span class="f-right">โรงพยาบาล</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="dataPatient.hospitalName" dense disabled></v-text-field>
              </v-col>
              <!-- sex -->
              <v-col cols="12" md="2" class="pl-3 pb-5 pt-0" ><span class="f-right">เพศ</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="sex" dense disabled></v-text-field>
              </v-col>
              <!-- Start to Clean Kidney -->
              <v-col cols="12" md="1" class="pl-3 pb-5 pt-0"><span class="f-right">วันที่วางสายท่อล้างไต</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="dataPatient.installationDate" dense disabled></v-text-field>
              </v-col>
              <!-- Email -->
              <v-col cols="12" md="2" class="pl-3 pb-5 pt-0"><span class="f-right">วันเดือนปีเกิด</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="dataPatient.dateOfBirth" dense disabled></v-text-field>
              </v-col>
              <!-- start Kidney -->
              <v-col cols="12" md="1" class="pl-3 pb-5 pt-0"><span class="f-right">วันที่เริ่มล้างไตทางช่องท้อง</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="dataPatient.dateOfDialysis" dense disabled></v-text-field>
              </v-col>
              <!-- Year -->
              <v-col cols="12" md="2" class="pl-3 pb-5 pt-0"><span class="f-right">อายุ</span></v-col>
              <v-col cols="12" md="4" class="pl-3 pb-0">
                <v-text-field outlined v-model="dataPatient.age" dense disabled></v-text-field>
              </v-col>
              <!-- Phone -->
              <v-col cols="12" md="1" class="pl-3 pb-5 pt-0"><span class="f-right">หมายเลขหน่วยไตเทียม</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="dataPatient.hospitalCode" dense disabled></v-text-field>
              </v-col>
              <!-- Mobile -->
              <v-col cols="12" md="2" class="pl-3 pb-5 pt-0"><span class="f-right">เบอร์โทรศัพท์</span></v-col>
              <v-col cols="12" md="4" class="pl-3 pb-0">
                <v-text-field outlined v-model="dataPatient.telNo" dense disabled></v-text-field>
              </v-col>
              <!-- Nurse Name -->
              <v-col cols="12" md="1" class="pl-3 pb-5 pt-0"><span class="f-right">ชื่อพยาบาลผู้สอน</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="dataPatient.staffName" dense disabled></v-text-field>
              </v-col>
              <!-- Nurse Mobile -->
              <v-col cols="12" md="2" class="pl-3 pb-5 pt-0"><span class="f-right">หมายเลขโทรศัพท์พยาบาลผู้สอน</span></v-col>
              <v-col cols="12" md="4" class="pl-3 pb-0">
                <v-text-field outlined v-model="dataPatient.staffTel" dense disabled></v-text-field>
              </v-col>
              <!-- Phone -->
              <v-col cols="12" md="1" class="pl-3 pb-5 pt-0"><span class="f-right">หมายเหตุ</span></v-col>
              <v-col cols="12" md="4" class="pl-3">
                <v-text-field outlined v-model="dataPatient.remark" dense disabled></v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" class="mt-5">
          <v-card outlined v-if="dashboardReady">
            <v-row  no-gutters align="center">
              <v-col cols="11" class="mt-5 ml-10">
                <h2>แดชบอร์ด</h2>
              </v-col>
              <v-col cols="12" class="mb-5"><v-divider></v-divider></v-col>
              <v-col cols="12" md='12' lg='12' sm='12' xs='12'>
                <v-row no-gutters justify="start" align="center">
                  <v-col cols='12' md="9" sm='12' xs='12'>
                    <span class="pr-2 pl-2">จาก</span>
                    <a-date-picker
                     v-model="startValue"
                     :disabled-date="disabledStartDate"
                     show-time
                     format="YYYY-MM-DD"
                     placeholder="เลือกวันที่เริ่มต้น"
                     @openChange="handleStartOpenChange"
                    />
                    <span class="pl-2 pr-2">ถึง</span>
                    <a-date-picker
                     v-model="endValue"
                     :disabled-date="disabledEndDate"
                     show-time
                     format="YYYY-MM-DD"
                     placeholder="เลือกวันที่สิ้นสุด"
                     :open="endOpen"
                     @openChange="handleEndOpenChange"
                    />
                    <v-btn @click="sendDate" class="ml-2" color="success" small>ตกลง</v-btn>
                    <v-btn @click="clearDate" class="ml-2" color="error" small>เคลียร์ค่า</v-btn>
                  </v-col>
                  <v-col cols='12' md="3" sm='12' xs='12'>
                    <v-row no-gutters justify="start" align="center">
                      <span class="pl-2">เลือกแบบดูเฉพาะ :</span>
                      <v-btn @click="oneDate" class="ml-2" small>วันนี้</v-btn>
                      <v-btn @click="AllDate" class="ml-2" small>ดูทั้งหมด</v-btn>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols='12' md='12' lg='6' sm='12' xs='12'>
                <v-card class="ma-2 pa-2" tile max-height='100%' height="100%" outlined>
                  <Urinegraph :startDate='startValue' :endDate='endValue'/>
                </v-card>
              </v-col>
              <v-col cols='12' md='12' lg='6' sm='12' xs='12'>
                <v-card class="ma-2 pa-2" tile max-height='100%' height="100%" outlined>
                  <BloodPresure :startDate='startValue' :endDate='endValue'/>
                </v-card>
              </v-col>
              <v-col cols="12" md='12' lg='12' sm='12' xs='12'>
                <v-card class="ma-2 pa-2" tile max-height='100%' height="100%" outlined>
                  <Timegraph :startDate='startValue' :endDate='endValue'/>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
          <v-card height="200px" v-else>
            <v-row  no-gutters align="center">
              <v-col cols="11" class="mt-5 ml-10">
                <h2>แดชบอร์ด</h2>
              </v-col>
              <v-col cols="12" class="mb-5"><v-divider></v-divider></v-col>
              <v-col class="subtitle-1 text-center" cols="12">
                <v-card-text>
                  <div class="dashboard-loader">
                    <span class="bars"></span>
                    <span class="text">กำลังโหลดข้อมูล</span>
                  </div>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { Decode } from '@/services'
import moment from 'moment'
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
      PatientID: null,
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
      note: '',
      dataUser: [],
      items: [],
      dataPatient: [],
      startValue: null,
      endValue: null,
      endOpen: false
    }
  },
  async created () {
    this.$store.commit('DashboardReady', false)
    if (Object.prototype.hasOwnProperty.call(localStorage, 'dataPatient')) {
      this.dataUser = JSON.parse(Decode.decode(localStorage.getItem('dataPatient')))
      this.PatientID = JSON.parse(Decode.decode(localStorage.getItem('PatientID')))
      // console.log(this.dataPatient)
      if (this.startValue === null && this.endValue === null) {
        var data = {
          startDate: this.startValue,
          endDate: this.endValue
        }
        await this.$store.dispatch('actionGetAllChart', data)
      }
      // await this.$store.dispatch('actionGetProfitChart')
      // await this.$store.dispatch('actionGetWeightChart')
      this.getUserdata()
    } else {
      this.dataPatient = []
      this.$swal.fire({
        icon: 'error',
        title: 'ไม่มีข้อมูลคนไข้',
        text: 'โปรดติดต่อ admin',
        showConfirmButton: false,
        timer: 1500
      })
    }
  },
  methods: {
    getUserdata () {
      var data = [...this.dataUser.users]
      var cleanData = data.filter(item => item.id === this.PatientID)
      // console.log('Clean data =====>', cleanData)
      this.dataPatient = cleanData[0]
      console.log('Clean data =====>', this.dataPatient)
      this.fullname = this.dataPatient.firstName + ' ' + this.dataPatient.lastName
      if (this.dataPatient.gender === 'MALE') {
        this.sex = 'ชาย'
      } else {
        this.sex = 'หญิง'
      }
    },
    disabledStartDate(startValue) {
      const endValue = this.endValue;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    },
    disabledEndDate(endValue) {
      const startValue = this.startValue;
      if (!endValue || !startValue) {
        return false;
      }
      return startValue.valueOf() >= endValue.valueOf();
    },
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true;
      }
    },
    handleEndOpenChange(open) {
      this.endOpen = open;
    },
    async sendDate () {
      var data = {
        startDate: this.startValue.format('YYYY-MM-DD'),
        endDate: this.endValue.format('YYYY-MM-DD')
      }
      // console.log('data Date====>', data)
      await this.$store.dispatch('actionGetAllChart', data)
    },
    async clearDate ()  {
      this.startValue = null
      this.endValue = null
      var data = {
        startDate: this.startValue,
        endDate: this.endValue
      }
      await this.$store.dispatch('actionGetAllChart', data)
    },
    async oneDate () {
      var data = {
        startDate: moment().format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD')
      }
      console.log(data)
      await this.$store.dispatch('actionGetAllChart', data)
    },
    async AllDate () {
      this.startValue = null
      this.endValue = null
      var data = {
        startDate: this.startValue,
        endDate: this.endValue
      }
      // console.log(data)
      await this.$store.dispatch('actionGetAllChart', data)
    }
  },
  computed: {
    dashboardReady () {
      // console.log('dashboardReady', this.$store.state.DashboardAPI.dashboard_ready )
      return this.$store.state.dashboardReady
    }
  }
}
</script>

<style scoped>
.dashboard-loader {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 75px;
  height: 45px;
  border-left: 4px solid #456;
  border-bottom: 4px solid #456;
}

.dashboard-loader:after {
  content: "";
  position: absolute;
  width: 8px;
  height: 75%;
  border-radius: 2px;
  background-color: #ecb200;
  right: 8px;
  bottom: 6px;
  animation: chart-anim 2.5s linear infinite;
}

.dashboard-loader > .bars,
.dashboard-loader > .bars:before,
.dashboard-loader > .bars:after {
  content: "";
  position: absolute;
  bottom: 6px;
  width: 8px;
  height: 75%;
  border-radius: 2px;
  background-color: #1e812b;
  left: 6px;
}

.dashboard-loader > .bars:before,
.dashboard-loader > .bars:after {
  bottom: 0;
  background-color: #1862a9;
  left: 16px;
  height: 80%;
}

.dashboard-loader > .bars:after {
  background-color: #a82c22;
  left: 32px;
  height: 110%;
}

.dashboard-loader > .bars {
  animation: chart-anim 1.5s linear infinite;
}

.dashboard-loader > .bars:before {
  animation: chart-anim 2s linear infinite;
}

.dashboard-loader > .bars:after {
  animation: chart-anim 3s linear infinite;
}

.dashboard-loader > .text {
  position: absolute;
  white-space: nowrap;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  animation: text-anim 1s ease infinite;
  opacity: 1;
}
@keyframes chart-anim {
  50% {
    height: 25%;
  }
}
@keyframes text-anim {
  50% {
    opacity: 0.5;
  }
}
</style>