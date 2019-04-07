Vue.component('sk-product-display', {
    props: {
        product: Object
    },
    data: function () {
        return {
            productLines: [],
            quantity: 1
        }
    },
    methods: {
        addProduct: function () {
            this.$emit('clickedProduct', this.product);
        },
        addQuantity: function (diff) {
            this.quantity += diff;
        },
        addToCart: function () {
            this.$emit('addToCart', {
                total: this.product.basePrice * this.quantity,
                name: this.product.name,
                image: this.product.image,
                quantity: this.quantity
            });
        }
    },
    template: `
    
        <div class="column is-6">
            <div class="columns">
                <div class="column is-6">
                    <figure class="product">
                        <img :src="product.image.src" />
                    </figure>
                </div>
                <div class="column is-6">
                    <h2 class="heading is-uppercase is-size-5">{{product.name}}</h2>
                    <p class="paragraph is-size-6 product-description">{{product.description}}</p>
                    <button class="button is-primary product-button" v-on:click="addProduct" v-if="product.options !== undefined">
                        Add & Customize
                    </button>
                    <div class="columns is-multiline" v-if="product.options === undefined">
                        <div class="column is-12">
                            <div class="columns">
                                <div class="column is-2">
                                    <button class="button is-secondary" v-on:click="addQuantity(-1)">-</button>
                                </div>
                                <div class="column is-3 has-text-centered">
                                    <label class="customizable quantity"> {{quantity}}</label>
                                </div>
                                <div class="column is-2">
                                    <button class="button is-secondary" v-on:click="addQuantity(1)">+</button>
                                </div>
                            </div>
                        </div>
                        <div class="column is-12">
                            <div class="columns">
                                <div class="column is-7">
                                    <button class="button is-primary product-button customizable" v-on:click="addToCart">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    `
});