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
                    <div class="input-field col s12 holder">

                        <h6>Indicator</h6>
                        <p>
                            <label>
                                <input class="indicator" name="indicator" type="radio"  v-model="indi" @change="myFunction('rsi')"/>
                                <span>RSI</span>
                            </label>
                        </p>

                        <p>
                            <label>
                                <input class="indicator" name="indicator" type="radio"  v-model="indi" @change="myFunction('ema')"/>
                                <span>EMA</span>
                            </label>
                        </p>

                        <p>
                            <label>
                                <input class="indicator" name="indicator" type="radio"  v-model="indi" @change="myFunction('sma')"/>
                                <span>SMA</span>
                            </label>
                        </p>
                    </div>
                </div>

                <div class="row" id="rsi-setting">
                    <div class="col s12">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">RSI Setting</span>
                                <br>
                                <p class="setting-label">Overbought %</p>
                                <input class="setting-input" type="text" placeholder="70 - 99" v-model="overbought_rsi" required>
                                <label for="icon_telephone" class="setting-symbol">%</label>

                                <p class="setting-label">Oversold %</p>
                                <input class="setting-input" type="text" placeholder="1 - 30" v-model="oversold_rsi" required>
                                <label for="icon_telephone" class="setting-symbol">%</label>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <div class="row" id="ema-setting">
                    <div class="col s12">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">EMA Setting</span>
                                <br>
                                 <p class="setting-label">Overbought %</p>
                                <input class="setting-input" type="text" placeholder="70 - 99" v-model="overbought_ema" required>
                                <label for="icon_telephone" class="setting-symbol">%</label>

                                <p class="setting-label">Oversold %</p>
                                <input class="setting-input" id="icon_telephone" type="text" placeholder="1 - 30" v-model="oversold_ema" required>
                                <label for="icon_telephone" class="setting-symbol">%</label>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <div class="row">
                    <div class="col s12">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Indicator Setting</span>
                                <br>
                                <p class="setting-label">Entry Value</p>
                                <input class="setting-input" type="text" placeholder="Entry Value" v-model="entry_value" required>

                                <p class="setting-label">Amount</p>
                                <input class="setting-input" type="text" placeholder="Amount" v-model="Amount" required>

                                <br>
                                <p class="setting-label">Exit Value</p>
                                <input class="setting-input" type="text" placeholder="Exit Value" v-model="exit_value" required>

                                <p class="setting-label">Percentage</p>
                                <input class="setting-input" type="text" placeholder="Percentage" v-model="percentage" required>

                                <br>
                                <p class="setting-label">Stop Loss</p>
                                <input class="setting-input" type="text" placeholder="Stop Loss" v-model="stop" required>
                            </div>
                        </div>
                    </div>
                    
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
            uid: null,
            overbought_ema: null,
            oversold_ema: null,
            overbought_rsi: null,
            oversold_rsi: null,
            entry_value: null,
            exit_value: null,
            stop: null,
            Amount : null,
            percentage : null
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
                    vm.oversold_ema = doc.data().oversold_ema,
                    vm.overbought_ema = doc.data().overbought_ema,
                    vm.oversold_rsi = doc.data().oversold_rsi,
                    vm.overbought_rsi = doc.data().overbought_rsi,
                    vm.entry_value = doc.data().entry_value,
                    vm.exit_value = doc.data().exit_value,
                    vm.percentage = doc.data().percentage,
                    vm.stop = doc.data().stop,
                    vm.Amount = doc.data().Amount
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
                    this.secret_key = doc.data().secret_key,
                    this.trading_pair = doc.data().trading_pair,
                    this.Amount =doc.data().Amount,
                    this.stop = doc.data().stop,
                    this.percentage = doc.data().percentage,
                    this.exit_value = doc.data().exit_value,
                    this.entry_value = doc.data().entry_value,
                    this.overbought_ema = doc.data().overbought_ema,
                    this.oversold_ema = doc.data().oversold_ema,
                    this.overbought_rsi = doc.data().overbought_rsi,
                    this.oversold_rsi = doc.data().oversold_rsi
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
                        overbought_ema: this.overbought_ema,
                        oversold_ema: this.oversold_ema,
                        overbought_rsi: this.overbought_rsi,
                        oversold_rsi: this.oversold_rsi,
                        entry_value: this.entry_value,
                        exit_value: this.exit_value,
                        Amount: this.Amount,
                        percentage:this.percentage,
                        stop:this.stop
                    })
                    .then( () => {
                        this.$router.push({name: 'view-bot', params: {bot_id: this.bot_id}})
                    })
                })
            })
        },
        myFunction: function(evt){
            this.$emit("change", evt);
            if (evt == "rsi") {
                document.getElementById("rsi-setting").style.display = "block"
                document.getElementById("ema-setting").style.display = "none"
            } else if(evt == "ema") {
                document.getElementById("ema-setting").style.display = "block"
                document.getElementById("rsi-setting").style.display = "none"
            }else {
                document.getElementById("rsi-setting").style.display = "none"
                document.getElementById("ema-setting").style.display = "none"
            }
            this.value = evt
        }

    }
}
</script>


<style scoped>

h3 {
    text-align: center
}
.holder p {
    display:inline-block;
    margin-right: 20px;
}

.setting-label, .setting-input {
    display:inline-block
}

#rsi-setting, #ema-setting {
    display:none;
}

p.setting-label {
    margin-right: 10px;
    width:100px;
}

label.setting-symbol {
    width:10px;
    margin-left: -100px;
    margin-right: 80px;
    font-size:18px;
    font-weight: bold;
}

input.setting-input {
    width:200px;
    border: 2px solid rgba(0,0,0,0.2);
    border-radius: 5px;
    text-align: center;
    margin-right:40px;
}
div.indicator,.line2,.line3{
    display: flex
}
</style>
