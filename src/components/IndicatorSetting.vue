<template>
    <div id="indicator-setting">
        <h3>INDICATOR SETTING</h3>
        
        <div class="row">
            <form @sumbit.prevent="saveBot" class="col s12">
                <div class="rsi">
                    <div class="indicator">
                        <p>ENTRY</p>
                        <input class="entry_price" placeholder="entry_price" id="entry_price" type="text" >
                        <input class="amount" placeholder="amount" id="amount" type="text" >
                    </div>
                    <div class="line2">
                        <p>EXIT</p>
                        <input class="exit_price" placeholder="exit_percent" id="exit_price" type="text" >
                    </div>
                    <div class="line3">
                        <p>STOP</p>
                        <input class="stop_loss" placeholder="stop_price" id="stop_loss" type="text" >
                    </div>
                </div>
                <button type="sumbit" class="btn" @click="updateIndicator">Submit</button>
                <router-link to="/" class="btn grey">Cancel</router-link>
            </form>
            
        </div>
        
    </div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'

export default {
    name: 'indicator-setting',
    data () {
        return {
            bot_id: null,
            exchange: null,
            indicator: null,
            api_key: null,
            secret_key: null,
            trading_pair: null,
            entry_price: null,
            amount:null,
            exit_price:null,
            stop_loss:null
        }
    },
    
}
</script>

<style scoped>
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
input.exit_price{
    margin-left: 95px;
    width : 100px
}
div.indicator,.line2,.line3{
    display: flex
}


</style>

