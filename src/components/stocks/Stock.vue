<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{ stock.name }} <small>(Preço: {{ stock.price | currency }})</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number" @blur="onblur"
                    :error="insufficientFunds || !Number.isInteger(quantity) || quantity < 0"
                    v-model.number="quantity" />
                <v-btn class="green darken-3 white--text"
                :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
                    @click="buyStock">{{ insufficientFunds ? 'Insuficiente' : 'Comprar' }}</v-btn> <!--Desabilita o botão se a quantidade
                    for menor = 0 ou se a quantidade for um valor quebrado. Ex: 2.4-->
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds
        },
        insufficientFunds() { //Valida a quantidade de fundos na hora da compra
            return this.quantity * this.stock.price > this.funds
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.$store.dispatch('buyStock', order)
            this.quantity = 0
        },
        onblur(){
            if(this.quantity == '') {
                this.quantity = 0
            }
        }
    }
}
</script>

<style>

</style>
