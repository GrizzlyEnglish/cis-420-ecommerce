Vue.component('sk-index-tile', {
    props: {
        tileClasses: String,
        header: String,
        dek: String,
        href: String,
        image: String
    },
    data: function () {
        return {
            styleObject: {
                'background-image': 'url(' + this.image + ')',
                'background-size': 'cover',
                'background-position': 'center',
                'background-repeat': 'no-repeat'
            }
        }
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
            <article class="tile is-child tile-block">
                <div class="tile-content" v-bind:style="styleObject">
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