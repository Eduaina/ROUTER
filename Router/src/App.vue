<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
 <nav class="navbar">
  <h3 class="title">BB Movies</h3>
  <div class="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/MovieDetail">MovieDetail</RouterLink>
  </div>
 </nav>

 
  <RouterView></RouterView>
</template>

<style scoped>
.navbar {
  display: flex;
  padding: 18px;
  margin: 25px;
  justify-content: space-between;
  top: 0;
  position: sticky;
  margin-top: 10px;
  width: 90%;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 10px 3px #6EC1E4;
  background: white;

}

.title {
  display: block;
  margin: 0 auto 2rem;
}

.nav {
  font-size: 18px;
  text-align: right;
}

nav a {
  display: inline-block;
  padding: 0 20px;
  border-left: 1px solid var(--color-border);
}

nav a.router-link-exact-active:hover {
  background-color: #4055b28b;
  transition: 0.2secs;
}

@media (min-width: 1024px) {
  nav {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .title {
    margin: 0 2rem 0 0;
  }

  nav .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
