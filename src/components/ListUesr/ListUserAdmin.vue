<template>
  <v-container>
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" md="12" sm="12">
        <a-tabs>
          <a-tab-pane v-for="item in OrderName" :key="item.key" :tab="item.name">
            <v-row no-gutters>
              <v-col cols="12" md="12" sm="12">
                <ListUserTable />
              </v-col>
            </v-row>
          </a-tab-pane>
        </a-tabs>
      </v-col>
    </v-row>
    <!-- <v-card elevation="0">
        <v-card-title>
            <span class="header">{{ $t('textshop.sellerDetail.name') }}</span>
            <v-spacer></v-spacer>
        </v-card-title>
        <SellerTable v-if="sellerDetail !== []" />
    </v-card> -->
  </v-container>
</template>

<script>
export default {
  components: {
    ListUserTable: () => import('@/components/ListUesr/ListUserAdminTable')
  },
  data () {
    return {
      OrderName: [
        { key: 0, name: 'ทั้งหมด' }
        // { key: 1, name: 'พร้อมขาย' },
        // { key: 2, name: 'หมด' }
      ]
    }
  },
  // computed: {
  //   sellerDetail () {
  //     return this.$store.state.Seller.stateSellerDetail
  //   },
  // },
  created () {
    this.$EventBus.$emit('pathNavSuperAdmin')
    // this.$store.dispatch('ActionsGetSellerDetail')
  }
}
</script>

<style>

</style>
