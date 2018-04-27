<template>
    <div class="container">
        <div class="row">


            <div class="col-sm-6">
                <h1>customer list</h1>
                <table>
                    <thead>
                    <th>Custome first name</th>
                    <th>Customer last Name</th>
                    <th>Email</th>
                    <th>action</th>

                    </thead>

                    <tbody>
                    <tr v-for="(customer,key) in customers" :key="customer.id">
                        <td>{{ customer.firstName}}</td>
                        <td>{{ customer.lastName}}</td>
                        <td>{{ customer.email}}</td>
                        <td>
                            <button @click="deleteCustomer(customer)">delete</button>
                        </td>
                    </tr>

                    </tbody>
                </table>


            </div>
            <div class="col-sm-6">
                <h2>Add customer </h2>
                <form  @submit.prevent="addcustomer">

                    <div class="col-sm-6">
                        <label>First Name</label>
                    </div>
                    <div class="col-sm-6">
                        <input v-model="newCustomer.firstName" type="text"/>
                    </div>

                    <div class="col-sm-6">
                        <label>Last Name</label>
                    </div>
                    <div class="col-sm-6">
                        <input v-model="newCustomer.lastName" type="text"/>
                    </div>

                    <div class="col-sm-6">
                        <label>Email</label>
                    </div>

                    <div class="col-sm-6">
                        <input v-model="newCustomer.email" type="email"/>
                    </div>

                    <div class="col-sm-6">
                    <button>add customer</button>
                    </div>

                </form>
            </div>

        </div>
    </div>

</template>

<script>

    import {customerService} from '../services/CustomerService';

    export default {
        name: "Customer",

        data() {

            return {

                customers: customerService.list(),

                newCustomer: {

                    id: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                }

            }

        },

        methods: {

            deleteCustomer(customer) {

                customerService.removeCustomer(customer)

            },

            addcustomer(){

                // console.log(this.newCustomer)
                    customerService.addcustomer(this.newCustomer)

               this.newCustomer = {}

            }

        }

    }
</script>