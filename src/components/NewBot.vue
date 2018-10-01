<template>
    <div id="new-bot" class="container">
        <h3>New Bot</h3>
        
        <div class="row">
            <form @sumbit.prevent="saveBot" class="col s12">
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
<<<<<<< HEAD
                                <input class="setting-input" type="text" placeholder="70 - 99" v-model="overbought_rsi" required>
                                <label for="icon_telephone" class="setting-symbol">%</label>

                                <p class="setting-label">Oversold %</p>
                                <input class="setting-input" type="text" placeholder="1 - 30" v-model="oversold_rsi" required>
=======
                                <input class="setting-input" type="text" placeholder="70 - 99" v-model="overbought_value" >
                                <label for="icon_telephone" class="setting-symbol">%</label>

                                <p class="setting-label">Oversold %</p>
                                <input class="setting-input" type="text" placeholder="1 - 30" v-model="oversold_value">
>>>>>>> 67f6b21d34db19022952e525dc00616acc5b14bd
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
<<<<<<< HEAD
                                <input class="setting-input" type="text" placeholder="70 - 99" v-model="overbought_ema" required>
                                <label for="icon_telephone" class="setting-symbol">%</label>

                                <p class="setting-label">Oversold %</p>
                                <input class="setting-input" id="icon_telephone" type="text" placeholder="1 - 30" v-model="oversold_ema" required>
=======
                                <input class="setting-input" type="text" placeholder="70 - 99" v-model="ema_value1">
                                <label for="icon_telephone" class="setting-symbol">%</label>

                                <p class="setting-label">Oversold %</p>
                                <input class="setting-input" id="icon_telephone" type="text" placeholder="1 - 30" v-model="ema_value2">
>>>>>>> 67f6b21d34db19022952e525dc00616acc5b14bd
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
<<<<<<< HEAD
                                <input class="setting-input" type="text" placeholder="Amount" v-model="Amount" required>
=======
                                <input class="setting-input" type="text" placeholder="Amount" v-model="amount" required>
>>>>>>> 67f6b21d34db19022952e525dc00616acc5b14bd

                                <br>
                                <p class="setting-label">Exit Value</p>
                                <input class="setting-input" type="text" placeholder="Exit Value" v-model="exit_value" required>

                                <p class="setting-label">Percentage</p>
<<<<<<< HEAD
                                <input class="setting-input" type="text" placeholder="Percentage" v-model="percentage" required>

                                <br>
                                <p class="setting-label">Stop Loss</p>
                                <input class="setting-input" type="text" placeholder="Stop Loss" v-model="stop" required>
=======
                                <input class="setting-input" type="text" placeholder="Percentage" v-model="percentage_value" required>

                                <br>
                                <p class="setting-label">Stop Loss</p>
                                <input class="setting-input" type="text" placeholder="Stop Loss" v-model="stop_value" required>
>>>>>>> 67f6b21d34db19022952e525dc00616acc5b14bd
                            </div>
                        </div>
                    </div>
                    
                </div>

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


                <!-- <div class="row">
                    <div class="input-feid col s12">
                        <input  class="bot_id" type="text" v-model="bot_id" required>
                        <label>Bot ID</label>
                    </div>
                </div> -->

                
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
                        <select class="trading_pair" v-model="trading_pair" style="height:50px; display:block" required>
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
<<<<<<< HEAD
            value: null,
            indi: null,
            overbought_ema: null,
            oversold_ema: null,
            overbought_rsi: null,
            oversold_rsi: null,
            entry_value: null,
            exit_value: null,
            stop: null,
            Amount : null,
            percentage : null

=======
            indi: null
>>>>>>> 67f6b21d34db19022952e525dc00616acc5b14bd
        }
    },
    methods: {
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
            this.indicator = evt
        },
        saveBot: function (){
<<<<<<< HEAD
            // console.log(this.value);
            db.collection('trading_bot').add({
                bot_id: this.bot_id,
=======
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            let autoId = ''
            for (let i = 0; i < 5; i++) {
                autoId += chars.charAt(Math.floor(Math.random() * chars.length))
            }
            
            db.collection('trading_bot').add({
                indicator: this.indicator,
                overbought_value: this.overbought_value,
                oversold_value: this.oversold_value,
                entry_value: this.entry_value,
                amount:this.amount,
                exit_value: this.exit_value,
                percentage_value: this.percentage_value,
                stop_value: this.stop_value,
>>>>>>> 67f6b21d34db19022952e525dc00616acc5b14bd
                exchange: this.exchange,
                api_key: this.api_key,
                secret_key: this.secret_key,
                trading_pair: this.trading_pair,
<<<<<<< HEAD
                uid: firebase.auth().currentUser.uid,
                indicator: this.value,
                overbought_ema: this.overbought_ema,
                oversold_ema: this.oversold_ema,
                overbought_rsi: this.overbought_rsi,
                oversold_rsi: this.oversold_rsi,
                entry_value: this.entry_value,
                exit_value: this.exit_value,
                stop: this.stop,
                Amount : this.Amount,
                percentage : this.percentage
            })
            .then(docRef => this.$router.push('/'))
=======
                ema_value1: this.ema_value1,
                ema_value2: this.ema_value2,
                bot_id: autoId,
                uid: firebase.auth().currentUser.uid
            })
            .then(docRef => {
                this.$router.push('/')
            })
>>>>>>> 67f6b21d34db19022952e525dc00616acc5b14bd
            .catch(error => console.log(err))
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
</style>