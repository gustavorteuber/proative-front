<script>
import heading from "./components/heading.vue";
import footerinfo from "./components/footer.vue";
import cardsinfo from "./components/cards.vue";
import headerinfo from "./components/header.vue";
export default {
  components: { headerinfo, heading, footerinfo, cardsinfo },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="bg-neutral-900 justify-center">
    <headerinfo></headerinfo>
    <heading></heading>
    <cardsinfo></cardsinfo>
    <footerinfo></footerinfo>
  </div>
</template>

<style scoped></style>
