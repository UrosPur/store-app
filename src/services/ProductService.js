const products = [

    {   id: 1 ,
        title: 'Plazma',
        company : 'Bamby',
        available : 10
    },


    {   id: 2 ,
        title: 'Oreo',
        company : 'GreatCompany',
        available : 8
    },


    {   id: 3 ,
        title: 'Nutella',
        company : 'BestCompanyEver',
        available : 35
    },


    {   id: 4 ,
        title: 'Noblice',
        company : 'Stark',
        available : 5
    },

    {   id: 5 ,
        title: 'Plazma cokolada',
        company : 'Bamby',
        available : 45
    },


]

// let nextId = 5





export default class ProductService {

    list(){

        return products
    }

    addAmount(product){

        product.available++

    }

    removeAmount(product){

        product.available--

    }


//     removeCustomer(value){
//
//         customers.splice(customers.indexOf(value), 1);
//
//
//     }
//
//
//     addcustomer(value){
//
//         value.id = nextId
//
//         // console.log(customers.length)
//         // console.log(value)
//
//         customers.push(value)
//         nextId++
//
//     }
//
//     get(id) {
//         return customers.find(customer => customer.id == id)
//
//     }
//
}


export const productService = new ProductService();