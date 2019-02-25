Vue.component('sk-index-tile', {
    props: {
        tileClasses: String,
        header: String,
        dek: String,
        href: String,
        image: String
    },
    methods: {
        clickedTile: function () {
            window.location.href += this.href;
            console.log("Clicked " + this.href);
        }
    },
    template: `
    
    <div class="index-tile tile" :class="[tileClasses, href != null ? 'has-link' : '']" v-on:click="clickedTile()">
        <div class="tile is-parent">
            <article class="tile is-child notification">
                <div class="tile-content" style="
                    background-image: url('https://bulma.io/images/placeholders/800x480.png');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    ">
                    <div>
                        <h1 class="h1">
                            {{ header }}
                        </h1>
                    </div>
                    <div>
                        <p class="p">
                            {{ dek }}
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </div>
    
    `
});