<template>
    <div>
            <ul v-for="(product,key) in products" :key="product.id">
                <li>{{ product.title }}</li>
                <li>{{ product.company }}</li>



            </ul>


    </div>
    
</template>

<script>

    import {productService} from '../services/ProductService';

    export default {
        name: "Products",

        data(){

            return {

                products: productService.list()

            }

        }
    }
</script>

<style scoped>

</style>