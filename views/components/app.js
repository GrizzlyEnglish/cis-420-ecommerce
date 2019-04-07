function setShoppingCart(product) {
    var elem = document.getElementById('shopping_cart_total');
    var current_price = Number.parseInt(elem.innerHTML.replace('$', ''));
    
    if (product != null) shopping_cart.push(product);
    current_price += shopping_cart.reduce(function (accum, i) { return i.total + accum}, 0);
    
    elem.innerHTML = toCurrency(current_price, true);
};

var app = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname,
        selected_blog: undefined
    },
    created: function () {
        console.log('current route: ' + this.currentRoute);
        //Blog hack
        var url = window.location.href.split("/");
        
        if (url.length >= 4 && url[3] == 'blog') {
            var post_id = url[4];
            this.selected_blog = blogs.find(function (b) { return b.id == post_id});
            console.log(this.selected_blog);
        }

        //Shopping cart hack
        if (shopping_cart != null && shopping_cart.length > 0) setShoppingCart();
    },
    methods: {
        addToCart: function (product) {
            setShoppingCart(product);
        }
    }
});