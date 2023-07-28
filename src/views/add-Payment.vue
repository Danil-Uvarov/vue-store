<template>
   <div class="add-payment">
      <div class="wrapper-add-payment">
         <div class="payment-methods">
            <h2 class="header-select">select a card</h2>
            <div class="block-payment-method">
               <img src="../../public/img/564as.png" alt="">
               <span class="payment-method">masterCard-eding in 4242</span>
            </div>
            <div class="block-payment-method">
               <img src="../../public/img/564as.png" alt="">
               <span class="payment-method">VISA debit ending in 2894</span>
            </div>
         </div>
         <div class="from">
            <h2 class="header-from">add a new card</h2>
            <div class="name">
               <span class="label">Cardholder Name</span>
               <input type="text" placeholder="John Makert" class="name-input">
            </div>
            <div class="card-number">
               <span class="label">Card Number</span>
               <input type="text" placeholder="5126-5987-2214-7621" class="card-number-input">
            </div>
            <div class="date-CVC">
               <div class="block-input-field">
                  <span class="label">Expiry Date</span>
                  <input type="date" class="input-field">
               </div>
               <div class="block-input-field">
                  <span class="label">CVC</span>
                  <input type="password" maxlength="3" class="input-field">
               </div>
            </div>
            <div class="checkbox">
               <input type="checkbox" class="checkbox-input">
               <span class="label-checkbox">Save this as your default paument method</span>
            </div>

            <button class="button-add_payment">
               <img src="../../public/img/Vector45623.png" alt="">
               <span>Add Payment Method</span>
            </button>
            <div class="block-information">
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
   </div>
</template>

<script>


export default {
   name: 'add-Payment',
};
</script>

<style>
@import '../assets/style/add-Payment.css';
</style>