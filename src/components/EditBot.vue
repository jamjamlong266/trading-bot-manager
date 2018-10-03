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
                    <div class="input-field col s12 holder">

                        <h6>Indicator</h6>
                        <p>
                            <label>
                                <input class="indicator" name='indicator' type="radio"  v-model="indic" @change="myFunction('rsi')"/>
                                <span>RSI</span>
                            </label>
                        </p>

                        <p>
                            <label>
                                <input class="indicator" name='indicator' type="radio"  v-model="indic" @change="myFunction('ema')"/>
                                <span>EMA</span>
                            </label>
                        </p>

                        <p>
                            <label>
                                <input class="indicator" name='indicator' type="radio"  v-model="indic" @change="myFunction('sma')"/>
                                <span>SMA</span>
                            </label>
                        </p>
                        <p>
                            <label class="container">
                                <input class="indicator" name='indicator' type="radio"  v-model="indic" @change="myFunction('durian')" />
                                <span>DURIAN</span>
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
                                <input class="setting-input" type="text" placeholder="70 - 99" v-model="overbought_value" >
                                <label for="icon_telephone" class="setting-symbol">%</label>

                                <p class="setting-label">Oversold %</p>
                                <input class="setting-input" type="text" placeholder="1 - 30" v-model="oversold_value" >
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
                                <input class="setting-input" type="text" placeholder="70 - 99" v-model="ema_value1" >
                                <label for="icon_telephone" class="setting-symbol">%</label>

                                <p class="setting-label">Oversold %</p>
                                <input class="setting-input" id="icon_telephone" type="text" placeholder="1 - 30" v-model="ema_value2" >
                                <label for="icon_telephone" class="setting-symbol">%</label>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <div class="row" id="common-setting">
                    <div class="col s12">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Indicator Setting</span>
                                <br>
                                <p class="setting-label">Entry Value</p>
                                <input class="setting-input" type="text" placeholder="Entry Value" v-model="entry_value" >

                                <p class="setting-label">Amount</p>
                                <input class="setting-input" type="text" placeholder="Amount" v-model="amount" >

                                <br>
                                <p class="setting-label">Exit Value</p>
                                <input class="setting-input" type="text" placeholder="Exit Value" v-model="exit_value" >

                                <p class="setting-label">Percentage</p>
                                <input class="setting-input" type="text" placeholder="Percentage" v-model="percentage_value" >

                                <br>
                                <p class="setting-label">Stop Loss</p>
                                <input class="setting-input" type="text" placeholder="Stop Loss" v-model="stop_value" >
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="row" id="durian-setting">
                    <div class="col s12">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Durian Setting</span>
                                <br>
                                <p class="setting-label">Gap</p>
                                <input class="setting-input" type="text" placeholder="Gap value" v-model="gap_value" >

                                <p class="setting-label">Amount</p>
                                <input class="setting-input" type="text" placeholder="Amount" v-model="durian_amount" >

                                <br>
                                <p class="setting-label">Buy pending</p>
                                <input class="setting-input" type="text" placeholder="Buy pending" v-model="buy_pend" >

                                <p class="setting-label">Sell_pending</p>
                                <input class="setting-input" type="text" placeholder="Sell pending" v-model="sell_pend" >
                            </div>
                        </div>
                    </div>
                </div>

                <div id="three-indicator-setting">
                    <div class="row">
                        <div class="input-field col s12">
                        <p>Exchange :</p>
                            <select class="exchange" v-model="exchange" style="height:50px; display:block" >
                                <option value="BINANCE">BINANCE</option>
                                <option value="COINEX">COINEX</option>
                                <option value="JONVI">JONVI</option>
                            </select>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <span>API KEY</span>
                            <input  class="api_key" type="text" v-model="api_key" >
                            
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <span>SECRET KEY</span>
                            <input  class="secret_key" type="text" v-model="secret_key" >
                            
                        </div>
                    </div>


                    <div class="row">
                        <div class="input-field col s12">
                            <p>Trading Pair :</p>
                            <select class="trading_pair" v-model="trading_pair" style="height:50px; display:block" >
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
                </div>
                <div id="durian-indicator-setting">
                    <div class="row">
                        <div class="input-field col s12">
                        <p>Exchange :</p>
                            <select class="exchange" v-model="exchange" style="height:50px; display:block" >
                                <option value="BINANCE">BINANCE</option>
                            </select>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <span>API KEY</span>
                            <input  class="api_key" type="text" v-model="api_key" >
                            
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <span>SECRET KEY</span>
                            <input  class="secret_key" type="text" v-model="secret_key" >
                            
                        </div>
                    </div>


                    <div class="row">
                        <div class="input-field col s12">
                            <p>Trading Pair :</p>
                            <select class="trading_pair" v-model="trading_pair" style="height:50px; display:block" >
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
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <p>
                            <label>
                                <input type="checkbox" class="filled-in" />
                                <span>Active</span>
                            </label>
                        </p>
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
import firebase from 'firebase'
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import firebaseInit from './firebaseInit';

