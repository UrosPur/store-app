<template>
    <div style="padding-top: 15px;">

        <label>Search products by name</label>
        <input v-model="searchTerm" type="text" />

        <table class="table">
            <thead>
            <th scope="col">Product name</th>
            <th scope="col">Product company</th>
            <th scope="col">Current amount available</th>
            <th scope="col">Add</th>
            <th scope="col">Remove</th>


            </thead>

            <tbody>
            <tr v-for="(product,key) in filteredProducts" :key="product.id">
                <td>{{ product.title }}</td>
                <td>{{ product.company}}</td>
                <td style="text-align: center">{{ product.available}}</td>
                <td><button @click="addAmount(product)" class="btn btn-secundary">+ </button></td>

                <td><button v-if="product.available" @click="removeAmount(product)"  class="btn btn-secundary">-</button></td>

            </tr>
            </tbody>


        </table>



    </div>
    
</template>

<script>

    import {productService} from '../services/ProductService';

    export default {
        name: "Products",

        data(){

            return {

                products: productService.list(),
                searchTerm : ''

            }

        },

        computed: {

            filteredProducts() {
                return this.products.filter(product => {
                    return product.title.toLowerCase().startsWith(this.searchTerm.toLowerCase())
                })
            }
        },

        methods: {

            addAmount(product){

             productService.addAmount(product)
            },

            removeAmount(product){

             productService.removeAmount(product)

            }



        }
    }
</script>

<style scoped>

</style>