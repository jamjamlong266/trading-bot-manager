<template>
    <div id="view-bot" class="container">
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>{{ bot_name }}</h4>
            </li>
            <li class="collection-item">
                Bot Indicator: {{ indicator }}
            </li>
            <li class="collection-item">
                Exchange Platform: {{ exchange }}
            </li>
            <li class="collection-item">
                API Key: {{ api_key }}
            </li>
            <li class="collection-item">
                Secret Key: {{ secret_key }}
            </li>
            <li class="collection-item">
                Trading Pair: {{ trading_pair }}
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
            bot_id: null,
            exchange: null,
            indicator: null,
            api_key: null,
            secret_key: null,
            trading_pair: null,
            bot_id: null,
            bot_name : null

        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('trading_bot').where('bot_id', '==', to.params.bot_id).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                next(vm => {
                    vm.bot_id = doc.data().bot_id,
                    vm.exchange = doc.data().exchange,
                    vm.indicator = doc.data().indicator,
                    vm.api_key = doc.data().api_key,
                    vm.secret_key = doc.data().secret_key,
                    vm.trading_pair = doc.data().trading_pair,
                    vm.bot_id = doc.data().bot_id,
                    vm.bot_name = doc.data().bot_name
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
                    this.bot_id = doc.data().bot_id,
                    this.exchange = doc.data().exchange,
                    this.indicator = doc.data().indicator,
                    this.api_key = doc.data().api_key,
                    this.secret_key = doc.data().secret_key
                    this.trading_pair = doc.data().trading_pair
                    this.bot_id = doc.data().bot_id,
                    this.bot_name = doc.data().bot_name
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
