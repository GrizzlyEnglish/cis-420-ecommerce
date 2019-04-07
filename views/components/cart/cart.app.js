Vue.component('sk-cart', {
    data: function () {
        return {
            cart: shopping_cart || []
        }
    },
    methods: {
        
    },
    template: `
        <div class="sk-blog">
            <div class="columns">
                <div class="column is-8">
                    <div class="columns is-multiline">
                        <div class="column is-12" v-for="(product, index) in cart">
                            <div class="columns">
                                <div class="column is-4">
                                    <figure>
                                        <img v-bind:src="product.image.src">
                                    </figure>
                                </div>
                                <div class="column is-8">
                                    <div class="columns is-multiline">
                                        <div class="column is-12">
                                            <h1 class="is-size-4">{{product.name}}</h1>
                                        </div>
                                        <div class="column is-12">
                                            <div class="columns">
                                                <div class="column is-6">
                                                    <label>Quantity</label>
                                                    <input v-model="product.quantity" class="input" type="number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column is-12">
                                            <h1 class="is-size-6">Total: {{product.total}}</h1>
                                        </div>
                                        <div class="column is-12">
                                            <a>Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                </div>
            </div>
        </div>
    `
});