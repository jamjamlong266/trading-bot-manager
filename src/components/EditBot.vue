<template>
    <div id="edit-bot" class="container">
        <h3>Edit Bot</h3>
        <div class="row">
            <form @sumbit.prevent="updateBot" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input disabled type="text" v-model="bot_id" required>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="exchange" required>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="indicator" required>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="api_key" required>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="secret_key" required>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="trading_pair" required>
                    </div>
                </div>
                <button type="sumbit" class="btn" @click="updateBot">Submit</button>
                <router-link to="/" class="btn grey">Cancel</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'

export default {
    name: 'edit-bot',
    data () {
        return {
            bot_id: null,
            exchange: null,
            indicator: null,
            api_key: null,
            secret_key: null,
            trading_pair: null,
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
                    vm.secret_key = doc.data().secret_key
                    vm.trading_pair = doc.data().trading_pair
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
                })
            })
        },
        updateBot () {
            db.collection('trading_bot').where('bot_id', '==', this.$route.params.bot_id).get()
            .then(snapshot => {
                snapshot.forEach( doc => {
                    doc.ref.update({
                        bot_id: this.bot_id,
                        exchange: this.exchange,
                        indicator: this.indicator,
                        api_key: this.api_key,
                        secret_key: this.secret_key,
                        trading_pair: this.trading_pair,
                    })
                    .then( () => {
                        this.$router.push({name: 'view-bot', params: {bot_id: this.bot_id}})
                    })
                })
            })
        }
    }
}
</script>
