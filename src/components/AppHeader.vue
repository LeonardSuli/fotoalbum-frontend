<script>

import {state} from '../state.js';

import AppLogo from './AppLogo.vue';

export default{
    name: 'AppHeader',

    components:{
        AppLogo,
    },

     data() {
    return {

        state
   
    };
  },

  mounted() {
    const url = state.base_api_url + state.photos_endpoint;

    console.log(url);

    state.callApi(this.url);
  },
}
</script>


<template>

    <header>
      <div class="p-5  bg-light rounded-3">
        <div class="container py-2">

          <AppLogo></AppLogo>
        
          <p class="col-md-8 fs-4">See our amazing PhotoAlbum</p>

          <!-- Form -->
          <form @submit.prevent="state.search()">

            <div class="input-group mb-3">

              <input type="search" class="form-control" placeholder="Search..." v-model="state.search_text"/>

              <button class="btn btn-outline-secondary" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>

            </div>

          </form>

        </div>
      </div>
    </header>

</template>


<style scoped>

</style>