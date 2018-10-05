<template>
    <div id="new-bot" class="container">
        <h3>New Bot</h3>
        
        <div class="row">
            <form @sumbit.prevent="saveBot" class="col s12">
                <div class="row">
                    <div class="input-feid col s12">
                        <span class="bot_name">Bot Name</span>
                        <input  class="bot_name" type="text" placeholder="enter name" v-model="bot_name" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12 holder">
                        <h6>Indicator</h6>
                        <p>
                            <label class="container">
                                <input class="indicator" name="indicator" type="radio"  v-model="indic" @change="myFunction('rsi')" />
                                <span class="checkmark"></span>
                                <span>RSI</span>
                            </label>
                        </p>

                        <p>
                            <label class="container">
                                <input class="indicator" name="indicator" type="radio"  v-model="indic" @change="myFunction('ema')"/>
                                <span class="checkmark"></span>
                                <span>EMA</span>
                            </label>
                        </p>

                        <p>
                            <label class="container">
                                <input class="indicator" name="indicator" type="radio"  v-model="indic" @change="myFunction('sma')"/>
                                <span class="checkmark"></span>
                                <span>SMA</span>
                            </label>
                        </p>
                        <p>
                            <label class="container">
                                <input class="indicator" name="indicator" type="radio"  v-model="indic" @change="myFunction('durian')" checked/>
                                <span class="checkmark"></span>
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
                                <input class="setting-input" type="number" placeholder="70 - 99" v-model="overbought_value" >
                                <label for="icon_telephone" class="setting-symbol">%</label>

                                <p class="setting-label">Oversold %</p>
                                <input class="setting-input" type="number" placeholder="1 - 30" v-model="oversold_value">
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
                                <input class="setting-input" type="number" placeholder="70 - 99" v-model="ema_value1">
                                <label for="icon_telephone" class="setting-symbol">%</label>

                                <p class="setting-label">Oversold %</p>
                                <input class="setting-input" id="icon_telephone" type="number" placeholder="1 - 30" v-model="ema_value2">
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
                                <input class="setting-input" type="number" placeholder="Entry Value" v-model="entry_value" required>

                                <p class="setting-label">Percentage</p>
                                <input class="setting-input" type="number" placeholder="Percentage" v-model="percentage_value" required>                                

                                <br>
                                <!-- <p class="setting-label">Exit Value</p>
                                <input class="setting-input" type="text" placeholder="Exit Value" v-model="exit_value" required> -->
                                <p class="setting-label">Amount</p>
                                <input class="setting-input" type="number" placeholder="Amount" v-model="amount" required>

                                <p class="setting-label">Stop Loss</p>
                                <input class="setting-input" type="number" placeholder="Stop Loss" v-model="stop_value" required>

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
                                <input class="setting-input" type="number" placeholder="Gap value" v-model="gap_value" required>

                                <p class="setting-label">Amount</p>
                                <input class="setting-input" type="number" placeholder="Amount" v-model="durian_amount" required>

                                <br>
                                <p class="setting-label">Buy pending</p>
                                <input class="setting-input" type="number" placeholder="Buy pending" v-model="buy_pend" required>

                                <p class="setting-label">Sell pending</p>
                                <input class="setting-input" type="number" placeholder="Sell pending" v-model="sell_pend" required>

                                <br>
                                <p class="setting-label">Buy Gap</p>
                                <input class="setting-input" type="number" placeholder="buy gap" v-model="buy_gap" required>

                                <p class="setting-label">Sell gap</p>
                                <input class="setting-input" type="number" placeholder="Sell gap" v-model="sell_gap" required>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div id="three-indicator-setting">
                    <div class="row">
                        <div class="input-field col s12">
                        <p>Exchange :</p>
                            <select class="exchange" v-model="exchange" style="height:50px; display:block" required>
                                <option value="BINANCE">BINANCE</option>
                                <option value="COINEX">COINEX</option>
                                <option value="JONVI">JONVI</option>
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


                    <div class="row" id="trading_pair">
                        <div class="input-field col s12">
                            <p>Trading Pair :</p>
                            <select class="trading_pair" v-model="trading_pair" style="height:50px; display:block" required>
                                <option value="BTCUSDT">BTC/USDT</option>
                                <option value="BCHUSDT">BCH/USDT</option>
                                <option value="JEUSDT">JE/USDT</option>
                                <option value="ETHUSDT">ETH/USDT</option>
                                <option value="LTCUSDT">LTC/USDT</option>
                                <option value="ETHBTC">ETH/BTC</option>
                                <option value="JEBTC">JE/BTC</option>
                                <option value="LTCBTC">LTC/BTC</option>
                                <option value="BCHBTC">BCH/BTC</option>
                                <option value="JEeMYR">JE/eMYR</option>
                                <option value="BTCeMYR">BTC/eMYR</option>
                                <option value="BCHeMYR">BCH/eMYR</option>
                                <option value="ETHeMYR">ETH/eMYR</option>
                                <option value="USDTeMYR">USDT/eMYR</option>
                            </select>    
                        </div>
                    </div>

                    
                </div>
                <div id="durian-indicator-setting">
                    <div class="row">
                        <div class="input-field col s12">
                        <p>Exchange :</p>
                            <select class="exchange" v-model="durian_exchange" style="height:50px; display:block" required>
                                <option value="BINANCE">BINANCE</option>
                                <option value="COINEX">COINEX</option>
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

                    <div class="row" id="durian_trading_pair">
                        <div class="input-field col s12">
                            <p>Durian Trading Pair :</p>

                            <select class="trading_pair" v-model="durian_trading_pair" style="height:50px; display:block" required>
                                <option value="BTCUSDT">BTC/USDT</option>
                                <option value="BCHUSDT">BCH/USDT</option>
                                <option value="JEUSDT">JE/USDT</option>
                                <option value="ETHUSDT">ETH/USDT</option>
                                <option value="LTCUSDT">LTC/USDT</option>
                                <option value="ETHBTC">ETH/BTC</option>
                                <option value="JEBTC">JE/BTC</option>
                                <option value="LTCBTC">LTC/BTC</option>
                                <option value="BCHBTC">BCH/BTC</option>
                                <option value="JEeMYR">JE/eMYR</option>
                                <option value="BTCeMYR">BTC/eMYR</option>
                                <option value="BCHeMYR">BCH/eMYR</option>
                                <option value="ETHeMYR">ETH/eMYR</option>
                                <option value="USDTeMYR">USDT/eMYR</option>
                                <option value="XMRUSDT">XMR/USDT</option>
                            </select>    
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <p>
                            <label>
                                <input id="checkedbox" type="checkbox" class="filled-in" v-model="checkbox" :value="true" @change="check()" />
                                <span>Active</span>
                            </label>
                        </p>
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
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import firebaseInit from './firebaseInit';


