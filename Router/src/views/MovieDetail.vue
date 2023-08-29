<script>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';


export default {
  setup () {
    const post = ref({});
    const route = useRouter();
     
    onBeforeMount(() => {
      fetch(`http://www.omdbapi.com/?apikey=4fc450c6&i=${route.params.id}&plot=full`)
        .then(response => response.json())
        .then(data => {
          post.value = data;
        });
    });
    
    return {
      post
    }
  }
}

</script>

<template>
<div class="body"> 

  <div class="img">
    <img :src="movie.Poster" alt="Movie Poster" class="image"/>
  </div>

  <div class="about"> 
    <h2>{{movie.Title}}</h2>
    <p>{{ movie.Year }}</p>  
    <p>{{ movie.Plot }}</p>
  </div>
  
</div>
</template>

<!-- <style scoped>
.about {
  padding: 16px;

  h2 {
    color: #FFF;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
    background-color: black;
  }

  image {
    display: block;
    max-width: 200px;
    margin-bottom: 16px;
  }

  p {
    color: black;
    font-size: 18px;
    line-height: 1.4;
  }
}
</style> -->
