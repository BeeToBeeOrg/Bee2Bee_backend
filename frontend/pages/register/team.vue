<template>
  <div class="container">
    <Sidebar />
    <Company />
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar_login.vue'
import Company from '@/components/company-form.vue'

export default {
  components: {
    Sidebar,
    Company
  }
}
</script>

<style>

</style>