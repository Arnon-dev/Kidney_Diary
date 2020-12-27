<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' ,background: '#fff'}" >
      <v-row no-gutters>
        
      </v-row>
    </a-layout-header>
    <a-layout-sider width="230" :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, background: '#fff', marginTop:'70px' }">
      <a-menu
       style="width: 256px"
       :default-selected-keys="['1']"
       :default-open-keys="['sub1']"
       :mode="mode"
       :theme="theme"
       v-for="item in ListNavbar"
       :key="item.key"
      >
        <a-menu-item :key="item.key">
          <a-icon :type="item.icon" />{{item.name}}
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </a-layout>
</template>

<script>
export default {
  data () {
    return {
      ListNavbar: [
        { key: 'sub1',
          icon: 'bank',
          name: 'บริษัทจัดซื้อจัดจ้าง',
          path: ''
        },
        { key: 'sub2',
          icon: 'shop',
          name: 'ร้านค้าของฉัน',
          path: ''
        },
      ],
    }
  }
}
</script>

<style>

</style>