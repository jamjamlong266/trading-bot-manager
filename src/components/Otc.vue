<template>
    <div class="container">
        <h4>the is otc</h4>
        <div class="row">
            <div class="col s12 m6 l6 input-card">
                <div class="crypto-card blue lighten-4 center">
                    <h6>Bitcoin</h6>
                    
                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="btc_buyPrice">
                        <label for="autocomplete-input">Buy Price</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="btc_buyAmount">
                        <label for="autocomplete-input">Amount</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="btc_sellPrice">
                        <label for="autocomplete-input">Sell Price</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="btc_sellAmount">
                        <label for="autocomplete-input">Amount</label>
                    </div>
                    
                    <button type="sumbit" class="btn" @click="updateBtc">Update</button>


                </div>
            </div>
            <div class="col s12 m6 l6 input-card">
                <div class="crypto-card blue lighten-4 center">
                    <h6>USDT</h6>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="usdt_buyPrice">
                        <label for="autocomplete-input">Buy Price</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="usdt_buyAmount">
                        <label for="autocomplete-input">Amount</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="usdt_sellPrice">
                        <label for="autocomplete-input">Sell Price</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="usdt_sellAmount">
                        <label for="autocomplete-input">Amount</label>
                    </div>
                    
                    <button class="waves-effect waves-light btn-large" @click="updateUsdt">Update</button>
                </div>
            </div>
            <div class="col s12 m6 l6 input-card">
                <div class="crypto-card blue lighten-4 center">
                    <h6>ETH</h6>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="eth_buyPrice">
                        <label for="autocomplete-input">Buy Price</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="eth_buyAmount">
                        <label for="autocomplete-input">Amount</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="eth_sellPrice">
                        <label for="autocomplete-input">Sell Price</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="eth_sellAmount">
                        <label for="autocomplete-input">Amount</label>
                    </div>
                    
                    <button class="waves-effect waves-light btn-large" @click="updateEth">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import firebaseInit from './firebaseInit';

export default {
    name: 'otc',
    data: function() {
        return {
            btc_buyPrice: null,
            btc_buyAmount: null,
            btc_sellPrice: null,
            btc_sellAmount: null,
            usdt_buyPrice: null,
            usdt_buyAmount: null,
            usdt_sellPrice: null,
            usdt_sellAmount: null,
            eth_buyPrice: null,
            eth_buyAmount: null,
            eth_sellPrice: null,
            eth_sellAmount: null,
        };
    },
    // beforeRouteEnter (to, from, next) { 
    //     db.collection('otc_bot').doc('btc').get().then(( snapdata) => {
    //         snapdata.forEach((doc) => {
    //             next(vm => {
    //                 vm.btc_buyPrice = doc.data().btc_buyPrice,
    //                 vm.btc_buyAmount = doc.data().btc_buyAmount,
    //                 vm.btc_sellPrice = doc.data().btc_sellPrice,
    //                 vm.btc_sellAmount = doc.data().btc_sellAmount
    //             })
    //         })
    //     })
    // },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        // fetchData: function() {
        //     db.collection('otc_bot').doc('btc').get().then( (snapdata) => {
        //         snapdata.forEach((doc) => {
        //             next(vm => {
        //             this.btc_buyPrice = doc.data().btc_buyPrice,
        //             this.btc_buyAmount = doc.data().btc_buyAmount,
        //             this.btc_sellPrice = doc.data().btc_sellPrice,
        //             this.btc_sellAmount = doc.data().btc_sellAmount
        //             })
        //         })
        //     })
        // },
        updateBtc: function() {
            db.collection("otc_bot").doc('btc').set({
                btc_buyPrice: this.btc_buyPrice,
                btc_buyAmount: this.btc_buyAmount,
                btc_sellPrice: this.btc_sellPrice,
                btc_sellAmount: this.btc_sellAmount
            })
        },
        updateEth: function() {
            db.collection("otc_bot").doc('eth').set({
                eth_buyPrice: this.eth_buyPrice,
                eth_buyAmount: this.eth_buyAmount,
                eth_sellPrice: this.eth_sellPrice,
                eth_sellAmount: this.eth_sellAmount
            })
        },
        updateUsdt: function() {
            db.collection("otc_bot").doc('usdt').set({
                usdt_buyPrice: this.usdt_buyPrice,
                usdt_buyAmount: this.usdt_buyAmount,
                usdt_sellPrice: this.usdt_sellPrice,
                usdt_sellAmount: this.usdt_sellAmount
            })
        }
    }
}
</script>

<style scoped>
    .input-card {
        padding:10px 15px;
        box-sizing: border-box;
    }

    .crypto-card {
        width:100%;
        height:350px;
        background-color:red;
        border-radius: 10px;
        padding:15px;
        box-sizing: border-box;
    }
</style>
