import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Customer from './pages/Customer.vue'
import Products from './pages/Products.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [

    { path: '/customers', component: Customer},
    { path: '/products', component: Products}

]

const router = new VueRouter({
    routes
})

new Vue({
    router,
  render: h => h(App)
}).$mount('#app')
