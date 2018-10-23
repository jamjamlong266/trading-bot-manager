<template>
  <div >
    <h3>Edit Bot</h3>
    <div class="row container">
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
                        <!-- <p>
                            <label class="container">
                                <input class="indicator" name="indicator" type="radio"  @change="myFunction('rsi')" disabled/>
                                <span class="checkmark"></span>
                                <span>RSI</span>
                            </label>
                        </p>

                        <p>
                            <label class="container">
                                <input class="indicator" name="indicator" type="radio"  @change="myFunction('ema')" disabled/>
                                <span class="checkmark"></span>
                                <span>EMA</span>
                            </label>
                        </p>

                        <p>
                            <label class="container">
                                <input class="indicator" name="indicator" type="radio"  @change="myFunction('sma')" disabled/>
                                <span class="checkmark"></span>
                                <span>SMA</span>
                            </label>
                        </p>
                        <p>
                            <label class="container">
                                <input class="indicator" name="indicator" type="radio"  @change="myFunction('durian')" disabled/>
                                <span class="checkmark"></span>
                                <span>DURIAN</span>
                            </label>
                        </p>
                        <p>
                            <label class="container">
                                <input class="indicator" name="indicator" type="radio"  v-model="indic" @change="myFunction('sup_res')" />
                                <span class="checkmark"></span>
                                <span>Support/Resistant</span>
                            </label>
                        </p> -->
                        <p>
                            <label class="container">
                                <input class="indicator" name="indicator" type="radio"  v-model="indic" @change="myFunction('normal')" checked/>
                                <span class="checkmark"></span>
                                <span>Normal</span>
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
                                <input class="setting-input" type="text" placeholder="70 - 99" v-model="overbought_value" required >
                                <label for="icon_telephone" class="setting-symbol">%</label>

                                <p class="setting-label">Oversold %</p>
                                <input class="setting-input" type="text" placeholder="1 - 30" v-model="oversold_value" required>
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
                                <input class="setting-input" type="text" placeholder="70 - 99" v-model="ema_value1" required>
                                <label for="icon_telephone" class="setting-symbol">%</label>

                                <p class="setting-label">Oversold %</p>
                                <input class="setting-input" id="icon_telephone" type="text" placeholder="1 - 30" v-model="ema_value2" required>
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
                                <input class="setting-input" type="text" placeholder="Entry Value" v-model="entry_value" required>

                                <p class="setting-label">Percentage</p>
                                <input class="setting-input" type="text" placeholder="Percentage" v-model="percentage_value" required>
                                <br>
                                <p class="setting-label">Amount</p>
                                <input class="setting-input" type="text" placeholder="Amount" v-model="amount" required>

                                <p class="setting-label">Stop Loss</p>
                                <input class="setting-input" type="text" placeholder="Stop Loss" v-model="stop_value" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="normal-setting">
                    <div class="col s12">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Normal Setting</span>
                                <br>
                                <p class="setting-label">Buy Zone</p>
                                <input class="setting-input" type="number" placeholder="Entry Value" v-model="normal_buy_zone" required>
                                <br>
                                <!-- <p class="setting-label">Exit Value</p>
                                <input class="setting-input" type="text" placeholder="Exit Value" v-model="exit_value" required> -->
                                <p class="setting-label">Amount</p>
                                <input class="setting-input" type="number" placeholder="Amount" step="0.01" v-model="normal_amount" required>

                                <p class="setting-label">Stop Loss</p>
                                <input class="setting-input" type="number" placeholder="Stop Loss" v-model="normal_stop_value" required>
                                <br>
                                <p class="setting-label">Target 1</p>
                                <input class="setting-input" type="number"  v-model="normal_target_1" required>

                                <p class="setting-label">Target 2</p>
                                <input class="setting-input" type="number"  v-model="normal_target_2" required>   
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
                                <input class="setting-input" type="text" placeholder="Gap value" v-model="gap_value" required>

                                <p class="setting-label">Amount</p>
                                <input class="setting-input" type="text" placeholder="Amount" v-model="durian_amount" required>

                                <br>
                                <p class="setting-label">Buy pending</p>
                                <input class="setting-input" type="text" placeholder="Buy pending" v-model="buy_pend" required>

                                <p class="setting-label">Sell_pending</p>
                                <input class="setting-input" type="text" placeholder="Sell pending" v-model="sell_pend" required>

                                <br>
                                <p class="setting-label">Buy Gap</p>
                                <input class="setting-input" type="number" placeholder="buy gap" v-model="buy_gap" required>

                                <p class="setting-label">Sell gap</p>
                                <input class="setting-input" type="number" placeholder="Sell gap" v-model="sell_gap" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="sup_res-setting">
                    <div class="col s12">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Support/Resistant Setting</span>
                                <br>
                                <p class="setting-label">Support Level</p>
                                <input class="setting-input" type="number" placeholder="Support Value" v-model="support_value" required>

                                <p class="setting-label">Resistant Level</p>
                                <input class="setting-input" type="number" placeholder="Resistant Level" v-model="resistant_value" required>

                                <br>
                                <p class="setting-label">Amount</p>
                                <input class="setting-input" type="number" placeholder="Amount" v-model="sup_res_amount" required>

                                <p class="setting-label">Stop loss</p>
                                <input class="setting-input" type="number" placeholder="Stop loss" v-model="sup_res_stop_loss" required>

                                <br>
                                <p class="setting-label">First sell</p>
                                <input class="setting-input" type="number" placeholder="First sell" v-model="sell_1" required>

                                <p class="setting-label">Second sell</p>
                                <input class="setting-input" type="number" placeholder="Second sell" v-model="sell_2" required>
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
                                <!-- <option value="COINEX">COINEX</option>
                                <option value="JONVI">JONVI</option> -->
                            </select>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <span>API KEY</span>
                            <input  class="api_key" type="text" v-model="api_key" required>
                            
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <span>SECRET KEY</span>
                            <input  class="secret_key" type="text" v-model="secret_key" required>
                            
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
                                <option value="BAT/BTC">BAT/BTC</option>
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
                            <span>API KEY</span>
                            <input  class="api_key" type="text" v-model="api_key" required>
                            
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <span>SECRET KEY</span>
                            <input  class="secret_key" type="text" v-model="secret_key" required>
                            
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <p>Trading Pair :</p>
                            <select class="trading_pair" v-model="durian_trading_pair" style="height:50px; display:block" required>
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
                                <option value="XMRUSDT">XMR/USDT</option>
                                <option value="CETUSDT">CET/USDT</option>
                            </select>    
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <p>
                            <label>
                                <input id="checkedbox" type="checkbox" class="filled-in" v-model="checkbox"  @change="check()" />
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
  export default {
    name: 'edit-bot',
    data () {
      return {
        indicator: 'normal',
        overbought_value: null,
        oversold_value: null,
        entry_value: null,
        amount:null,
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
        gap_value:null,
        buy_pend:null,
        sell_pend:null,
        durian_amount:null,
        durian_exchange: null,
        durian_trading_pair:null,
        checkbox:null,
        buy_gap :null,
        sell_gap : null,
        support_value:null,
        resistant_value:null,
        sup_res_stop_loss:null,
        sup_res_amount:null,
        sell_1:null,
        sell_2:null,
        indic:null,
        normal_amount:null,
        normal_buy_zone:null,
        normal_target_1:null,
        normal_target_2:null,
        normal_stop_value:null
      }
    },
    beforeRouteEnter (to, from, next) {
      db.collection('trading_bot').where('bot_id', '==', to.params.bot_id).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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
                    vm.percentage_value = doc.data().percentage_value,
                    vm.stop_value = doc.data().stop_value,
                    vm.amount = doc.data().amount,
                    vm.gap_value = doc.data().gap_value,
                    vm.buy_pend = doc.data().buy_pend,
                    vm.sell_pend = doc.data().sell_pend,
                    vm.durian_amount = doc.data().durian_amount,
                    vm.uid = doc.data().uid,
                    vm.durian_exchange = doc.data().durian_exchange,
                    vm.durian_trading_pair = doc.data().durian_trading_pair,
                    vm.checkbox = doc.data().checkbox,
                    vm.buy_gap = doc.data().buy_gap,
                    vm.sell_gap = doc.data().sell_gap,
                    vm.support_value = doc.data().support_value,
                    vm.resistant_value = doc.data().resistant_value,
                    vm.sup_res_stop_loss = doc.data().sup_res_stop_loss,
                    vm.sup_res_amount = doc.data().sup_res_amount,
                    vm.sell_1 = doc.data().sell_1,
                    vm.sell_2 = doc.data().sell_2,
                    vm.normal_amount= doc.data().normal_amount,
                    vm.normal_buy_zone= doc.data().normal_buy_zone,
                    vm.normal_target_1= doc.data().normal_target_1,
                    vm.normal_target_2= doc.data().normal_target_2,
                    vm.normal_stop_value = doc.data().normal_stop_value
          })
        })
      })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            db.collection('trading_bot').where('bot_id', '==', to.params.bot_id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.bot_id = doc.data().bot_id,
                this.exchange = doc.data().exchange,
                this.indicator = doc.data().indicator,
                this.api_key = doc.data().api_key,
                this.secret_key = doc.data().secret_key,
                this.trading_pair = doc.data().trading_pair,
                this.amount =doc.data().amount,
                this.stop_value = doc.data().stop_value,
                this.percentage_value = doc.data().percentage_value,
                this.entry_value = doc.data().entry_value,
                this.ema_value1 = doc.data().ema_value1,
                this.ema_value2 = doc.data().ema_value2,
                this.overbought_value = doc.data().overbought_value,
                this.oversold_value = doc.data().oversold_value,
                this.gap_value = doc.data().gap_value,
                this.buy_pend = doc.data().buy_pend,
                this.sell_pend = doc.data().sell_pend,
                this.durian_amount = doc.data().durian_amount,
                this.uid = doc.data().uid,
                this.durian_exchange = doc.data().durian_exchange,
                this.durian_trading_pair = doc.data().durian_trading_pair,
                this.checkbox = doc.data().checkbox,
                this.buy_gap = doc.data().buy_gap,
                this.sell_gap = doc.data().sell_gap,
                this.support_value = doc.data().support_value,
                this.resistant_value = doc.data().resistant_value,
                this.sup_res_stop_loss = doc.data().sup_res_stop_loss,
                this.sup_res_amount = doc.data().sup_res_amount,
                this.sell_1 = doc.data().sell_1,
                this.sell_2 = doc.data().sell_2,
                this.normal_amount= doc.data().normal_amount,
                this.ormal_buy_zone= doc.data().normal_buy_zone,
                this.normal_target_1= doc.data().normal_target_1,
                this.normal_target_2= doc.data().normal_target_2,
                this.normal_stop_value = doc.data().normal_stop_value
            })
            })
        },
        check () {
            console.log(this.checkbox)
        },
        myFunction: function(evt){
            this.$emit("change", evt);
            console.log(evt)
            if (evt == "rsi") {
                document.getElementById("rsi-setting").style.display = "block"
                document.getElementById("common-setting").style.display = "block"
                document.getElementById("ema-setting").style.display = "none"
                document.getElementById("durian-setting").style.display = "none"
                document.getElementById("durian-indicator-setting").style.display = "none"
                document.getElementById("three-indicator-setting").style.display = "block"
                document.getElementById("sup_res-setting").style.display = "none"
                document.getElementById("normal-setting").style.display = "none"
            } else if(evt == "ema") {
                document.getElementById("ema-setting").style.display = "block"
                document.getElementById("common-setting").style.display = "block"
                document.getElementById("rsi-setting").style.display = "none"
                document.getElementById("durian-setting").style.display = "none"
                document.getElementById("durian-indicator-setting").style.display = "none"
                document.getElementById("three-indicator-setting").style.display = "block"
                document.getElementById("sup_res-setting").style.display = "none"
                document.getElementById("normal-setting").style.display = "none"
            } else if(evt=="sma"){
                document.getElementById("common-setting").style.display = "block"
                document.getElementById("ema-setting").style.display = "none"
                document.getElementById("durian-setting").style.display = "none"
                document.getElementById("rsi-setting").style.display = "none"
                document.getElementById("durian-indicator-setting").style.display = "none"
                document.getElementById("three-indicator-setting").style.display = "block"
                document.getElementById("sup_res-setting").style.display = "none"
                document.getElementById("normal-setting").style.display = "none"
            }else if(evt=="durian"){
                document.getElementById("durian-setting").style.display = "block"
                document.getElementById("common-setting").style.display = "none"
                document.getElementById("ema-setting").style.display = "none"
                document.getElementById("rsi-setting").style.display = "none"
                document.getElementById("three-indicator-setting").style.display = "none"
                document.getElementById("durian-indicator-setting").style.display = "block"
                document.getElementById("sup_res-setting").style.display = "none"
                document.getElementById("normal-setting").style.display = "none"
            }else if(evt=="sup_res"){
                document.getElementById("durian-setting").style.display = "none"
                document.getElementById("common-setting").style.display = "none"
                document.getElementById("ema-setting").style.display = "none"
                document.getElementById("rsi-setting").style.display = "none"
                document.getElementById("three-indicator-setting").style.display = "block"
                document.getElementById("durian-indicator-setting").style.display = "none"
                document.getElementById("sup_res-setting").style.display = "block"
                document.getElementById("normal-setting").style.display = "none"
            }else if(evt=="normal"){
                document.getElementById("durian-setting").style.display = "none"
                document.getElementById("common-setting").style.display = "none"
                document.getElementById("ema-setting").style.display = "none"
                document.getElementById("rsi-setting").style.display = "none"
                document.getElementById("three-indicator-setting").style.display = "block"
                document.getElementById("durian-indicator-setting").style.display = "none"
                document.getElementById("sup_res-setting").style.display = "none"
                document.getElementById("normal-setting").style.display = "block"
            }
            this.indicator = evt
        },
        updateBot () {
                if(this.indicator == "rsi"){
                    db.collection('trading_bot').where('bot_id', '==', this.bot_id).get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            indicator : this.indicator,
                            overbought_value : parseFloat(this.overbought_value),
                            oversold_value : parseFloat(this.oversold_value),
                            entry_value : parseFloat(this.entry_value),
                            amount : parseFloat(this.amount),
                            percentage_value : parseFloat(this.percentage_value),
                            stop_value : parseFloat(this.stop_value),
                            exchange: this.exchange,
                            api_key : this.api_key,
                            secret_key: this.secret_key,
                            trading_pair : this.trading_pair,
                            ema_value1 : 0,
                            ema_value2 : 0,
                            bot_id : this.bot_id,
                            gap_value : 0,
                            buy_pend : 0,
                            sell_pend : 0,
                            durian_amount : 0,
                            uid : this.uid,
                            durian_exchange : 0,
                            durian_trading_pair : 0,
                            checkbox :this.checkbox,
                            buy_gap :0,
                            sell_gap : 0,
                            support_value: 0,
                            resistant_value: 0,
                            sup_res_stop_loss :0,
                            sup_res_amount: 0,
                            sell_1: 0,
                            sell_2: 0,
                            normal_amount:0,
                            normal_buy_zone:0,
                            normal_target_1:0,
                            normal_target_2:0,
                            normal_stop_value:0
                        })
                        .then(() => {
                            this.$router.push({ name: 'view-bot', params: { bot_id: this.bot_id }})
                        });
                    })
                })
                }else if(this.indicator == "ema"){
                    db.collection('trading_bot').where('bot_id', '==', this.bot_id).get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            indicator : this.indicator,
                            overbought_value : 0,
                            oversold_value : 0,
                            entry_value : parseFloat(this.entry_value),
                            amount : parseFloat(this.amount),
                            percentage_value : parseFloat(this.percentage_value),
                            stop_value :parseFloat( this.stop_value),
                            exchange: this.exchange,
                            api_key : this.api_key,
                            secret_key: this.secret_key,
                            trading_pair : this.trading_pair,
                            ema_value1 :parseFloat( this.ema_value1),
                            ema_value2 :parseFloat( this.ema_value2),
                            bot_id : this.bot_id,
                            gap_value : 0,
                            buy_pend : 0,
                            sell_pend : 0,
                            durian_amount : 0,
                            uid : this.uid,
                            durian_exchange : 0,
                            durian_trading_pair : 0,
                            checkbox :this.checkbox,
                            buy_gap :0,
                            sell_gap : 0,
                            support_value: 0,
                            resistant_value: 0,
                            sup_res_stop_loss :0,
                            sup_res_amount: 0,
                            sell_1: 0,
                            sell_2: 0,
                            normal_amount:0,
                            normal_buy_zone:0,
                            normal_target_1:0,
                            normal_target_2:0,
                            normal_stop_value:0
                        })
                        .then(() => {
                            this.$router.push({ name: 'view-bot', params: { bot_id: this.bot_id }})
                            // this.$router.push('/')
                        });
                    })
                })
                }else if(this.indicator == "sma"){
                    db.collection('trading_bot').where('bot_id', '==', this.bot_id).get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            indicator : this.indicator,
                            overbought_value : 0,
                            oversold_value : parseFloat(this.oversold_value),
                            entry_value : parseFloat(this.entry_value),
                            amount : parseFloat(this.amount),
                            percentage_value : parseFloat(this.percentage_value),
                            stop_value : parseFloat(this.stop_value),
                            exchange: this.exchange,
                            api_key : this.api_key,
                            secret_key: this.secret_key,
                            trading_pair : this.trading_pair,
                            ema_value1 : 0,
                            ema_value2 : 0,
                            bot_id : this.bot_id,
                            gap_value : 0,
                            buy_pend : 0,
                            sell_pend : 0,
                            durian_amount : 0,
                            uid : this.uid,
                            durian_exchange : 0,
                            durian_trading_pair : 0,
                            checkbox :this.checkbox,
                            buy_gap :0,
                            sell_gap : 0,
                            support_value: 0,
                            resistant_value: 0,
                            sup_res_stop_loss :0,
                            sup_res_amount: 0,
                            sell_1: 0,
                            sell_2: 0,
                            normal_amount:0,
                            normal_buy_zone:0,
                            normal_target_1:0,
                            normal_target_2:0,
                            normal_stop_value:0
                        })
                        .then(() => {
                            this.$router.push({ name: 'view-bot', params: { bot_id: this.bot_id }})
                            // this.$router.push('/')
                        });
                    })
                })
                }else if(this.indicator == "durian"){
                    db.collection('trading_bot').where('bot_id', '==', this.bot_id).get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            indicator : this.indicator,
                            overbought_value : 0,
                            oversold_value : 0,
                            entry_value : 0,
                            amount : 0,
                            percentage_value : 0,
                            stop_value : 0,
                            exchange: 0,
                            api_key : this.api_key,
                            secret_key: this.secret_key,
                            trading_pair : 0,
                            ema_value1 : 0,
                            ema_value2 : 0,
                            bot_id : this.bot_id,
                            gap_value : parseFloat(this.gap_value),
                            buy_pend : parseFloat(this.buy_pend),
                            sell_pend : parseFloat(this.sell_pend),
                            durian_amount : parseFloat(this.durian_amount),
                            uid : this.uid,
                            durian_exchange : this.durian_exchange,
                            durian_trading_pair : this.durian_trading_pair,
                            checkbox :this.checkbox,
                            buy_gap :parseFloat(this.buy_gap),
                            sell_gap :parseFloat( this.sell_gap),
                            support_value: 0,
                            resistant_value: 0,
                            sup_res_stop_loss :0,
                            sup_res_amount: 0,
                            sell_1: 0,
                            sell_2: 0,
                            normal_amount:0,
                            normal_buy_zone:0,
                            normal_target_1:0,
                            normal_target_2:0,
                            normal_stop_value:0
                        })
                        .then(() => {
                            this.$router.push({ name: 'view-bot', params: { bot_id: this.bot_id }})
                            // this.$router.push('/')
                        });
                    })
                })
                }else if(this.indicator == "sup_res"){
                    db.collection('trading_bot').where('bot_id', '==', this.bot_id).get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            indicator : this.indicator,
                            overbought_value : 0,
                            oversold_value : 0,
                            entry_value : 0,
                            amount : 0,
                            percentage_value: 0,
                            stop_value : 0,
                            exchange : this.exchange,
                            api_key : this.api_key,
                            secret_key : this.secret_key,
                            trading_pair : this.trading_pair,
                            ema_value1 : 0,
                            ema_value2 : 0,
                            bot_id : this.bot_id,
                            uid : this.uid,
                            gap_value  : 0,
                            buy_pend  : 0,
                            sell_pend  : 0,
                            durian_amount : 0,
                            durian_exchange : 0,
                            durian_trading_pair : 0,
                            checkbox : this.checkbox,
                            buy_gap : 0,
                            sell_gap : 0,
                            support_value: parseFloat(this.support_value),
                            resistant_value: parseFloat(this.resistant_value),
                            sup_res_stop_loss :parseFloat(this.sup_res_stop_loss),
                            sup_res_amount: parseFloat(this.sup_res_amount),
                            sell_1: parseFloat(this.sell_1),
                            sell_2: parseFloat(this.sell_2),
                            normal_amount:0,
                            normal_buy_zone:0,
                            normal_target_1:0,
                            normal_target_2:0,
                            normal_stop_value:0
                        })
                        .then(() => {
                            this.$router.push({ name: 'view-bot', params: { bot_id: this.bot_id }})
                            // this.$router.push('/')
                        });
                    })
                })
            }else if(this.indicator == "normal"){
                    db.collection('trading_bot').where('bot_id', '==', this.bot_id).get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            indicator : "normal",
                            overbought_value : 0,
                            oversold_value : 0,
                            entry_value : 0,
                            amount : 0,
                            percentage_value: 0,
                            stop_value : 0,
                            exchange : this.exchange,
                            api_key : this.api_key,
                            secret_key : this.secret_key,
                            trading_pair : this.trading_pair,
                            ema_value1 : 0,
                            ema_value2 : 0,
                            bot_id : this.bot_id,
                            uid : this.uid,
                            gap_value  : 0,
                            buy_pend  : 0,
                            sell_pend  : 0,
                            durian_amount : 0,
                            durian_exchange : 0,
                            durian_trading_pair : 0,
                            checkbox : this.checkbox,
                            buy_gap : 0,
                            sell_gap : 0,
                            support_value: 0,
                            resistant_value: 0,
                            sup_res_stop_loss :0,
                            sup_res_amount: 0,
                            sell_1: 0,
                            sell_2: 0,
                            normal_amount:parseFloat(this.normal_amount),
                            normal_buy_zone:parseFloat(this.normal_buy_zone),
                            normal_target_1:parseFloat(this.normal_target_1),
                            normal_target_2:parseFloat(this.normal_target_2),
                            normal_stop_value:parseFloat(this.normal_stop_value)
                        })
                        .then(() => {
                            this.$router.push({ name: 'view-bot', params: { bot_id: this.bot_id }})
                            // this.$router.push('/')
                        });
                    })
                })
            }
        
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

#rsi-setting, #ema-setting ,#sup_res-setting,#common-setting,#durian-indicator-setting,#durian-setting{
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
    border: 2px solid rgba(0,0,0,nu0ll.2);
    border-radius: 5px;
    text-align: center;
    margin-right:40px;
}
input.bot_name {
    width:20px;
    border: 2px solid rgba(0,0,0,0.2);
    border-radius: 5px;
    text-align: center;
    margin-right:40px;
}
span.bot_name {
    margin-right: 75px;
}

</style>