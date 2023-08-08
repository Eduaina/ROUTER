<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
 <nav class="navbar">
  <div class="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/MovieDetail">MovieDetail</RouterLink>
  </div>
 </nav>

 
  <RouterView></RouterView>
</template>

<style scoped>

</style>
