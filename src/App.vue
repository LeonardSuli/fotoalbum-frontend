<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      base_api_url: "http://127.0.0.1:8000",
      photos_endpoint: "/api/photos",
      photos: null,
      search_text: "",
    };
  },

  methods: {
    goTo(url) {
      console.log(url);
      this.callApi(url);
    },

    // When i click the button search
    search() {
      const url = this.base_api_url + this.photos_endpoint + `?search=${this.search_text}`;

      console.log(url);

      this.callApi(url);
    },

    //
    callApi(url) {
      axios
        .get(url)
        .then((resp) => {
          console.log(resp);

          this.photos = resp.data.results;
          console.log(this.photos);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },

  mounted() {
    const url = this.base_api_url + this.photos_endpoint;

    console.log(url);

    this.callApi(url);
  },
};
</script>

<template>
  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container py-2">
      <h1 class="display-5 fw-bold">PhotoAlbum</h1>

      <p class="col-md-8 fs-4">See our amazing album</p>

      <form @submit.prevent="search()">

        <div class="input-group mb-3">

          <input type="search" class="form-control" placeholder="Search..." v-model="search_text"/>

          <button class="btn btn-outline-secondary" type="submit">
            Search
          </button>

        </div>

      </form>

    </div>
  </div>

  <section class="photos py-5" v-if="photos">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div class="col" v-for="photo in photos.data">

          <!-- Modal trigger button -->
          <a data-bs-toggle="modal" :data-bs-target="`#photo-${photo.id}`">

            <div class="card pointer">

              <div v-if="photo.upload_image">
                <img class="card-img-top" :src="photo.upload_image.startsWith('https://') ? photo.upload_image : base_api_url + '/storage/' + photo.upload_image" alt=""/>
              </div>

              <div v-else>
                <img width='100%' src="https://picsum.photos/400/200" alt="" />
              </div>

              <div class="card-body">
                {{ photo.title }}
              </div>

            </div>

          </a>

          <!-- Modal Body -->
          <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
          <div class="modal fade" :id="`photo-${photo.id}`" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
            role="dialog" :aria-labelledby="`modal-title-${photo.id}`" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
              <div class="modal-content">

                <div class="modal-header">

                  <h5 class="modal-title" :id="`modal-title-${photo.id}`">
                    {{ photo.title }}
                  </h5>

                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                </div>

                <div class="modal-body d-flex ">

                  <div class='col-8'>
                    <div v-if="photo.upload_image">
                      <img class="card-img-top" :src="photo.upload_image.startsWith('https://') ? photo.upload_image : base_api_url + '/storage/' + photo.upload_image" alt=""/>
                    </div>

                    <div v-else>
                      <img width='100%' src="https://picsum.photos/400/200" alt="" />
                    </div>
                  </div>

                  <div class='col-4 ps-3'>
                  
                    {{ photo.description }}
                    
                  </div>

                </div>

                <div class="modal-footer">

                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <nav aria-label="Page navigation" class="mt-4">
        <ul class="pagination">

          <li class="page-item" :class="{ disabled: !link.url, active: link.active }" v-for="link in photos.links">

            <button class="page-link" :href="link.url" type="button" @click="goTo(link.url)">
              <span v-html="link.label"></span>
            </button>
            
          </li>

        </ul>
      </nav>
      
    </div>
  </section>
</template>

<style></style>
