<template>
   <section class="defaultLayout">
      <menus></menus>
      <slot>
      </slot>
      <div class="line_default"></div>
      <bag></bag>
   </section>
</template >

<script>
import bag from '../components/bag.vue'
import menus from '../components/menu.vue'
export default {
   name: "defaultLayout",
   components: {
      bag,
      menus,
   },
}
</script>

<style>
.defaultLayout {
   display: flex;
   height: 100vh;
   width: 100%;
}

.line_default {
   margin-top: 5%;
   margin-bottom: 5%;
   width: 4px;
   display: flex;
   text-align: center;
   margin-left: 36px;
   margin-right: 36px;
   background-color: #1A1F16;
}
</style>
