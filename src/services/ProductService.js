const products = [

    {   id: 1 ,
        title: 'Plazma',
        company : 'Bamby',
    },


    {   id: 2 ,
        title: 'Oreo',
        company : 'GreatCompany',
    },


    {   id: 3 ,
        title: 'Nutella',
        company : 'BestCompanyEver',
    },


    {   id: 4 ,
        title: 'Noblice',
        company : 'Stark',
    },


]

// let nextId = 5





export default class ProductService {

    list(){

        return products
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