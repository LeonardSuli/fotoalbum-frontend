import { reactive } from 'vue';

import axios from 'axios';

export const state = reactive({

    base_api_url: "http://127.0.0.1:8000",
    photos_endpoint: "/api/photos",
    photos: null,
    search_text: "",



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

})