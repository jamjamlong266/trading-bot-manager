<template>
    <div id="dashboard" class="container">
        <h3>Dashboard</h3>
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>Bots</h4>
            </li>

            <li v-for="bot in bots" v-bind:key="bot.id" class="collection-item">
               {{bot.bot_id}}: {{bot.indicator}}

               <router-link class="secondary-content" v-bind:to="{name: 'view-bot', params: {bot_id: bot.bot_id}}">
                   <i class="fa fa-eye"></i>
               </router-link>
            </li>
        </ul>

        <div class="fixed-action-btn">
            <router-link to="/new" class="btn-floating btn-large red">
                <i class="fa fa-plus"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'

export default {
    name: 'dashboard',
    data () {
        return {
            bots: [],
            // uid: null,
        }
    },
    created () {
        this.uid = firebase.auth().currentUser.uid;
        db.collection('trading_bot').where('uid', '==', this.uid).get().then( snapshot => {
        // db.collection('trading_bot').get().then( snapshot => {
            snapshot.forEach(doc => {
                console.log(doc)
                const data = {
                    'id': doc.id,
                    'bot_id': doc.data().bot_id,
                    'exchange': doc.data().exchange,
                    'indicator': doc.data().indicator,
                    'api_key': doc.data().api_key,
                    'secret_key': doc.data().secret_key
                }
                this.bots.push(data)
            })
        })
    }
}
</script>
