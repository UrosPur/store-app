<template>
<div>

    <ul>
        <li>{{customer.firstName}}</li>
        <li>{{customer.lastName}}</li>
        <li>{{customer.email}}</li>

    </ul>

    <router-link to="/customers">go back to customers</router-link>

    </div>
</template>

<script>

    import {customerService} from '../services/CustomerService';

    export default {
        name: "LatestPurchases",

        created(){

            this.customer = customerService.get(this.$route.params.id)

        }

    }
</script>


<style scoped>

</style>