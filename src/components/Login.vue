<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel green white-text center">
                        <h3>Login</h3>
                        <form>
                            <div class="input-field">
                                <i class="material-icons prefix">email</i>
                                <input type="text" id="email" v-model="email">
                                <label class="white-text" for="email">Email</label>
                            </div>

                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input type="password" id="password" v-model="password">
                                <label class="white-text" for="password">Password</label>
                            </div>
                            <button class="btn btn-large grey lighten-4 black-text" v-on:click="login">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data: function() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login: function(e) {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then( (user) => {
                    var userData = firebase.auth().currentUser;
                    console.log(userData)
                    console.log(userData.uid)
                    alert(`You are logged in as ${userData.email}`);
                    if( userData.uid == "5R1JlSuH8ueGZZCdaP7QYtGEHvU2"){
                        this.$router.push('/otc')
                    }else {
                        location.reload();
                        this.$router.go({
                            path: this.$router.path
                        });
                    }
                    
                })
                .catch(err => {
                    console.log("NOOO",err)
                    alert(err)
                }) 

            e.preventDefault();
        }
    }
}
</script>


