<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" md="12" sm="12">
        <h1>รายชื่อคนไข้</h1>
      </v-col>
      <v-col cols="12" md="12" sm="12" class="pb-5">
        <a-input style="width: 35%" v-model="search" placeholder="ค้นหาข้อมูลคนไข้">
          <a-icon slot="suffix" type="search" />
        </a-input>
      </v-col>
      <v-col cols="12" md="12" sm="12">
        <v-card>
          <v-data-table
           :headers="headers"
           :items="DataPatient"
           :search="search"
           @page-count="pageCount = $event"
           :page.sync="page"
           :items-per-page="itemsPerPage"
           hide-default-footer
           no-data-text="ไม่มีข้อมูลคนไข้"
           no-results-text="ไม่ค้นพบข้อมูลคนไข้"
          >
            <template v-slot:[`item.fullname`]="{ item }">
              <span>{{ item.firstName }} {{ item.lastName }}</span>
            </template>
            <template v-slot:[`item.action`]="{ item }">
              <v-icon
               medium
               class="ml-5" 
               @click="detailUser(item.id)"
              >
                mdi-clipboard-search-outline
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
        <div class="text-center pt-2 pb-3">
          <v-pagination  light v-model="page" :total-visible="7" :length="pageCount"></v-pagination>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Decode, Encode } from '@/services'
export default {
  data () {
    return {
      search: '',
      pageCount: 5,
      page: 1,
      itemsPerPage: 10,
      hospitalID: null,
      kidneyData: [],
      headers: [
        {
          text: 'ลำดับ',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        { text: 'ชื่อ - นามสกุล', value: 'fullname', align: 'center', sortable: true },
        { text: 'เพศ', value: 'gender', align: 'center', sortable: true },
        { text: 'อายุ', value: 'age', align: 'center', sortable: true },
        { text: 'โรงพยาบาล', value: 'hospitalName', align: 'center', sortable: true },
        { text: 'รายละเอียด', value: 'action'}
      ],
      DataPatient: [],
      DataAll: []
    }
  },
  created () {
    this.$EventBus.$emit('pathNav')
    if (Object.prototype.hasOwnProperty.call(localStorage, 'kidnryData')) {
      this.kidneyData = JSON.parse(Decode.decode(localStorage.getItem('kidnryData')))
      this.hospitalID = this.kidneyData.hospitalId
      this.getUserByHopitalID()
    } else {
      this.kidneyData = []
    }
  },
  methods: {
    detailUser (val) {
      // console.log('Data id Patient=====>',val)
      localStorage.setItem('PatientID', Encode.encode(val))
      localStorage.setItem('dataPatient',  Encode.encode(this.DataAll))
      this.$router.push('detailpatient').catch(() => {})
    },
    async getUserByHopitalID () {
      var data = {
        hospitalID: this.hospitalID
      }
      await this.$store.dispatch('actionsGetAllUserByHospitalID', data)
      var response = await this.$store.state.stateGetAllUserByHospital
      console.log('response Get All User =====>', response)
      if (response.response_status === 'SUCCESS') {
        this.DataAll = response.data
        // console.log('Data All', this.DataAll)
        if (response.data !== undefined) {
          var datauser = response.data.users
          this.DataPatient = datauser.filter(element => {
            element.hospitalName = response.data.hospital.name
            element.hospitalCode = response.data.hospital.code
            return element
          });
          // this.DataPatient.hospitalName = response.data.hospital.name
          // console.log(this.DataPatient)
        } else {
          this.DataPatient = []
        }
      } else {
        this.$swal.fire({
          icon: 'error',
          title: `${response.message}`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  }
}
</script>

<style>

</style>