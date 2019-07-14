import stocks from '../../data/stocks'

export default {
    state: {
        stocks: [] //Lista de ações
    },
    mutations: {
        setStocks(state, stocks) { //Segundo parâmetro PAYLOAD
            state.stocks = stocks //Guardando a lista de ações
        }
    },
    actions: {
        buyStock({ commit }, order) { //Comprar ação
            commit()
        },
        initStocks({ commit }) { //Inicializar a lista de ações 
            commit('setStocks', stocks )
        }
    },
    getters: {
        stocks(state) { //Obter todas as ações
            return state.stocks
        }
    }
}