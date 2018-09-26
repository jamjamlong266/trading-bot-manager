<template>
    <div id="new-bot" class="container">
        <h3>New Bot</h3>
        <div class="row">
            <form @sumbit.prevent="saveBot" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="bot_id" required>
                        <label>Bot ID</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="exchange" required>
                        <label>Exchange Platform</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="indicator" required>
                        <label>Indicator</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="api_key" required>
                        <label>API Key</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="secret_key" required>
                        <label>Secret Key</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="trading_pair" required>
                        <label>Trading Pair</label>
                    </div>
                </div>
                <button type="sumbit" class="btn" @click="saveBot">Submit</button>
                <router-link to="/" class="btn grey">Cancel</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'

export default {
    name: 'new-bot',
    data () {
        return {
            bot_id: null,
            exchange: null,
            indicator: null,
            api_key: null,
            secret_key: null,
            trading_pair: null,
            uid: null
        }
    },
    methods: {
        saveBot () {
            db.collection('trading_bot').add({
                bot_id: this.bot_id,
                exchange: this.exchange,
                indicator: this.indicator,
                api_key: this.api_key,
                secret_key: this.secret_key,
                trading_pair: this.trading_pair,
                uid: firebase.auth().currentUser.uid
            })
            .then(docRef => this.$router.push('/'))
            .catch(error => console.log(err))
        }
    }
}
</script>
