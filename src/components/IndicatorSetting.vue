<template>
    <div id="indicator-setting">
        <h3>INDICATOR SETTING</h3>
        
        <div class="row">
            <form @sumbit.prevent="indicatorupdate" class="col s12">
                <div class="row">
                    <div class="indicator">
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
                <button type="sumbit" class="btn" @click="indicatorupdate">Submit</button>
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
        return {//                  this page data
            bot_id: null,
            exchange: null,
            indicator: null,
            api_key: null,
            secret_key: null,
            trading_pair: null,
            price:null,
            amount:null,
            exit_percent:null,
            stop_loss:null
        }
    },
    beforeRouteEnter (to, from, next) {//           read firebase data 
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
    methods:{
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
        indicatorupdate () {
            db.collection('trading_bot').where('bot_id', '==', this.$route.params.bot_id).get()
            .then(snapshot => {
                snapshot.forEach( doc => {
                    doc.ref.update({
                        bot_id: doc.data().bot_id,
                        exchange: doc.data().exchange,
                        indicator: doc.data().indicator,
                        api_key: doc.data().api_key,
                        secret_key: doc.data().secret_key,
                        trading_pair: doc.data().trading_pair,
                        
                    })
                    .then( () => {
                        this.$router.push({name: 'view-bot', params: {bot_id: this.bot_id}})
                    })
                })
            }),
            db.collection('trading_bot').add({
                price:this.price,
                amount:this.amount,
                exit_percent:this.exit_percent,
                stop_loss:this.stop_loss
            })
            .then(docRef => this.$router.push({name: 'view-bot', params: {bot_id: this.bot_id}}))
        }
    }
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
input.exit_percent{
    margin-left: 95px;
    width : 100px
}
div.indicator,.line2,.line3{
    display: flex
}


</style>

