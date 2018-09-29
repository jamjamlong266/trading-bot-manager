<template>
    <div id="new-bot" class="container">
        <h3>New Bot</h3>
        
        <div class="row">
            <form @sumbit.prevent="saveBot" class="col s12">
                <div class="row">
                    <div class="input-field col s12">

                        <h6>Indicator</h6>
                        <p>
                            <label>
                                <input class="with-gap" name="group1" type="radio"  />
                                <span>Green</span>
                            </label>
                        </p>

                        <p>
                            <label>
                                <input class="with-gap" name="group1" type="radio"  />
                                <span>Green</span>
                            </label>
                        </p>
                    </div>
                </div>

                <div class="row">
                    
                    <div class="input-field col s12">
                        <p>Exchange Platform</p>
                        <select class="browser-default">
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>

                        <input  class="bot_id" type="text" v-model="bot_id" required>
                        <label>Bot ID</label>

                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                    <p>Exchange :</p>
                        <select class="exchange" v-model="exchange" style="height:50px; display:block">
                            <option value="BINANCE">BINANCE</option>
                            <option value="COINEX">COINEX</option>
                            <option value="JONVI">JONVI</option>
                        </select>
                    </div>
                    
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <p>Indicator :</p>
                        <select class="indicator" v-model="indicator" style="height:50px; display:block">
                            <option value="RSI">RSI</option>
                            <option value="EMA">EMA</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input  class="api_key" type="text" v-model="api_key" required>
                        <label>API KEY</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input  class="secret_key" type="text" v-model="secret_key" required>
                        <label>SECRET KEY</label>
                    </div>
                </div>


                <div class="row">
                    <div class="input-field col s12">
                        <p>Trading Pair :</p>
                        <select class="trading_pair" v-model="trading_pair" style="height:50px; display:block">
                            <option value="BTC/USDT">BTC/USDT</option>
                            <option value="BCH/USDT">BCH/USDT</option>
                            <option value="JE/USDT">JE/USDT</option>
                            <option value="ETH/USDT">ETH/USDT</option>
                            <option value="LTC/USDT">LTC/USDT</option>
                            <option value="ETH/BTC">ETH/BTC</option>
                            <option value="JE/BTC">JE/BTC</option>
                            <option value="LTC/BTC">LTC/BTC</option>
                            <option value="BCH/BTC">BCH/BTC</option>
                            <option value="JE/eMYR">JE/eMYR</option>
                            <option value="BTC/eMYR">BTC/eMYR</option>
                            <option value="BCH/eMYR">BCH/eMYR</option>
                            <option value="ETH/eMYR">ETH/eMYR</option>
                            <option value="USDT/eMYR">USDT/eMYR</option>
                        </select>    
                    </div>
                </div>
<<<<<<< HEAD

                <div class="row">
                    <div class="input-field col s12">
                        <p>
                            <label>
                                <input type="checkbox" class="filled-in" checked="checked" />
                                <span>Active</span>
                            </label>
                        </p>
                    </div>
                </div>

=======
                
>>>>>>> 744852c0b1a99ce3ebc75dd5520d0818d885dafd
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

<style scoped>
select.indicator,.trading_pair,.exchange {
    background-color:khaki
}
input.bot_id,input.api_key,input.secret_key {
    background-color:khaki
}
</style>