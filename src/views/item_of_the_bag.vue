<template>
   <div class="item_of_the_bag">

      <h2 class="header_the_bag">Check your Bag Items</h2>
      <div class="wrapper_item_bag">
         <div class="item_bag" v-for="(item) in cart" :key="item.id">

            <img :src="item.image" alt="" class="img_item">
            <div class="content-area">
               <h3 class="name">{{ item.title }}</h3>
               <p class="model">{{ item.category }}</p>
               <p class="description">{{ item.description }}</p>
               <div class="wrapper-rating">
                  <img src="../../public/img/Rating.png" alt="" class="star">
                  <div class="balls">5/5</div>
               </div>
               <div class="wrapper_price_quantity">
                  <div class="price"> $ {{ item.price }} x {{ item.quantity }}</div>
                  <div class="block_quantity">
                     <span class="span-minus" @click="delete_from_item(index)"></span>
                     <div class="quantity">{{ item.quantity }}</div>
                     <span class="span-plus" @click="pushAddCart(item)"></span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
 
<script>
export default {
   name: 'item_of_the_bag',
   data() {
      return {
      };
   },

   mounted() {


   },
   methods: {
      pushAddCart(item) {
         this.$store.commit('PUSH_TO_CART', item)

      },
      delete_from_item(index) {
         this.$store.commit('delete_from_item', index)
      },
   },
   computed: {
      cart() {
         return this.$store.getters['cart']
      },

   },
}
</script>

 
<style >
@import '../assets/style/item_of_the_bag.css';
</style>