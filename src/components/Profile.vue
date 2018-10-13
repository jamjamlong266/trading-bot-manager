<template>
    <div class="container">
        <div class="row">
            <div class="col s12 m8 offset-m2">
                    <div class="login card-panel grey lighten-4 black-text center">
                        <h3>Profile</h3>
                        <form>
                            <div class="input-field">
                                <input type="text" id="username" v-model="username">
                                <label for="username">Username</label>
                            </div>
                            <button v-on:click="update" class="btn btn-large grey lighten-4 black-text">Update</button>
                        </form>
                    </div>
                </div>
        </div>    
    </div>    
</template>

<script>
import firebase from 'firebase';
import db from './firebaseInit';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import firebaseInit from './firebaseInit';


export default {
    name: 'profile',
    data: function() {
        return {
            username: ''
        };
    },
    methods: {
        update: function(e) {
            var user = firebase.auth().currentUser;
            if (user != null) {  
                user.updateProfile({
                    displayName: this.username
                }).then( docRef => {
                    // Update successful.
                    // console.log("DONE", user)
                    this.$router.push('/')
                }).catch(function(error) {
                    // An error happened.
                });              
            }
        }
    }
}
</script>
