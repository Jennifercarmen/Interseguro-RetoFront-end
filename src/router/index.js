import Vue from 'vue'
import Router from 'vue-router'
import Quotation from '../components/Quotation'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/Quotation',
            name: 'Quotation',
            component: Quotation
        }
    ]
})