export default {
    name: 'new-bot',
    data () {
        return {
            indicator: null,
            overbought_value: null,
            oversold_value: null,
            entry_value: null,
            amount:null,
            // exit_value: null,
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
            bot_name : null,
            indic:null,
            gap_value:0,
            buy_pend:null,
            sell_pend:null,
            durian_amount:null,
            durian_exchange:null,
            durian_trading_pair:null,
            checkbox:null,
            buy_gap:null,
            sell_gap: null
        }
    },

    methods: {
        myFunction: function(evt){
            this.$emit("change", evt);
            if (evt == "rsi") {
                document.getElementById("rsi-setting").style.display = "block"
                document.getElementById("common-setting").style.display = "block"
                document.getElementById("ema-setting").style.display = "none"
                document.getElementById("durian-setting").style.display = "none"
                document.getElementById("durian-indicator-setting").style.display = "none"
                document.getElementById("three-indicator-setting").style.display = "block"
                document.getElementById("trading_pair").style.display = "block"
                document.getElementById("durian_trading_pair").style.display = "none"
            } else if(evt == "ema") {
                document.getElementById("ema-setting").style.display = "block"
                document.getElementById("common-setting").style.display = "block"
                document.getElementById("rsi-setting").style.display = "none"
                document.getElementById("durian-setting").style.display = "none"
                document.getElementById("durian-indicator-setting").style.display = "none"
                document.getElementById("three-indicator-setting").style.display = "block"
                document.getElementById("trading_pair").style.display = "block"
                document.getElementById("durian_trading_pair").style.display = "none"
            } else if(evt=="sma"){
                document.getElementById("common-setting").style.display = "block"
                document.getElementById("ema-setting").style.display = "none"
                document.getElementById("durian-setting").style.display = "none"
                document.getElementById("rsi-setting").style.display = "none"
                document.getElementById("durian-indicator-setting").style.display = "none"
                document.getElementById("three-indicator-setting").style.display = "block"
                document.getElementById("trading_pair").style.display = "block"
                document.getElementById("durian_trading_pair").style.display = "none"
            }else if(evt=="durian"){
                document.getElementById("durian-setting").style.display = "block"
                document.getElementById("common-setting").style.display = "none"
                document.getElementById("ema-setting").style.display = "none"
                document.getElementById("rsi-setting").style.display = "none"
                document.getElementById("three-indicator-setting").style.display = "none"
                document.getElementById("durian-indicator-setting").style.display = "block"
                document.getElementById("trading_pair").style.display = "none"
                document.getElementById("durian_trading_pair").style.display = "block"

            }
            this.indicator = evt
        },
        saveBot: function (){
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            let autoId = ''
            for (let i = 0; i < 5; i++) {
                autoId += chars.charAt(Math.floor(Math.random() * chars.length))
            }
            const username = firebase.auth().currentUser
            console.log("USERNAME : ", username)
            console.log(this.indicator)
            if(this.indicator == "rsi"){
                this.indicator = this.indicator,
                this.overbought_value = parseFloat( this.overbought_value),
                this.oversold_value = parseFloat(this.oversold_value),
                this.entry_value = parseFloat(this.entry_value),
                this.amount = parseFloat(this.amount),
                //this.exit_value = this.exit_value,
                this.percentage_value = parseFloat(this.percentage_value),
                this.stop_value = parseFloat(this.stop_value),
                this.exchange = this.exchange,
                this.api_key = this.api_key,
                this.secret_key = this.secret_key,
                this.trading_pair = this.trading_pair,
                this.ema_value1 = 0,
                this.ema_value2 = 0,
                this.bot_id = autoId,
                this.uid = firebase.auth().currentUser.uid,
                this.bot_name = this.bot_name,
                this.gap_value  = 0,
                this.buy_pend  = 0,
                this.sell_pend  = 0,
                this.durian_amount  = 0,
                this.durian_exchange = 0,
                this.durian_trading_pair = 0,
                this.checkbox = this.checkbox,
                this.buy_gap = 0,
                this.sell_gap = 0
            }else if(this.indicator == "ema"){
                this.icator = this.indicator,
                this.overbought_value = 0,
                this.oversold_value = 0,
                this.entry_value = parseFloat(this.entry_value),
                this.amount = parseFloat(this.amount),
                //this.exit_value = this.exit_value,
                this.percentage_value = parseFloat(this.percentage_value),
                this.stop_value = parseFloat(this.stop_value),
                this.exchange = this.exchange,
                this.api_key = this.api_key,
                this.secret_key = this.secret_key,
                this.trading_pair = this.trading_pair,
                this.ema_value1 = parseFloat(this.ema_value1),
                this.ema_value2 = parseFloat(this.ema_value2),
                this.bot_id = autoId,
                this.uid = firebase.auth().currentUser.uid,
                this.bot_name = this.bot_name,
                this.gap_value  = 0,
                this.buy_pend  = 0,
                this.sell_pend  = 0,
                this.durian_amount  = 0,
                this.durian_exchange = 0,
                this.durian_trading_pair = 0,
                this.checkbox = this.checkbox,
                this.buy_gap = 0,
                this.sell_gap = 0
            }else if(this.indicator == "sma"){
                this.indicator = this.indicator,
                this.overbought_value = 0,
                this.oversold_value = 0,
                this.entry_value = parseFloat(this.entry_value),
                this.amount = parseFloat(this.amount),
                //this.exit_value = this.exit_value,
                this.percentage_value = parseFloat(this.percentage_value),
                this.stop_value = parseFloat(this.stop_value),
                this.exchange = this.exchange,
                this.api_key = this.api_key,
                this.secret_key = this.secret_key,
                this.trading_pair = this.trading_pair,
                this.ema_value1 = 0,
                this.ema_value2 = 0,
                this.bot_id = autoId,
                this.uid = firebase.auth().currentUser.uid,
                this.bot_name = this.bot_name,
                this.gap_value  = 0,
                this.buy_pend  = 0,
                this.sell_pend  = 0,
                this.durian_amount  = 0,
                this.durian_exchange = 0,
                this.durian_trading_pair = 0,
                this.checkbox = this.checkbox,
                this.buy_gap = 0,
                this.sell_gap = 0
            }else if(this.indicator == "durian"){
                this.indicator = this.indicator,
                this.overbought_value = 0,
                this.oversold_value = 0,
                this.entry_value = 0,
                this.amount = 0,
                //this.exit_value = 0,
                this.percentage_value = 0,
                this.stop_value = 0,
                this.exchange = 0,
                this.api_key = this.api_key,
                this.secret_key = this.secret_key,
                this.trading_pair = 0,
                this.ema_value1 = 0,
                this.ema_value2 = 0
                this.bot_id = autoId,
                this.uid = firebase.auth().currentUser.uid,
                this.bot_name = this.bot_name,
                this.gap_value  = parseFloat(this.gap_value),
                this.buy_pend  =parseFloat( this.buy_pend),
                this.sell_pend  = parseFloat(this.sell_pend),
                this.durian_amount  = parseFloat(this.durian_amount),
                this.durian_exchange = this.durian_exchange,
                this.durian_trading_pair = this.durian_trading_pair,
                this.checkbox = this.checkbox,
                this.buy_gap = parseFloat(this.buy_gap),
                this.sell_gap = parseFloat(this.sell_gap)
            }

            if (this.indicator != null && this.buy_gap != null &&this.sell_gap != null &&this.durian_amount != null &&this.durian_exchange != null && this.durian_trading_pair != null && this.checkbox != null&& this.bot_id != null && this.bot_name != null && this.gap_value != null && this.buy_pend !=null && this.sell_pend != null&& this.stop_value != null && this.exchange !=null && this.api_key != null && this.secret_key != null && this.trading_pair != null && this.ema_value1 != null &&this.ema_value2!=null&& this.percentage_value != null && this.amount != null&& this.entry_value!= null && this.oversold_value != null && this.overbought_value !=null ) {
                db.collection('trading_bot').add({
                    indicator: this.indicator,
                    overbought_value: this.overbought_value,
                    oversold_value: this.oversold_value,
                    entry_value: this.entry_value,
                    amount:this.amount,
                    //exit_value: this.exit_value,
                    percentage_value: this.percentage_value,
                    stop_value: this.stop_value,
                    exchange: this.exchange,
                    api_key: this.api_key,
                    secret_key: this.secret_key,
                    trading_pair: this.trading_pair,
                    ema_value1: this.ema_value1,
                    ema_value2: this.ema_value2,
                    bot_id: autoId,
                    uid: firebase.auth().currentUser.uid,
                    bot_name:this.bot_name,
                    gap_value :this.gap_value,
                    buy_pend : this.buy_pend,
                    sell_pend : this.sell_pend,
                    durian_amount : this.durian_amount,
                    durian_exchange : this.durian_exchange,
                    durian_trading_pair: this.durian_trading_pair,
                    checkbox : this.checkbox,
                    buy_gap : this.buy_gap,
                    sell_gap : this.sell_gap
                })
                .then(docRef => {
                    this.$router.push({ name: 'view-bot', params: { bot_id: this.bot_id }})
                })
                .catch(error => console.log(err))
            }
        },
        check () {
            console.log(this.checkbox)
        }
    }
}

</script>

<style scoped>
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
input.bot_name {
    width:200px;
    border: 2px solid rgba(0,0,0,0.2);
    border-radius: 5px;
    text-align: center;
    margin-right:40px;
}
span.bot_name {
    margin-right: 75px;
}

#three-indicator-setting,#common-setting {
    display: none;
}

</style>