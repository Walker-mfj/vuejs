import Vue from 'vue'
import VueRouter from 'vue-router'
import sunPage from './components/sun-page.vue'
import votePage from './components/votePage.vue'
import FAQsPage from './components/FAQsPage.vue'
import voteList1 from './components/voteList1.vue'
import voteList2 from './components/voteList2.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: '/', component: sunPage},
        {path: '/sun', component: sunPage},
        {path: '/vote', component: votePage},
        {path: '/faq', component: FAQsPage},
        {path: '/vote/detail',query: {symbol: 'sun'}, component: voteList1},
        {path: '/vote/detail1',query: {symbol: 'sun1'}, component: voteList2}
    ]
})
