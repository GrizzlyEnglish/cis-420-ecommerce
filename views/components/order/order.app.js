Vue.component('sk-order', {
    data: function () {
        return {
            selectedProduct: null,
            products: []
        }
    },
    methods: {
        addAndCustomize: function (product) {
            this.selectedProduct = Object.assign(product);
        },
        goBack: function () {
            this.selectedProduct = null;
        },
        addToCart: function (product) {
            this.$emit('add-to-cart', product);
        }
    },
    beforeMount: function () {
        //TODO: Make this get products from a store
        this.products = products;
    },
    template: `
    
        <div class="sk-order">

            <div class="columns is-multiline"  v-if="selectedProduct == null">
                <sk-product-display
                    v-for="(product, index) in products"
                    :product="product"
                    @clickedProduct="addAndCustomize"
                    @addToCart="addToCart"
                    :key="index"
                ></sk-product-display>
            </div>

            <div class="columns is-multiline" v-if="selectedProduct != null">
                <div class="column is-12">
                    <button class="button is-secondary" v-on:click="goBack()">
                        <i class="fas fa-caret-left space"></i>
                        Go Back
                    </button>
                </div>

                <sk-product-customize
                :product="selectedProduct"
                @addToCart="addToCart"
                ></sk-product-customize>
            </div>

        </div>
    
    `
});