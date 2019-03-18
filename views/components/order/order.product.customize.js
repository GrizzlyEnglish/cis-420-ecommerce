Vue.component('sk-product-customize', {
    props: {
        product: Object
    },
    data: function () {
        return {
            productName: this.product.name,
            basePrice: this.product.basePrice,
            options: this.product.options,
            option: {}
        }
    },
    methods: {
        clickedValue: function (option, value, index) {
            if (option.mutuallyExclusive) {
                option.values = option.values.map(function (v) { v.selected = false; return v; });
            }

            option.values[index].selected = !option.values[index].selected;
        },
        calcTotal: function () {
            var basePrice = this.basePrice;

            this.options.forEach(function (option){
                option.values.forEach(function (value){
                    if (value.selected) {
                        basePrice += value.priceAdjustment;
                    }
                });
            });

            return this.toCurrency(basePrice, true);
        },
        toCurrency: function (price, ignoreDiff = false) {
            var diff = price > 0 ? '+' : '-';
            var currency = '$' + price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
            if (ignoreDiff) return currency;
            return diff + currency;
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
                    <div class="columns is-multiline" v-for="(option,index) in options" :key="index">
                        <div class="column is-12">
                            <h2 class="heading is-size-6">Customize {{ option.name }}</h2>
                        </div>
                        <div class="column is-12">
                            <div class="columns">
                                <div class="column is-3" v-for="(value, index) in option.values">
                                    <button
                                        v-on:click="clickedValue(option, value, index)" 
                                        class="button" :class="[value.selected ? 'is-primary' : 'is-outlined']">
                                        {{value.name}}
                                        <span v-if="value.priceAdjustment != 0">{{toCurrency(value.priceAdjustment)}}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-12">
                    <h1 class="heading is-size-4">Total {{calcTotal()}}</h1>
                </div>
                <div class="column is-12">
                    <button class="button is-secondary"> Back </button>
                    <button class="button is-danger"> Add To Cart </button>
                </div>
            </div>
        </div>
    
    `
});