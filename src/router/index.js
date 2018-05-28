import Vue from 'vue'
import Router from 'vue-router'
import Travel from '../components/Travel';
import Quotation from '../components/Quotation'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Travel',
            component: Travel
        }, {
            path: '/quotation',
            name: 'Quotation',
            component: Quotation
        },

    ]
})