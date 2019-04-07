Vue.component('sk-product-display', {
    props: {
        product: Object
    },
    data: function () {
        return {
            productLines: []
        }
    },
    methods: {
        addProduct: function () {
            this.$emit('clickedProduct', this.product);
        },
        addToCart: function () {
            this.$emit('addToCart', {
                total: this.product.basePrice,
                name: this.product.name
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
                    <button class="button is-primary product-button" v-on:click="addToCart" v-if="product.options === undefined">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    
    `
});