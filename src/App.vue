<script>

import axios from 'axios';

export default {
  name: 'App',
  data(){
    return{
      base_api_url: 'http://127.0.0.1:8000',
      photos_endpoint: '/api/photos',
      photos: null
    }
  },
  mounted() {
    const url = this.base_api_url + this.photos_endpoint
    console.log(url);

    axios
    .get(url)
    .then(resp =>{

      console.log(resp);

      this.photos = resp.data.results.data
      console.log(this.photos);

    })
    .catch(err => {

      console.error(err);

    })
  },
}
</script>

<template>

  <h1>Photos</h1>

  <section class="photos" v-if="photos">
    
    <div class='container'>
      <div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4'>
        <div class='col' v-for='photo in photos'>

          <div class='card'>

            <div v-if="photo.upload_image">
              <img class="card-img-top" :src="photo.upload_image.startsWith('https://') ? photo.upload_image : base_api_url + '/storage/' + photo.upload_image" alt="">
            </div>

            <div v-else>
              <img src="https://picsum.photos/400/200" alt="">
            </div>

            <div class='card-body'>
              
              {{ photo.title }}

            </div> 
            
          </div>
          
        </div>
      </div>
    </div>

  </section>

</template>

<style>

</style>
