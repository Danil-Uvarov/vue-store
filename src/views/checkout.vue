

<template>
   <div class="checkout">
      <div class="content-frame">
         <div class="block-shiping-address">
            <h2 class="header-shipping-address">shipping address</h2>
            <div class="shipping-content">
               <div class="shipping-address">
                  <p>{{ inputPush.name }}</p>
                  <p>{{ inputPush.street }}</p>
                  <p>{{ inputPush.city }}</p>
                  <p>{{ inputPush.state }}</p>
               </div>
               <router-link :to="{ name: 'add-Address' }">
                  <button class="button-change"> Change</button>
               </router-link>
            </div>
         </div>
         <div class="block-payment">
            <h2 class="heder-payment">payment method</h2>
            <div class="content-payment">
               <div class="curent-adres">
                  <div class="cart">
                     <img src="../../public/img/2222.png" alt="">
                     <div class="mastercard-eding">Mastercard <span>ending in 1252</span></div>
                  </div>
                  <div class="gift-card">
                     <img src="../../public/img/5465165132.png" alt="">
                     <div class="balanse">$53.21 <span>gift card balance</span>
                     </div>
                  </div>
                  <div class="biljjing-address">
                     <img src="../../public/img/Checkbox-Input.png" alt="">
                     <p>Biljjing address same as Shipping Address</p>
                  </div>
               </div>
               <router-link :to="{ name: 'add-Payment' }">
                  <button class="button-change">Change</button>
               </router-link>
            </div>

         </div>
         <div class="block-review-bag">
            <h2 class="header-review-bag">
               review you bag
            </h2>
            <div class="wrapper-bag-item">
               <div class="review-bag-content" v-for="(item) in cart" :key="item.id">
                  <img :src="item.image" alt="" class="img-product">
                  <div class="content-area">
                     <h3 class="name">{{ item.title }}</h3>
                     <p class="model">{{ item.model }}</p>
                     <p class="description">{{ item.description }}</p>
                     <div class="wrapper-rating">
                        <img src="../../public/img/Rating.png" alt="" class="star">
                        <div class="balls">5/5</div>
                     </div>
                     <div class="wrapper_price_quantity">
                        <div class="price"> ${{ item.price }} x {{ item.quantity }} </div>
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
      </div>
      <div class="right-block">
         <div class="order-summary">
            <h3 class="header-summary">Order Summary</h3>
            <div class="order-summary-items">

               <p>items:</p>
               <p>{{ total }}</p>
            </div>
            <div class="order-summary-items">
               <p>Sipping:</p>
               <p>$6.99</p>
            </div>
            <div class="order-summary-items">
               <p>Estimated GST:</p>
               <p>$760.41</p>
            </div>
            <div class="order-summary-items">
               <p>Gift Card:</p>
               <p>$0.00</p>
            </div>
            <div class="line-summary"></div>
            <div class="order-total">
               <p>Order Total:</p>
               <p>{{ total }}</p>
            </div>
            <div class="line-summary"></div>
            <button class="button-order">Place your order</button>
         </div>
         <router-link :to="{ name: 'bag' }">
            <button class="button-back-checkout">&#60 Back</button>
         </router-link>
      </div>
   </div>
</template>


<script>

export default {
   name: 'checkout',
   components: {
   },
   maunted: {
   },
   computed: {
      inputPush() {
         return this.$store.getters['valueInput']
      },
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
   methods: {
      pushAddCart(item) {
         this.$store.commit('PUSH_TO_CART', item)

      },
      delete_from_item(index) {
         this.$store.commit('delete_from_item', index)
      },
   },
}
</script>
<style>
@import '../assets/style/checkout.css';
</style>
 