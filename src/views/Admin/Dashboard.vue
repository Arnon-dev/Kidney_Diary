<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>

<script>
export default {
  created () {
    this.$EventBus.$emit('pathNav')
  }
}
</script>

<style>

</style>