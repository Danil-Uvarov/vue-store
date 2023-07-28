import { createStore } from 'vuex';
import axios from 'axios'
export default createStore({
   state: {
      products: [],
      cart: [],
      currentProduct: [],
      valueInput: {
         name: '',
         street: '',
         city: '',
         state: '',
         country: '',
      },
   },
   mutations: {
      setProducts(state, newProducts) {
         state.products = newProducts;
      },
      setCurrentProduct(state, productID) { state.currentProduct = productID },
      PUSH_TO_CART: (state, product) => {
         for (let i = 0; i < state.cart.length; i++) {
            if (state.cart[i].id === product.id) {
               state.cart[i].quantity++;
               return;
            }
         }
         const newProduct = { ...product };
         newProduct.quantity = 1;

         state.cart.push(newProduct
         );
      },
      PUSCH_TITLE(state, item) {
         state.valueInput.name = item.name;
         state.valueInput.street = item.street;
         state.valueInput.city = item.city;
         state.valueInput.state = item.state;
         state.valueInput.country = item.country;
      },
      delete_from_item(state, index) {
         state.cart.splice(index, 1)
      }
   },
   actions: {
      async getProducts({ commit }) {

         const response = await axios(
            {
               url: 'https://fakestoreapi.com/products',
               method: 'GET'
            });
         commit('setProducts', response.data);
      },

      async getProductById({ commit }, id) {
         const response = await axios(
            {
               url: `https://fakestoreapi.com/products/${id}`,
               method: 'GET'
            });
         commit('setCurrentProduct', response.data)
      },
   },
   getters: {
      products(state) {
         return state.products;
      },
      cart(state) {
         return state.cart;
      },
      productById(state) {
         return state.currentProduct;
      },
      valueInput(state) {
         return state.valueInput;
      },
   },
}
);
