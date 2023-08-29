<script>
import { ref } from 'vue'

export default {
  setup () {
   const search = ref('')
   const post = ref([])

   const getPosts = () => {
     if (search.value !== '') {
       fetch(`http://www.omdbapi.com/?apikey=4fc450c6&s=${search.value}`)
      .then(response => response.json())
      .then(data => post.value = data.Search) (search.value = "") 
  } 
}
  
return {
      search,
      post,
      getPosts
    }

  }
}
</script>


<template>
  <div class="body">
    <div class="text">
      <h4>Notice!</h4>
      <p>BB Movies.com is definitely going to have ads. The goal is to make a living and pay our dedicated staff afterall. We as a team however promise to make sure these revenue ads dont become irritating enough to turn into a full blown meance. Our customers are afterall as important as our checks.</p>
    </div>

    <h4 class="cue">Search for your favorite movies here</h4>
  
    <div class="searchbox">      
     <input v-model="search" type="text" placeholder="Search Here" name="Search Here" id="search">
     <button @click="getPosts" id="button">search</button>
    </div>

    <div class="movies">
      <ul v-if="post.length">
        <li v-for="movie in post" :key="movie.imdbID" class="result">
          <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
            <img v-if="movie.Poster !== 'N/A'" :src="movie.Poster" alt="Movie Poster">

            <div class="details">
             <h3>{{ movie.Title }}</h3>
             <p>Year: {{ movie.Year }}</p>
             <p>Plot: {{ movie.Plot }}</p>
           </div>
         </router-link>
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
  width: 90%;
  margin: 0 auto;
}

.result {
  background-color: #f0f0f0;
  border: 1px solid #dddddd;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


img {
  width: ;
  height: ;
  object-fit: ;
  


}
.result img {
  width: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}


.details {
    
}


.details h3 {
  margin: 0;
  font-size: 1.2rem;
}

.details p {
  font-size: 12px;
  margin-top: 10px;
  color: black;
  
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