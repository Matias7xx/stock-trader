import stocks from '../../data/stocks'

export default {
    state: {
        stocks: [] //Lista de ações
    },
    mutations: {
        setStocks(state, stocks) { //Segundo parâmetro PAYLOAD
            state.stocks = stocks //Guardando a lista de ações
        },
        randomizeStocks(state) { //Randomizar os valores das ações
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
            });
        }
    },
    actions: {
        buyStock({ commit }, order) { //Comprar ação
            commit('buyStock', order)
        },
        initStocks({ commit }) { //Inicializar a lista de ações 
            commit('setStocks', stocks )
        },
        randomizeStocks({ commit }) {
            commit('randomizeStocks')
        }
    },
    getters: {
        stocks(state) { //Obter todas as ações
            return state.stocks
        }
    }
}