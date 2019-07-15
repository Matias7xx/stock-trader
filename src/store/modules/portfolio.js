export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: { //Enquanto a Action ocorre no modulo Stocks, a Mutation ocorre aqui (Portfolio)
        buyStock(state, { stockId, quantity, stockPrice }) { 
            const record = state.stocks.find(element => element.id == stockId)
            if(record) {
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice * quantity
        },
        sellStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(element => element.id == stockId)
            if(record.quantity > quantity) { //Verifica se a quantidade de ações que tenho é maior do que eu quero vender
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPrice * quantity
        }
    },
    actions: {
        sellStock({ commit }, order) {
            commit('sellStock', order)
        }
    },
    getters: {
        stockPortfolio(state, getters) { //Retorna todas as ações do portfolio
            return state.stocks.map(stock => {
                const record = getters.stocks.find(element => element.id == stock.id)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        funds(state) {
            return state.funds
        }
    }
}