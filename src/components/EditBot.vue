<template>
    <div id="edit-bot" class="container">
        <h3>Edit Bot</h3>
        <div class="row">
            <form @sumbit.prevent="updateBot" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <span>BotID :</span><br>
                        <input disabled type="text" v-model="bot_id" required>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                    <p>Exchange :</p>
                        <select  class="exchange" v-model="exchange" style="height:50px; display:block" >
                            <option value="BINANCE">BINANCE</option>
                            <option value="COINEX">COINEX</option>
                            <option value="JONVI">JONVI</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <p>Indicator :</p>
                        <select id="mySelect" class="indicator" v-model="indicator" style="height:50px; display:block" @change="myFunction(this.indicator.value)">
                            <option value="RSI">RSI</option>
                            <option value="EMA">EMA</option>
                        </select>
                    </div>
                    <p>{{ indicator }}</p>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <span>API KEY :</span>
                        <input  class="api_key" type="text" v-model="api_key" required>
                        
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <span>SECRET KEY :</span>
                        <input  class="secret_key" type="text" v-model="secret_key" required>
                        
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
                <p id="demo">indi {{ indicator }}</p>
                <div id="hidden_div"  class="hidden" style="display: none;">
                    <div class="indicator"  >
                        <p>ENTRY</p>
                        <input class="entry_price" placeholder="entry_price" id="entry_price" type="text" >
                        <input class="amount" placeholder="amount" id="amount" type="text" >
                    </div>
                    <div class="line2">
                        <p>EXIT</p>
                        <input class="exit_percent" placeholder="exit_percent" id="exit_percent" type="text" >
                    </div>
                    <div class="line3">
                        <p>STOP</p>
                        <input class="stop_loss" placeholder="stop_price" id="stop_loss" type="text" >
                    </div>
                </div>
                <button type="sumbit" class="btn" @click="updateBot">Submit</button>
                <router-link to="/" class="btn grey">Cancel</router-link>  
                <router-link v-bind:to="{name: 'indicator-setting', params: {bot_id: bot_id}}" class="btn grey">INDICATOR</router-link> 
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
        },
        myFunction(indicator) {
            console.log(indicator)
            // if (indicator == "RSI"){
            //     document.getElementById("hidden_div").style.display = "block";
            // }
            
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
p {
    margin-left: 40px
}
h3 {
    text-align: center
}
input.entry_price,input.amount {
    margin-left: 80px;
    width : 100px
}
input.stop_loss{
    margin-left: 85px;
    width : 100px
}
input.exit_percent{
    margin-left: 95px;
    width : 100px
}
div.indicator,.line2,.line3{
    display: flex
}
</style>
