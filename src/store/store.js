import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

//Dispatch par chamar uma ação e Commit para chamar uma Mutation

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        stocks,
        portfolio
    }
})