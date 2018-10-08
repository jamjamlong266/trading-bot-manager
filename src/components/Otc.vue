<template>
<<<<<<< HEAD
  <h4>otc</h4>
=======
    <div class="container">
        <h4>the is otc</h4>
        <div class="row">
            <div class="col s12 m6 l6 input-card">
                <div class="crypto-card blue lighten-4 center">
                    <h6>Bitcoin</h6>
                    
                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="btc_buyPrice">
                        <label for="autocomplete-input">Buy Price</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="btc_buyAmount">
                        <label for="autocomplete-input">Amount</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="btc_sellPrice">
                        <label for="autocomplete-input">Sell Price</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="btc_sellAmount">
                        <label for="autocomplete-input">Amount</label>
                    </div>
                    
                    <button class="waves-effect waves-light btn-large">Update</button>


                </div>
            </div>
            <div class="col s12 m6 l6 input-card">
                <div class="crypto-card blue lighten-4 center">
                    <h6>USDT</h6>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="usdt_buyPrice">
                        <label for="autocomplete-input">Buy Price</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="usdt_buyAmount">
                        <label for="autocomplete-input">Amount</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="usdt_sellPrice">
                        <label for="autocomplete-input">Sell Price</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="usdt_sellAmount">
                        <label for="autocomplete-input">Amount</label>
                    </div>
                    
                    <button class="waves-effect waves-light btn-large">Update</button>
                </div>
            </div>
            <div class="col s12 m6 l6 input-card">
                <div class="crypto-card blue lighten-4 center">
                    <h6>ETH</h6>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="eth_buyPrice">
                        <label for="autocomplete-input">Buy Price</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="eth_buyAmount">
                        <label for="autocomplete-input">Amount</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="eth_sellPrice">
                        <label for="autocomplete-input">Sell Price</label>
                    </div>

                    <div class="input-field col s12 l6">
                        <input type="text" id="autocomplete-input" class="autocomplete" v-model="eth_sellAmount">
                        <label for="autocomplete-input">Amount</label>
                    </div>
                    
                    <button class="waves-effect waves-light btn-large">Update</button>
                </div>
            </div>
        </div>
    </div>
>>>>>>> 6379cda32ff8e536e009859bc5976eb701318dd8
</template>

<script>
export default {
<<<<<<< HEAD
  name: 'otc',
  data () {
    return {
      
    }
  }
}
</script>


=======
    name: 'otc',
    data: function() {
        return {
            btc_buyPrice: null,
            btc_buyAmount: null,
            btc_sellPrice: null,
            btc_sellAmount: null,
            usdt_buyPrice: null,
            usdt_buyAmount: null,
            usdt_sellPrice: null,
            usdt_sellAmount: null,
            eth_buyPrice: null,
            eth_buyAmount: null,
            eth_sellPrice: null,
            eth_sellAmount: null,
        };
    },
    methods: { }
}
</script>

<style scoped>
    .input-card {
        padding:10px 15px;
        box-sizing: border-box;
    }

    .crypto-card {
        width:100%;
        height:350px;
        background-color:red;
        border-radius: 10px;
        padding:15px;
        box-sizing: border-box;
    }
</style>
>>>>>>> 6379cda32ff8e536e009859bc5976eb701318dd8
