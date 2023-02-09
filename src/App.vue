<script>
import heading from "./components/heading.vue";
import footerinfo from "./components/footer.vue";
import headerinfo from "./components/header.vue";
export default {
  components: { headerinfo, heading, footerinfo },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="bg-neutral-900 justify-center">
    <headerinfo></headerinfo>
    <heading></heading>
    <footerinfo></footerinfo>
  </div>
</template>

<style scoped></style>
