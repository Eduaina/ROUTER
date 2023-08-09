<script setup>
import { ref } from 'vue'

const search = ref('')
const post = ref([])

const getPosts = () => {
  if (search.value !== '') {
    fetch(`http://www.omdbapi.com/?apikey=4fc450c6&s=${search.value}`)
      .then(response => response.json())
      .then(data => post.value = data.Search)
  }
}
</script>


<template>
  <div class="body">
    <div class="text">
       <h4>Notice!</h4>
       <p>BB Movies.com is definitely going to have ads. The goal is to make a living and pay our dedicated staff afterall. We as a team however promise to make sure these revenue ads dont become irritating enough to turn into a full blown meance. Our customers are afterall as important as our checks.
       </p>
    </div>

    <h4 class="cue">Search for your favorite movies here</h4>
  
    <div class="searchbox">      
        <input v-model="search" type="search" name="Search Here" id="search">
        <button @click="getPosts" id="button">search</button>
    </div>

    <div class="movies">
      <ul v-if="post.length">
        <li v-for="movie in post" :key="movie.imdbID">
          <img v-if="movie.Poster !== 'N/A'" :src="movie.Poster" alt="Movie Poster">

          <div class="details">
            <h3>{{ movie.Title }}</h3>
            <p>Year: {{ movie.Year }}</p>
            <p>Plot: {{ movie.Plot }}</p>
          </div>

        </li>
      </ul>
    </div>
</div>
</template>

<style>
*{
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.body{
  margin: 20px;
  font-size: 18px;
  margin-top: 60px;
  width: 90%;
  margin-top: 90px;  
  background: rgb(252, 246, 246);
  margin: 0 auto;
  margin-left: 40px;
}

.text {
  background-color: #6ec1e458;
  padding: 25px;
  color: #4054B2;
}

.text p {
  word-spacing: 12px;
  line-height: 1.5;
  text-indent: 30px;
}

.cue {
  margin-top: 90px;
}

.searchbox {
  padding: 1px;
  background-color:;
}

#search {
  width: 100%;
}

button {
  font-size: 16px;
  text-indent: 4px;
}

button:hover {
  background-color: #54595fa7;
}

.movies {
  background-color: white;
    overflow: hidden;
    margin: 30px;
    display: flex;
    align-items: cover;
    justify-content: space-between;


}

.details {

}













ul{
  list-style-type: none;

}
.searchbox{
  width: 80%;
  height: 35px;
  color: black;
  display: flex;
  margin: 0 auto;

}
button{
  height: 35px;
  border-radius: 8px;
}
</style>