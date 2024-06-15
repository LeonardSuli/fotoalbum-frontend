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
      const url =
        this.base_api_url + this.photos_endpoint + `?search=${this.search_text}`;

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
          <input
            type="search"
            class="form-control"
            placeholder="Search..."
            v-model="search_text"
          />

          <button class="btn btn-outline-secondary" type="submit">Search</button>
        </div>
      </form>
    </div>
  </div>

  <section class="photos py-5" v-if="photos">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div class="col" v-for="photo in photos.data">
          <div class="card">
            <div v-if="photo.upload_image">
              <img
                class="card-img-top"
                :src="
                  photo.upload_image.startsWith('https://')
                    ? photo.upload_image
                    : base_api_url + '/storage/' + photo.upload_image
                "
                alt=""
              />
            </div>

            <div v-else>
              <img src="https://picsum.photos/400/200" alt="" />
            </div>

            <div class="card-body">
              {{ photo.title }}
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation" class="mt-4">
        <ul class="pagination">
          <li
            class="page-item"
            :class="{ disabled: !link.url, active: link.active }"
            v-for="link in photos.links"
          >
            <button
              class="page-link"
              :href="link.url"
              type="button"
              @click="goTo(link.url)"
            >
              <span v-html="link.label"></span>
            </button>
          </li>

          <!-- <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">1</a>
          </li>

          <li class="page-item"><a class="page-link" href="#">2</a></li>

          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next"> &raquo; </a>
          </li> -->
        </ul>
      </nav>
    </div>
  </section>
</template>

<style></style>
