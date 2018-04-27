<template>
    <div>
<h1>customer list</h1>

        <table>
            <thead>
            <th>Custome first name</th>
            <th>Customer last Name</th>
            <th>action</th>

            </thead>

            <tbody>
            <tr v-for="(customer,key) in customers" :key="customer.id">
                <td>{{ customer.firstName}}</td>
                <td>{{ customer.lastName}}</td>
                <td><button @click="deleteCustomer(customer)">delete</button></td>
            </tr>

            </tbody>


        </table>


        <!--<ul>-->
            <!--<li v-for="(customer,key) in customers" :key="customer.id">-->
                <!--{{ customer.firstName}}-->
                <!--{{ customer.lastName}}-->
            <!--</li>-->

        <!--</ul>-->



    </div>
    
</template>

<script>

    import { customerService } from '../services/CustomerService';

    export default {
        name: "Customer",

        data() {

            return {

                customers: customerService.list()


            }


        },

        methods: {

            deleteCustomer(customer) {

              customerService.removeCustomer(customer)


            },


        }

        // created(){
        //
        //     console.log(customerService.list())
        // }
    }
</script>

<style scoped>

</style>