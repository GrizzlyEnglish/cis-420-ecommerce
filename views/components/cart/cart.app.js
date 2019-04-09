Vue.component('sk-cart', {
    data: function () {
        return {
            cart: shopping_cart || []
        }
    },
    methods: {
        calcTotal: function () {
            var total = shopping_cart.reduce(function (accum, item){
                return accum + (item.basePrice * item.quantity);
            },0);
            return toCurrency(total, true);
        },
        calcItemTotal: function (product) {
            return toCurrency(product.basePrice * product.quantity, true);
        },
        deleteOption: function (product, index) {
            product.options.splice(index);
        }
    },
    template: `
        <div class="sk-blog">
            <div class="columns">
                <div class="column is-8">
                    <div class="columns is-multiline">
                        <div class="column is-12 has-text-centered" v-if="cart.length == 0">
                            <h1 class="is-size-3">Your cart is empty</h1>
                        </div>
                        <div class="column is-12" v-for="(product, index) in cart">
                            <div class="columns bordered">
                                <div class="column is-4">
                                    <figure>
                                        <img v-bind:src="product.image.src">
                                    </figure>
                                </div>
                                <div class="column is-8">
                                    <div class="columns is-multiline">
                                        <div class="column is-6">
                                            <div class="columns is-multiline">
                                            <div class="column is-12">
                                                <h1 class="is-size-4">{{product.name}}</h1>
                                            </div>
                                        <div class="column is-12">
                                            <h1 class="is-size-6">SubTotal: {{product.basePrice}}</h1>
                                        </div>
                                        <div class="column is-12">
                                            <label>Quantity</label>
                                            <input v-model="product.quantity" class="input" type="number" />
                                        </div>
                                        <div class="column is-12">
                                            <h1 class="is-size-6">Total: {{calcItemTotal(product)}}</h1>
                                        </div>
                                            </div>
                                        </div>
                                        <div class="column is-6" v-if="product.options !== undefned">
                                            <div class="columns is-multiline">
                                                <div class="column is-12" v-for="(option, index) in product.options">
                                                    <label>
                                                        {{option.name}}
                                                        <a v-on:click="deleteOption(product, index)"><i class="fa fa-times-circle"></i></a>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column is-12">
                                        <a>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="columns is-multiline cart-card">
                        <div class="column is-12 has-text-centered">
                            <h1 class="is-size-4">Cart Total</h1>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <h1 class="is-size-6"> {{calcTotal()}} </h1>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-primary">Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
});