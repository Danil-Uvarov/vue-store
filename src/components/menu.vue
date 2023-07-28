<template>
   <div class="menu">

      <div class="wrapper__menu">
         <router-link :to="{ name: 'Content' }" >
            <img src="../../public/img/Logo.png" alt="" class="logo">
         </router-link>
         <div class="menu__burger">
            <span class="menu__burger__span"></span>
         </div>
         <img src="../../public/img/Nav-Link@2x.png" alt="" class="nav-link">
         <img src="../../public/img/Vector.png" alt="" class="menu__bag">
      </div>

      <img src="../../public/img/Nav-Link.png" alt="" class="menu-nav__lik">

   </div>
</template>
 
<script>


export default {
   name: 'menu',
   components: {

   }
}
</script>
 
<style>
@import "../assets/style/menu.css";
</style>