<script>

import {state} from '../state.js';

export default{
    name: 'PaginationComponent',

    data(){
        return{

            state,

        }
    },

}
</script>


<template>

            <!-- Pagination -->
            <nav aria-label="Page navigation" class="mt-4">
                <ul class="pagination">

                <li class="page-item" :class="{ disabled: !link.url, active: link.active }" v-for="link in state.photos.links">

                    <button class="page-link"  type="button" @click="state.goTo(link.url)">
                        <span v-html="link.label"></span>
                    </button>
                    
                </li>

                </ul>
            </nav>

</template>


<style scoped>

</style>