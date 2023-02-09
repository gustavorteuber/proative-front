<script>
import heading from "./components/heading.vue";
import footerinfo from "./components/footer.vue";
import cardsinfo from "./components/cards.vue";
import headerinfo from "./components/header.vue";
import Login from "./components/login/Login.vue";
export default {
  components: { headerinfo, heading, footerinfo, cardsinfo, Login },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="bg-neutral-900 justify-center">
    <Login />
  </div>
</template>

<style scoped></style>
