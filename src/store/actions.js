//Actions mais genéricas da aplicação
import Vue from 'vue'

export default {
    loadData({ commit }) { //Get do Axios
        Vue.prototype.$http('data.json').then(resp => {
            const data = resp.data
            if(data) {
                commit('setStocks', data.stocks)
                commit('setPortfolio', {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                })
            }
        })
    }
}