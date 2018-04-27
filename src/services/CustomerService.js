const customers = [

    { id: 1 ,
        firstName: 'John',
        lastName : 'Johnson',
        email: 'john@gmail.com'
    },

    { id: 2 ,
        firstName: 'Pera',
        lastName : 'Peric',
        email: 'pera@gmail.com'
    },

    { id: 3 ,
        firstName: 'Tom',
        lastName : 'Johnson',
        email: 'tom@gmail.com'
    },

    { id: 4 ,
        firstName: 'Mike',
        lastName : 'Doe',
        email: 'mike@gmail.com'
    },

]






export default class CustomerService {

    list(){

        return customers
    }


    removeCustomer(value){

        customers.splice(customers.indexOf(value), 1);


    }


    addcustomer(value){

        customers.push(value)

    }

}


export const customerService = new CustomerService();