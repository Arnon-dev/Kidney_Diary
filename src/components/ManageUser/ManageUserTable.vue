<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" md="12" sm="12">
        <h1>รายชื่อผู้ใช้งาน</h1>
      </v-col>
      <v-col cols="12" md="12" sm="12" class="pb-5">
        <a-input style="width: 35%" v-model="search" placeholder="Search Patient">
          <a-icon slot="suffix" type="search" />
        </a-input>
      </v-col>
      <v-col cols="12" md="12" sm="12">
        <v-card>
          <v-data-table
           :headers="headers"
           :items="desserts"
           :search="search"
           @page-count="pageCount = $event"
           :page.sync="page"
           :items-per-page="itemsPerPage"
           hide-default-footer
           no-data-text="No Patient data"
          >
            <template v-slot:[`item.action`]="{ item }">
              <v-icon
               medium
               class="ml-5" 
               @click="ManageUser(item)"
              >
                mdi-card-account-details-outline
              </v-icon>
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
    ModalManageUser: () => import('@/components/ManageUser/ModalManageUser')
  },
  data () {
    return {
      search: '',
      pageCount: 5,
      page: 1,
      itemsPerPage: 10,
      headers: [
        {
          text: 'ลำดับ',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'ชื่อ', value: 'calories', align: 'center' },
        { text: 'นามสกุล', value: 'fat', align: 'center' },
        { text: 'ตำแหน่ง', value: 'carbs', align: 'center' },
        { text: 'โรงพยาบาล', value: 'protein', align: 'center' },
        { text: 'สถานะ', value: 'iron', align: 'center' },
        { text: 'ใช้งาน', value: 'active', align: 'center'},
        { text: 'เพิ่มเติม', value: 'action'}
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    }
  },
  created () {
    this.$EventBus.$emit('pathNavSuperAdmin')
  },
  methods: {
    async ManageUser () {
      await this.$store.commit('mutationModalManageUSer')
    }
  }
}
</script>

<style>

</style>