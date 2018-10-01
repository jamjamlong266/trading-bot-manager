<template>
    <div id="view-bot" class="container">
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>{{ bot_name }}</h4>
            </li>
            <li class="collection-item">
                <p>
                    Bot Indicator: {{ indicator }}
                </p>
                <div>
                    <p>Overbought : {{ overbought_value }}</p>
                    <p>Oversold : {{ oversold_value }}</p>
                </div>
            </li>
            <li class="collection-item">
                <p>Entry Value : {{ entry_value }}</p>
                <p>Amount : {{ amount }}</p>

                <p>Exit Value : {{ exit_value }}</p>
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
        </ul>
        <router-link to="/" class="btn grey">Back</router-link>
        <button class="btn red" @click="deleteBot">Delete</button>

        <div class="fixed-action-btn">
            <router-link v-bind:to="{name: 'edit-bot', params: {bot_id: bot_id}}" class="btn-floating btn-large red">
                <i class="fa fa-edit"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'

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
            bot_name : null,
            ema_value1: null,
            ema_value2:null,
            bot_id: null,
            uid: null,
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('trading_bot').where('bot_id', '==', to.params.bot_id).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                next(vm => {
                    vm.indicator = doc.data().indicator,
                    vm.overbought_value = doc.data().overbought_value,
                    vm.oversold_value = doc.data().oversold_value,
                    vm.entry_value = doc.data().entry_value,
                    vm.amount = doc.data().amount,
                    vm.exit_value = doc.data().exit_value,
                    vm.percentage_value = doc.data().percentage_value,
                    vm.stop_value = doc.data().stop_value,
                    vm.exchange = doc.data().exchange,
                    vm.api_key = doc.data().api_key,
                    vm.secret_key = doc.data().secret_key,
                    vm.trading_pair = doc.data().trading_pair,
                    vm.bot_id = doc.data().bot_id,
                    vm.bot_name = doc.data().bot_name
                    vm.ema_value1 = doc.data().ema_value1,
                    vm.ema_value2 = doc.data().ema_value2,
                    vm.uid = doc.data().uid
                })
            })
        })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            db.collection('trading_bot').where('bot_id', '==', this.$route.params.bot_id).get()
            .then(snapshot => {
                snapshot.forEach( doc => {
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
                    this.secret_key = doc.data().secret_key
                    this.trading_pair = doc.data().trading_pair
                    this.bot_id = doc.data().bot_id,
                    this.bot_name = doc.data().bot_name,
                    this.ema_value1 = doc.data().ema_value1,
                    this.ema_value2 = doc.data().ema_value2,
                    this.uid = doc.data().uid
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
        }
    }
}
</script>
