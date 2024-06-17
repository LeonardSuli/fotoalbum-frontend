import { reactive } from 'vue';

import axios from 'axios';

export const state = reactive({

    base_api_url: "http://127.0.0.1:8000",
    photos_endpoint: "/api/photos",
    categories_endpoint: "/api/categories",
    photos: null,
    categories: null,
    search_text: "",
    loading: true,


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

    // Method for call API
    callApi(url) {

        this.loading = true;

        axios
            .get(url)
            .then((resp) => {
                console.log(resp);

                this.photos = resp.data.results;
                console.log(this.photos);

                this.loading = false;
            })
            .catch((err) => {
                console.error(err);
            });
    },


})