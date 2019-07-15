<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>
                    {{ stock.name }}
                    <small>
                        (Preço: {{ stock.price }} | Qtde: {{ stock.quantity }})
                    </small>
                </strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number"
                    v-model.number="quantity" />
                <v-btn class="blue darken-3 white--text"
                :disabled="quantity <= 0 || !Number.isInteger(quantity)"
                    @click="sellStock">Vender</v-btn> <!--Desabilita o botão se a quantidade
                    for menor = 0 ou se a quantidade for um valor quebrado. Ex: 2.4-->
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
import { mapActions } from 'vuex' //Outra forma de chamar uma action. MAPACTIONS

export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        //...mapActions(['sellStock']), //Usando MapActions
        //...mapActions({ sellStockAction: 'sellStock'}), //Caso tenha algum método com mesmo nome
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            //this.sellStockAction(order) //MapAction
            this.$store.dispatch('sellStock', order)
            this.quantity = 0
        }
    }
}
</script>

<style>

</style>