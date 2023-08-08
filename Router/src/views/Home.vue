<script setup>
import { ref } from 'vue';

const search =ref('')
const post = ref ([])

const getPosts= () =>{
if(search.value !='')
fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(this.search)}&apikey=315c77f4`)
.then(response =>response.json())
.then(data => post.value = data)
}
</script>

<template>

  <div>
   <h1>Movies</h1>
  <div class="searchbox">
    <input v-model="search" type="search" name="" id="">
    <button @click="getPosts">search</button>
  </div>

  <div class="mymovies">
    <ul class="create" v-if="post.length">
      <li v-for="movie in post" :key="movie.imdbID">
        <img v-if="movie.Poster  !=='N/A'" src="movie.Poster" alt="Movie Poster">

        <div class="moviedetails">
          <h3>{{ movie.Tile }}</h3>
          <p>Year:n{{ movie.Year }}</p> 
        </div>

      </li>
    </ul>
        <p v-else>Not Available</p>
  </div>
</template>
