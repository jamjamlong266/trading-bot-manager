<template>
    <div id="dashboard" class="container">
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>Bots</h4>
            </li>

            <li v-for="bot in bots" v-bind:key="bot.id" class="collection-item">
               {{bot.bot_name}}: {{bot.checkbox}}

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
        const uid = firebase.auth().currentUser.uid
        const dbref = db.collection('trading_bot')
        // .where("uid", "==", uid)
        
                // console.log(doc.id)
        dbref.where("uid", "==", uid).get().then( snapdata => {
            snapdata.forEach(doc => {
                console.log(doc.data().bot_name)
                const data = {
                    'id': doc.id,
                    'bot_id': doc.data().bot_id,
                    'exchange': doc.data().exchange,
                    'indicator': doc.data().indicator,
                    'api_key': doc.data().api_key,
                    'secret_key': doc.data().secret_key,
                    'bot_name': doc.data().bot_name,
                    'checkbox': doc.data().checkbox
                }
                this.bots.push(data)
            })
        })
    }
}
</script>
