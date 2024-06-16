<script>

import {state} from '../state.js';

import PaginationComponent from './PaginationComponent.vue';
import ModalComponent from './ModalComponent.vue';

export default{
    name: 'AppMain',

    components:{
        PaginationComponent,
        ModalComponent
    },

    data(){
        return{

            state,

        }
    },
    
  mounted() {
    
     setTimeout(() =>{

            state.callApi(state.base_api_url + state.photos_endpoint + `?search=${state.search_text}`)

        }, 1500)
  },

}
</script>


<template>

<main>

    <section class="photos py-5" v-if="state.photos">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                <!-- Modal -->
                <ModalComponent></ModalComponent>

            
            </div>

            <!-- Pagination -->
            <PaginationComponent></PaginationComponent>
        
        </div>
    </section>     

</main>

</template>


<style scoped>


</style>