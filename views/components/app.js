var app = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    created: function () {
        console.log('a is: ' + this.a);
    }
});