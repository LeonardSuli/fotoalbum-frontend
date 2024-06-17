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

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4" >

                    <!-- Modal -->
                    <ModalComponent></ModalComponent>

                
                </div>

                <!-- Pagination -->
                <PaginationComponent></PaginationComponent>

            </div> 

        </div>
        
    </section>

</main>

</template>


<style scoped>


</style>