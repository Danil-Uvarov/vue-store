

<template>
  <div class="app">

    <component :is="layout">
      <router-view></router-view>
    </component>


  </div>
</template>
<script>
import checkoutLayout from './layouts/checkoutLayout.vue'
import defaultLayout from './layouts/defaultLayout.vue'
import paymentLayout from './layouts/paymentLayout.vue'
import addressLayout from './layouts/addressLayout.vue'
export default {

  name: 'App',
  components: {
    checkoutLayout,
    defaultLayout,
    paymentLayout,
    addressLayout,
  },
  computed: {
    layout() {
      const layiutName = this.$route.meta.layout || "defaultLayout";
      return layiutName;
    }
  }
};
</script>
<style>
.app {
  height: 100%;
  width: 100%;
}

@import './assets/style/bag.css';
</style>

