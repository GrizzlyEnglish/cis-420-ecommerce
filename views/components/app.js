var app = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    created: function () {
        console.log('a is: ' + this.a);
    },
    methods: {
        addToCart: function (product) {
            var elem = document.getElementById('shopping_cart_total');
            var current_price = Number.parseInt(elem.innerHTML.replace('$', ''));
            debugger;
            shopping_cart.push(product);
            current_price += shopping_cart.reduce(function (accum, i) { return i.total + accum}, 0);
            
            elem.innerHTML = toCurrency(current_price, true);
        }
    }
});