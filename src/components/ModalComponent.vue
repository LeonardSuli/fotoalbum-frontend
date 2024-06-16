<script>

import {state} from '../state.js';

export default{
    name: 'ModalComponent',

    data(){
        return{

            state,

        }
    },

}
</script>


<template>
                <div class="col" v-for="photo in state.photos.data" :key="photo.id">

                    <!-- Modal trigger button -->
                    <a data-bs-toggle="modal" :data-bs-target="`#photo-${photo.id}`">

                        <div class="card pointer">

                        <div v-if="photo.upload_image">
                            <img class="card-img-top" :src="photo.upload_image.startsWith('https://') ? photo.upload_image : state.base_api_url + '/storage/' + photo.upload_image" alt=""/>
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
                                <img class="card-img-top" :src="photo.upload_image.startsWith('https://') ? photo.upload_image : state.base_api_url + '/storage/' + photo.upload_image" alt=""/>
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

          

</template>


<style scoped>

</style>