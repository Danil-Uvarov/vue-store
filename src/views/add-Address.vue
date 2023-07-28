<template>
   <div class="add-Address">
      <div class="wrapper-address">
         <div class="name-block">
            <span class="name-label">Shipping Name</span>
            <input type="text" placeholder="John Maker" class="name-input" v-model="title.name">
         </div>

         <div class="name-block">
            <span class="name-label">Street Name</span>
            <input type="text" placeholder="123 plae Frond Stret" class="name-input" v-model="title.street">
         </div>
         <div class="city-block">
            <span class="city-label">City</span>
            <input type="text" placeholder="Vermont" class="city-input" v-model="title.city">
         </div>
         <div class="state-block">
            <span class="state-label">State / Province</span>
            <input type="text" placeholder="California" class="state-input" v-model="title.state">
         </div>
         <div class="country-block">
            <span class="contry-label">Country</span>
            <input type="text" placeholder="United States of America" class="contry-input" v-model="title.country">
         </div>
         <div class="save">
            <input type="checkbox">
            <span class="checkbox-span">Save this as your default address</span>
         </div>
         <router-link :to="{ name: 'checkout' }">
            <button class="button-addAddress" @click="pushTitle">
               Add Address
            </button>
         </router-link>
         <div class="information">
            <router-link :to="{ name: 'checkout' }">
               <bitton class="button-back-payment">Back</bitton>
            </router-link>
            <div class="info">
               <img src="../../public/img/Icon5656.png" alt="">
               <span class="secure_connection">Secure Connection</span>
            </div>
         </div>

      </div>
   </div>
</template>

<script>

export default {

   name: 'add-Address',

   data() {
      return {
         title: {
            name: '',
            street: '',
            city: '',
            state: '',
            country: '',
         }
      };
   },
   methods: {
      pushTitle() {
         this.$store.commit('PUSCH_TITLE', this.title);
      }
   },
}
</script>
<style>
@import '../assets/style/add-Address.css';
</style>