<template>
  <div class="content_global">
    <div class="Content">
      <div class="content__wrapper">
        <div class="wrapper-block__input">
          <div class="content-block-input">
            <p class="string__Search">Search item</p>

            <input class="input-header" type="text" placeholder="Apple Watch, Samsung S21, Macbook Pro, ...">
          </div>
        </div>
        <div class="block__item">
          <div class="item" v-for="product in products" :key="product.id">
            <router-link :to="{ name: 'product_card', params: { id: product.id } }">
              <img :src="product.image" alt="" class=" img_cart">
            </router-link>
            <div class="content__item">
              <div class="item__name">{{ product.title }}</div>
              <div class="item__model">{{ product.category }}</div>
              <div class="item-bloc-price-basket">
                <div class="item-price">$ {{ product.price }}</div>
                <img src="../../public/img/1235.png" alt="" class="item-img-cart" @click="pushAddCart(product)">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'Content',
  components: {
  
  },
  mounted() {
    this.$store.dispatch('getProducts')
    console.log(this.item);
  },
  methods: {
    pushAddCart(item) {
      this.$store.commit('PUSH_TO_CART', item)

    },
    item(item) {
      this.$store.commit('delete_from_item', item)

    },
  },
  computed: {
    products() {
      return this.$store.getters['products']
    }
  },

};


</script>

<style>
@import '../assets/style/item.css';
</style>