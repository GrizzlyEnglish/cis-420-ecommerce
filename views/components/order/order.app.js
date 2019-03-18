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
        }
    },
    beforeMount: function () {
        //TODO: Make this get products from a store
        this.products = [
            {
                "name": "Cake",
                "description": "Description of cakes",
                "basePrice": 15,
                "image": {
                    "src": "https://bulma.io/images/placeholders/256x256.png",
                    "caption": ""
                },
                "options": [
                    {
                        "name": "Size",
                        "mutuallyExclusive": true,
                        "values": [
                            { "name": "Small", "priceAdjustment": 0, "selected": true},
                            { "name": "Medium", "priceAdjustment": 5.00, "selected": false},
                            { "name": "Large", "priceAdjustment": 10.00, "selected": false},
                        ]
                    },
                    {
                        "name": "Frosting",
                        "mutuallyExclusive": true,
                        "values": [
                            { "name": "White", "priceAdjustment": 0, "selected": true},
                            { "name": "Strawberry", "priceAdjustment": 0, "selected": false},
                            { "name": "Cream", "priceAdjustment": 0, "selected": false},
                            { "name": "Lemon", "priceAdjustment": 0, "selected": false},
                        ]
                    },
                    {
                        "name": "Topping",
                        "mutuallyExclusive": false,
                        "values": [
                            { "name": "Strawberries", "priceAdjustment": 5.00, "selected": false},
                            { "name": "Blueberries", "priceAdjustment": 5.00, "selected": false}
                        ]
                    }
                ]
            },
            {
                "name": "Cupcake",
                "description": "Description of cupcakes",
                "basePrice": 5,
                "image": {
                    "src": "https://bulma.io/images/placeholders/256x256.png",
                    "caption": ""
                },
                "options": [
                    {
                        "name": "Size",
                        "mutuallyExclusive": true,
                        "values": [
                            { "name": "Small", "priceAdjustment": 0},
                            { "name": "Medium", "priceAdjustment": 5},
                            { "name": "Large", "priceAdjustment": 10},
                        ]
                    },
                    {
                        "name": "Frosting",
                        "mutuallyExclusive": true,
                        "values": [
                            { "name": "Strawberry", "priceAdjustment": 0},
                            { "name": "Cream", "priceAdjustment": 0},
                            { "name": "Lemon", "priceAdjustment": 0},
                        ]
                    },
                    {
                        "name": "Topping",
                        "mutuallyExclusive": false,
                        "values": [
                            { "name": "Strawberries", "priceAdjustment": 5},
                            { "name": "Blueberries", "priceAdjustment": 5}
                        ]
                    }
                ]
            },
        ]
    },
    template: `
    
        <div class="sk-order">

            <div class="columns"  v-if="selectedProduct == null">
                <sk-product-display
                    v-for="(product, index) in products"
                    :product="product"
                    @clickedProduct="addAndCustomize"
                    :key="index"
                ></sk-product-display>
            </div>

            <div class="columns" v-if="selectedProduct != null">
                <sk-product-customize
                :product="selectedProduct"
                ></sk-product-customize>
            </div>

        </div>
    
    `
});