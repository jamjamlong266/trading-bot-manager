<template>
    <div id="view-bot" class="container">
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>{{ bot_name }}</h4>
            </li>
            <li class="collection-item">
                <p>
                    Bot Indicator: {{ indicator }} <br>
                    Bot Status : {{ checkbox }}
                </p>
                <div id="rsi">
                    <p>Overbought : {{ overbought_value }}</p>
                    <p>Oversold : {{ oversold_value }}</p>
                </div>

                <div id="ema">
                    <p>EMA 1 : {{ ema_value1 }}</p>
                    <p>EMA 2 : {{ ema_value2 }}</p>
                </div>
            </li>
            <div id="three-common-setting">
                <li class="collection-item">
                    <p>Entry Value : {{ entry_value }}</p>
                    <p>Amount : {{ amount }}</p>
                    <p>Percentage : {{ percentage_value }}</p>
                </li>
                <li class="collection-item">
                    <p>Exchange Platform: {{ exchange }}</p>
                    <p>API Key: {{ api_key }}</p>
                    <p>Secret Key: {{ secret_key }}</p>
                </li>
                <li class="collection-item">
                    <p>Trading Pair: {{ trading_pair }}</p>
                </li>
            </div>
            <div id="durian-setting">
                <li class="collection-item">
                    <p>Buy Pending : {{ buy_pend }}</p>
                    <p>Sell Pending : {{ sell_pend }}</p>
                    <p>Gap : {{ gap_value }}</p>
                    <p>Buy Amount : {{ durian_amount }}</p>
                   
                </li>
                <li class="collection-item">
                    <p>Durian Exchange : {{ durian_exchange }}</p>
                    <p>API Key: {{ api_key }}</p>
                    <p>Secret Key: {{ secret_key }}</p>
                </li>
                <li class="collection-item">
                    <p>Trading Pair: {{ durian_trading_pair }}</p>
                </li>
            </div>

        </ul>
        
        <router-link to="/" class="btn grey">Back</router-link>
        <button class="btn red" @click="deleteBot">Delete</button>

        <!-- <div class="fixed-action-btn">
            <router-link v-bind:to="{name: 'edit-bot', params: {bot_id: bot_id}}" class="btn-floating btn-large red">
                <i class="fa fa-edit"></i>
            </router-link>
        </div> -->
        <button class="btn-floating btn-large red" @click="edit"><i class="fa fa-edit"></i></button>
    </div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'

export default {
    name: 'view-bot',
    data () {
        return {
            indicator: null,
            overbought_value: null,
            oversold_value: null,
            entry_value: null,
            amount:null,
            exit_value: null,
            percentage_value: null,
            stop_value: null,
            exchange: null,
            api_key: null,
            secret_key: null,
            trading_pair: null,
            ema_value1: null,
            ema_value2:null,
            bot_id: null,
            bot_name : null,
            uid: null,
            gap_value:null,
            buy_pend:null,
            sell_pend:null,
            durian_amount:null,
            durian_exchange: null,
            durian_trading_pair:null,
            checkbox:null
        }
    },
    beforeRouteEnter (to, from, next) {
        // const uid = firebase.auth().currentUser.uid
        db.collection('trading_bot').where("bot_id", "==", to.params.bot_id).get().then( snapdata => {
            snapdata.forEach(doc => {
                next(vm => {
                    vm.exchange = doc.data().exchange,
                    vm.indicator = doc.data().indicator,
                    vm.api_key = doc.data().api_key,
                    vm.secret_key = doc.data().secret_key,
                    vm.trading_pair = doc.data().trading_pair,
                    vm.ema_value2 = doc.data().ema_value2,
                    vm.ema_value1 = doc.data().ema_value1,
                    vm.oversold_value = doc.data().oversold_value,
                    vm.overbought_value = doc.data().overbought_value,
                    vm.entry_value = doc.data().entry_value,
                    vm.exit_value = doc.data().exit_value,
                    vm.percentage_value = doc.data().percentage_value,
                    vm.stop_value = doc.data().stop_value,
                    vm.amount = doc.data().amount,
                    vm.gap_value = doc.data().gap_value,
                    vm.buy_pend = doc.data().buy_pend,
                    vm.sell_pend = doc.data().sell_pend,
                    vm.durian_amount = doc.data().durian_amount,
                    vm.uid = doc.data().uid,
                    vm.durian_exchange = doc.data().durian_exchange,
                    vm.durian_trading_pair = doc.data().durian_trading_pair,
                    vm.bot_id = doc.data().bot_id,
                    vm.bot_name = doc.data().bot_name,
                    vm.checkbox = doc.data().checkbox

                    console.log(vm.indicator)
                    if(vm.indicator == "rsi") {
                        document.getElementById("rsi").style.display = "block"
                        document.getElementById("three-common-setting").style.display = "block"
                    } else if (vm.indicator == "ema") {
                        document.getElementById("ema").style.display = "block"
                        document.getElementById("three-common-setting").style.display = "block"
                    } else if (vm.indicator == "sma") {
                        document.getElementById("three-common-setting").style.display = "block"
                    } else if (vm.indicator == "durian") {
                        document.getElementById("durian-setting").style.display = "block"

                    }
                })
            })
        })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            // const uid = firebase.auth().currentUser.uid
            const dbref = db.collection('trading_bot')

            dbref.where("bot_id", "==", to.params.bot_id).get().then( snapdata => {
                snapdata.forEach(doc => {
                    this.indicator = doc.data().indicator,
                    this.overbought_value = doc.data().overbought_value,
                    this.oversold_value = doc.data().oversold_value,
                    this.entry_value = doc.data().entry_value,
                    this.amount = doc.data().amount,
                    this.exit_value = doc.data().exit_value,
                    this.percentage_value = doc.data().percentage_value,
                    this.stop_value = doc.data().stop_value,
                    this.exchange = doc.data().exchange,
                    this.api_key = doc.data().api_key,
                    this.secret_key = doc.data().secret_key,
                    this.trading_pair = doc.data().trading_pair,
                    this.bot_id = doc.data().bot_id,
                    this.bot_name = doc.data().bot_name
                    this.ema_value1 = doc.data().ema_value1,
                    this.ema_value2 = doc.data().ema_value2,
                    this.uid = doc.data().uid,
                    this.durian_exchange = doc.data().durian_exchange,
                    this.durian_trading_pair = doc.data().durian_trading_pair,
                    this.durian_amount = doc.data().durian_amount,
                    this.buy_pend = doc.data().buy_pend,
                    this.sell_pend = doc.data().sell_pend,
                    this.checkbox = doc.data().checkbox
                })
            })
        },
        deleteBot () {
            if (confirm('Are you sure?')) {
                db.collection('trading_bot').where('bot_id', '==', this.$route.params.bot_id).get()
                .then(snapshot => {
                    snapshot.forEach( doc => {
                        doc.ref.delete();
                        this.$router.push('/')
                    })
                })
            }
        },
        edit () {
            this.$router.push({ name: 'edit-bot', params: { bot_id:this.$route.params.bot_id }})
        }
    }
}
</script>

<style scoped>
    #rsi, #ema,#three-common-setting, #durian-setting{
        display:none;
    }
</style>

