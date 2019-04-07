Vue.component('sk-product-customize', {
    props: {
        product: Object
    },
    data: function () {
        return {
            productName: this.product.name,
            basePrice: this.product.basePrice,
            options: this.product.options,
            option: {},
            quantity: 1,
            customText: ''
        }
    },
    methods: {
        clickedValue: function (option, value, index) {
            if (option.mutuallyExclusive) {
                option.values = option.values.map(function (v) { v.selected = false; return v; });
            }

            option.values[index].selected = !option.values[index].selected;
        },
        calcTotal: function (withQuantity = false, number = false) {
            var basePrice = this.basePrice;

            this.options.forEach(function (option){
                option.values.forEach(function (value){
                    if (value.selected) {
                        basePrice += value.priceAdjustment;
                    }
                });
            });

            if (withQuantity) basePrice = basePrice * this.quantity;

            return number ? basePrice : this.toCurrency(basePrice, true);
        },
        toCurrency: function (price, ignoreDiff = false) {
            return toCurrency(price, ignoreDiff);
        },
        addQuantity: function(diff) {
            this.quantity += diff;
        },
        addToCart: function () {
            var options = [];

            this.product.options.forEach(function (o){
                if (o.mutuallyExclusive) {
                    var selected = o.values.find(function (v) { return v.selected; });
                    if (selected != null) options.push(selected);
                } else {
                    selected = o.values.filter(function (v) { return v.selected; });
                    if (selected != null && selected.length > 0) options.concat(selected);
                }
            });

            this.$emit('addToCart', {
                total: this.calcTotal(true, true),
                name: this.product.name,
                quantity: this.quantity,
                options: options,
                custom: this.customText
            });
        }
    },
    template: `
    
        <div class="sk-customize column is-12">
            <div class="columns">
                <div class="column is-12">
                    <h2 class="heading is-size-3">Customize {{ productName }}</h2>
                </div>
            </div>
            <div class="columns is-multiline">
                <div class="column is-12">
                    <h1 class="heading is-size-4">Base Price {{toCurrency(basePrice, true)}}</h1>
                </div>
                <div class="column is-12">
                    <div class="columns is-multiline" v-for="(option,index) in options" :key="index">
                        <div class="column is-12">
                            <h2 class="heading is-size-6">Customize {{ option.name }}</h2>
                        </div>
                        <div class="column is-12">
                            <div class="columns is-multiline">
                                <div class="column is-3" v-for="(value, index) in option.values">
                                    <button
                                        v-on:click="clickedValue(option, value, index)" 
                                        class="button customizable" :class="[value.selected ? 'is-primary' : 'is-outlined']">
                                        {{value.name}}
                                        <span v-if="value.priceAdjustment != 0">{{toCurrency(value.priceAdjustment)}}</span>
                                    </button>
                                    <p class="customizable description" v-if="value.description != null">
                                        {{value.description}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-12">
                    <h1 class="heading is-size-6">Additional Requests</h1>
                    <textarea class="textarea" v-model="customText" placeholder="Any additiona requests for the cake. May increase final total."></textarea>
                </div>
                <div class="column is-12">
                    <button class="button is-secondary">Add Images</button>
                </div>
                <div class="column is-12">
                    <h1 class="heading is-size-4">SubTotal {{calcTotal()}}</h1>
                </div>
                <div class="column is-12">
                    <h1 class="heading is-size-6">Quantity</h1>
                </div>
                <div class="column is-12">
                    <div class="columns">
                        <div class="column is-1">
                            <button class="button is-secondary" v-on:click="addQuantity(-1)">-</button>
                        </div>
                        <div class="column is-1">
                            <label class="customizable quantity"> {{quantity}}</label>
                        </div>
                        <div class="column is-1">
                            <button class="button is-secondary" v-on:click="addQuantity(1)">+</button>
                        </div>
                    </div>
                </div>
                <div class="column is-12">
                    <h1 class="heading is-size-4">Total {{calcTotal(true)}}</h1>
                </div>
                <div class="column is-6">
                    <button class="button is-secondary"> Back </button>
                    <button class="button is-danger" v-on:click="addToCart"> Add To Cart </button>
                </div>
                <div class="column is-6">
                    <a href="/cart" class="button is-primary is-pulled-right" v-on:click="goToCart"> Go To Cart </button>
                </div>
            </div>
        </div>
    
    `
});