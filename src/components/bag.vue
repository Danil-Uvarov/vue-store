<template>
   <div class="bag">

      <div class="header__bag">Bag</div>

      <div class="wrapper__bag__img">


         <div class="bag__block__img " v-for="(item, index) in cart" :key="item.id">

            <router-link :to="{ name: 'product_card', params: { id: item.id } }">
               <img :src="item.image" alt="">
            </router-link>


            <div class="bottom__quantity">
               <button class="delite__bag" @click="delete_from_item(index)"><span class="span"></span></button>
               <div class="quantity">{{ item.quantity }}</div>
            </div>

         </div>

      </div>
      <div class="bag_total">Bag Total:{{ total }}</div>
      <router-link :to="{ name: 'checkout' }" v-if="$route.name === 'bag'">
         <img src="../../public/img/Button2.png" alt="" class="button_bag">
      </router-link>

      <router-link :to="{ name: 'bag' }" v-else >
         <img src="../../public/img/Button.png" alt="" class="button_bag">
      </router-link>
   </div>
</template>
 
<script>
export default {
   name: 'bag',
   props: {
      cart_item_data: {
         type: Object,
         default() {
            return {}
         }
      }
   },
   data() {
      return {};
   },
   components: {},
   computed: {
      cart() {
         return this.$store.getters['cart']
      },

      total() {
         if (!this.cart.length) {
            return 0
         }
         let result = [];

         for (let item of this.cart) {
            result.push(item.price * item.quantity);
         }
         let results = result.reduce((sum, el) => {
            return sum + el;
         });
         results = Math.round(results * 100) / 100;
         return results;

      },
   },
   mounted() {


   },
   methods: {
      delete_from_item(index) {
         this.$store.commit('delete_from_item', index)
      },
   },
}
</script>
 
<style >
@import '../assets/style/bag.css';
</style>