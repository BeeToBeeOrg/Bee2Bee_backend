<template>
  <div>
    <Navbar :auth="auth" />
    <div class="wrapper">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";

export default {
  name: "impressum",
  data() {
    return {
      auth: true
    };
  },
  components: {
    Navbar
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  p {
    font-weight: normal;
    font-size: 20px;
  }
}
</style>
