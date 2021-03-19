<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" md="12" sm="12">
        <h1>รายชื่อ superadmin</h1>
      </v-col>
      <v-col cols="8" md="8" sm="12" xs="12">
        <a-input style="width: 35%" v-model="search" placeholder="ค้นหา superadmin">
          <a-icon slot="suffix" type="search" />
        </a-input>
      </v-col>
      <v-col cols="4" md="4" sm="12" xs="12">
        <v-row no-gutters justify="end">
          <a-button @click="CreateUser()" style="color: green; border-color: green;"><a-icon type="plus"></a-icon>เพิ่ม superadmin</a-button>
        </v-row>
      </v-col>
      <v-col cols="12" md="12" sm="12">
        <v-card>
          <v-data-table
           :headers="headers"
           :items="itemsSuperAdmin"
           :search="search"
           @page-count="pageCount = $event"
           :page.sync="page"
           :items-per-page="itemsPerPage"
           :loading="loadingData"
           loading-text="กำลังโหลดข้อมูลแอดมิน"
           hide-default-footer
           no-data-text="ไม่มีข้อมูลแอดมิน"
           no-results-text="ไม่ค้นพบข้อมูลแอดมิน"
          >
            <template v-slot:[`item.fullname`]="{ item }">
              <v-row no-gutters justify="center">
                <span>{{ item.firstName }} {{ item.lastName }}</span>
              </v-row>
            </template>
            <template v-slot:[`item.active`]="{ item }">
              <v-row no-gutters justify="center">
                <v-switch v-model="item.activeFlag" dense  @change="ChangeStatus(item)"></v-switch>
              </v-row>
            </template>
          </v-data-table>
        </v-card>
        <div class="text-center pt-2 pb-3">
          <v-pagination  light v-model="page" :total-visible="7" :length="pageCount"></v-pagination>
        </div>
      </v-col>
    </v-row>
    <ModalManageUser/>
  </div>
</template>

<script>
export default {
  components: {
    ModalManageUser: () => import('@/components/ManageSuperAdmin/ModalManageSuperUser')
  },
  data () {
    return {
      search: '',
      loadingData: true,
      pageCount: 5,
      page: 1,
      itemsPerPage: 10,
      headers: [
        {
          text: 'ลำดับ',
          align: 'start',
          sortable: true,
          value: 'orderNumber',
        },
        { text: 'email', value: 'email', align: 'center', sortable: true },
        { text: 'ชื่อ - นามสกุล', value: 'fullname', align: 'center', sortable: true },
        { text: 'ตำแหน่ง', value: 'position', align: 'center', sortable: true },
        { text: 'สถานะ', value: 'active', align: 'center'}
      ],
      itemsSuperAdmin: [],
    }
  },
  created () {
    this.$EventBus.$emit('pathNavSuperAdmin')
    this.$EventBus.$on('GetAllSuperAdmin', this.GetAllSuperAdmin)
    this.GetAllSuperAdmin()
  },
  methods: {
    async CreateUser () {
      await this.$store.commit('mutationModalManageUSer')
    },
    async GetAllSuperAdmin () {
      await this.$store.dispatch('actionsGetAllUser')
      var response = await this.$store.state.stateGetAllUser
      // console.log('respose', response)
      if (response.response_status === 'SUCCESS') {
        var data = response.data.filter(item => item.type === 'SUPERADMIN')
        this.loadingData = false
        // console.log('data clean', data)
        this.itemsSuperAdmin = data
        for (let i in this.itemsSuperAdmin) {
          this.itemsSuperAdmin[i].orderNumber = parseInt(i) + 1
        }
      }
    },
    async ChangeStatus (val) {
      this.$swal.fire({
        title: 'คุณต้องการที่จะเปลี่ยนสิทธิ์ผู้ใช้คนนี้หรือไม่',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ต้องการ',
        cancelButtonText: 'ไม่ต้องการ'
      }).then(async(result) => {
        if (result.isConfirmed) {
          var data = {
            id: val.id,
            email: val.email,
            firstName: val.firstName,
            lastName: val.lastName,
            position: val.position,
            image: val.image,
            type: val.type,
            activeFlag: val.activeFlag === true ? 1 : 0,
            hospitalId: val.hospitalId
          }
          // console.log('data before update ===>', data)
          await this.$store.dispatch('actionsUpdateAdmin', data)
          var response = await this.$store.state.stateUpdateAdmin
          // console.log('response after update ====>', response)
          if (response.response_status === 'SUCCESS') {
            await this.GetAllSuperAdmin()
            this.$swal.fire({ icon: 'success', title: 'เปลี่ยนสิทธิ์สำเร็จ', showConfirmButton: false, timer: 1500 })
          } else {
            await this.GetAllSuperAdmin()
            this.$swal.fire({ icon: 'error', title: 'เปลี่ยนสิทธิ์ไม่สำเร็จ', showConfirmButton: false, timer: 1500 })
          }
        } else {
          await this.GetAllSuperAdmin()
        }
      })
    }
  }
}
</script>

<style>

</style>