export default {
    name: 'edit-bot',
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
            uid: null,
            indic: null,
            gap_value:null,
            buy_pend:null,
            sell_pend:null,
            durian_amount:null,
            currentDoc: null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('trading_bot').where('bot_id', '==', to.params.bot_id).get().then( snapdata => {
            snapdata.forEach(doc => {
                next(vm => {
                    vm.bot_id = doc.data().bot_id,
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
            db.collection('trading_bot').where('bot_id', '==', this.$route.params.bot_id).get().then( snapdata => {
                snapdata.forEach(doc => {
                    this.bot_id = doc.data().bot_id,
                    this.exchange = doc.data().exchange,
                    this.indicator = doc.data().indicator,
                    this.api_key = doc.data().api_key,
                    this.secret_key = doc.data().secret_key,
                    this.trading_pair = doc.data().trading_pair,
                    this.amount =doc.data().amount,
                    this.stop_value = doc.data().stop_value,
                    this.percentage_value = doc.data().percentage_value,
                    this.exit_value = doc.data().exit_value,
                    this.entry_value = doc.data().entry_value,
                    this.ema_value1 = doc.data().ema_value1,
                    this.ema_value2 = doc.data().ema_value2,
                    this.overbought_value = doc.data().overbought_value,
                    this.oversold_value = doc.data().oversold_value,
                    this.gap_value = doc.data().gap_value,
                    this.buy_pend = doc.data().buy_pend,
                    this.sell_pend = doc.data().sell_pend,
                    this.durian_amount = doc.data().durian_amount,
                    this.uid = doc.data().uid
                })
                if(this.indicator == "rsi") {
                    document.getElementById("rsi").style.display = "block"
                    document.getElementById("ema").style.display = "none"
                } else if (this.indicator == "ema") {
                    document.getElementById("ema").style.display = "block"
                    document.getElementById("rsi").style.display = "none"
                }
            })
        },
        updateBot () {
            db.collection('trading_bot').where('bot_id', '==', this.$route.params.bot_id).get().then( snapdata => {
                    snapdata.forEach(doc => {
                        doc.ref.update({
                            indicator : this.indicator,
                            overbought_value : this.overbought_value,
                            oversold_value : this.oversold_value,
                            entry_value : this.entry_value,
                            amount : this.amount,
                            exit_value : this.exit_value,
                            percentage_value : this.percentage_value,
                            stop_value : this.stop_value,
                            exchange: this.exchange,
                            api_key : this.api_key,
                            secret_key: this.secret_key,
                            trading_pair : this.trading_pair,
                            ema_value1 : this.ema_value1,
                            ema_value2 : this.ema_value2,
                            bot_id : this.bot_id,
                            gap_value : this.gap_value,
                            buy_pend : this.buy_pend,
                            sell_pend : this.sell_pend,
                            durian_amount : this.durian_amount,
                            uid : this.uid
                        })
                        .then(docRef => {
                            console.log(docRef)
                            this.$router.push({ name: 'view-bot', params: { bot_id: this.bot_id }})
                        })
                    })
                    
                })
        },
        myFunction(evt) {
            this.$emit("change", evt);
            if (evt == "rsi") {
                document.getElementById("rsi-setting").style.display = "block"
                document.getElementById("common-setting").style.display = "block"
                document.getElementById("ema-setting").style.display = "none"
                document.getElementById("durian-setting").style.display = "none"
                document.getElementById("durian-indicator-setting").style.display = "none"
                document.getElementById("three-indicator-setting").style.display = "block"
            } else if(evt == "ema") {
                document.getElementById("ema-setting").style.display = "block"
                document.getElementById("common-setting").style.display = "block"
                document.getElementById("rsi-setting").style.display = "none"
                document.getElementById("durian-setting").style.display = "none"
                document.getElementById("durian-indicator-setting").style.display = "none"
                document.getElementById("three-indicator-setting").style.display = "block"
            } else if(evt=="sma"){
                document.getElementById("common-setting").style.display = "block"
                document.getElementById("ema-setting").style.display = "none"
                document.getElementById("durian-setting").style.display = "none"
                document.getElementById("rsi-setting").style.display = "none"
                document.getElementById("durian-indicator-setting").style.display = "none"
                document.getElementById("three-indicator-setting").style.display = "block"
            }else if(evt=="durian"){
                document.getElementById("durian-setting").style.display = "block"
                document.getElementById("common-setting").style.display = "none"
                document.getElementById("ema-setting").style.display = "none"
                document.getElementById("rsi-setting").style.display = "none"
                document.getElementById("three-indicator-setting").style.display = "none"
                document.getElementById("durian-indicator-setting").style.display = "block"
            }
            this.indicator = evt
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
