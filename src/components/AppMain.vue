<script>

import {state} from '../state.js';

import PaginationComponent from './PaginationComponent.vue';
import ModalComponent from './ModalComponent.vue';
import LoadingIcon from './LoadingIcon.vue'

export default{
    name: 'AppMain',

    components:{
        PaginationComponent,
        ModalComponent,
        LoadingIcon
    },

    data(){
        return{

            state,

        }
    },
    
  mounted() {

        state.loading = true;

        setTimeout(() =>{

            state.callApi(state.base_api_url + state.photos_endpoint)

        }, 1500)
  },

}
</script>


<template>

<main>
    <section class="photos py-3">
        <div class="container">

            <div v-if="state.loading">

                <!-- Loading -->
                <LoadingIcon></LoadingIcon>

            </div> 

            <div v-else>

                <div v-if="state.photos.data.length > 0">
                    
                    <!-- Photos to show -->
                    <div class="results">Risultati trovati: {{ state.photos.data.length }}</div>

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4" >

                        <!-- Modal -->
                        <ModalComponent></ModalComponent>
                    
                    </div>

                </div>    
                
                <!-- No Photos -->
                <div class="no_results" v-else>
                    No Photos to show
                </div>    

                    <!-- Pagination -->
                    <PaginationComponent></PaginationComponent>

            </div> 

        </div>

    </section>

</main>

</template>


<style scoped>

.results{
    font-size: 26px;
    font-weight: 700;
    color: green;
    margin-bottom: 2rem;
}

.no_results{
    font-size: 26px;
    font-weight: 700;
    color: red;
    display:flex;
    justify-content: center;
    margin-bottom: 4rem;
}
</style>