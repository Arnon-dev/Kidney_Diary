<template>
  <v-container>
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" md="12" sm="12">
        <a-tabs>
          <a-tab-pane v-for="item in OrderName" :key="item.key" :tab="item.name">
            <v-row no-gutters>
              <v-col cols="12" md="12" sm="12">
                <ManageUserTable />
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
    ManageUserTable: () => import('@/components/ManageSuperAdmin/ManageSuperUserTable')
  },
  data () {
    return {
      OrderName: [
        { key: 0, name: 'superadmin' }
        // { key: 1, name: 'superadmin' }
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
