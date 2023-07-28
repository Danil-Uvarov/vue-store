<template>
   <div class="Product">
      <router-link :to="{ name: 'Content' }" style="text-decoration: none;">
         <button class="button_back">
            <p> &#60 Back </p>
         </button>
      </router-link>

      <div class="top_area">
         <div class="image-top_area">
            <div class="image-gallery">
               <img :src="productBy.image" alt="">
               <img :src="productBy.image" alt="">
               <img :src="productBy.image" alt="">
            </div>
            <img :src="productBy.image" alt="" class="main-image">
         </div>
         <div class="text-content">
            <div class="header_text-content">
               <h2 class="name_product">{{ productBy.title }}</h2>
               <h3 class="modules_product">{{ productBy.category }}</h3>
            </div>
            <div class="raring">
               <div class="star"><img src="../../public/img/Rating.png" alt=""></div>
               <div class="balls"> 5.5</div>
            </div>
            <div class="price_product">{{ productBy.price }}</div>
            <div class="short-description"> {{ productBy.description }}</div>
            <button class="button-add_to_bag" @click="pushAddCart(productBy)">
               <img src="../../public/img/159.png" alt="">
               <p>Add to Bag</p>
            </button>
         </div>
      </div>
      <div class="bottom-area">
         <div class="line-2"></div>
         <h3 class="bottom-header-description">Description</h3>
         <div class="bottom-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur
            distinctio
            aut magnam mollitia quam quasi, deserunt sapiente possimus maiores est. Eius aspernatur iste amet quo modi
            eaque sunt ipsa maiores quaerat eos mollitia repudiandae similique rem tenetur officia veritatis itaque,
            doloribus recusandae nemo aliquam. Beatae doloremque voluptatem sequi vel ut dicta tenetur non similique,
            delectus, quod velit ratione error quaerat harum esse. Quas distinctio earum ipsa inventore molestiae facilis
            omnis reiciendis placeat architecto iure. Beatae aliquam corrupti quaerat voluptas explicabo doloribus laborum,
            impedit voluptatem ullam tempora enim rem est eveniet nobis corporis cupiditate mollitia modi officiis
            accusamus tenetur tempore sapiente placeat quo. Libero debitis alias nesciunt. Tenetur eligendi, ipsum expedita
            iste ipsam cupiditate! Rem deleniti architecto repellat aspernatur iure?</div>
      </div>
   </div>
</template>
 
<script>


export default {
   name: 'product_card',
   mounted() {
      this.$store.dispatch('getProductById', this.$route.params.id);

   },
   components: {

   },
   methods: {
      pushAddCart(item) {
         this.$store.commit('PUSH_TO_CART', item)

      },
   },
   computed: {
      productBy() {
         return this.$store.getters['productById']
      },

   },





}
</script>
 
<style>
@import '../assets/style/product_card.css';
</style>