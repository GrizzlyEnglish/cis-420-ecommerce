Vue.component('sk-index', {
    template: `
    
        <div class="">

            <div class="gallery-short-links">
                <!-- Top level links -->
                <section class="tile is-ancestor">
                    <sk-index-tile tile-classes="is-vertical is-7" href="order" image="/imgs/2.jpg"
                        header="Order" dek="Order your cake today"></sk-index-tile>
                    <sk-index-tile tile-classes="is-vertical" href="gallery" image="/imgs/1.jpg"
                        header="Gallery" dek="See a gallery of our cakes"></sk-index-tile>
                    <sk-index-tile tile-classes="is-vertical" href="contact" image="/imgs/3.jpg"
                        header="Contact" dek="Contact us with requests"></sk-index-tile>
                </section>
                <section class="tile is-ancestor">
                    <sk-index-tile tile-classes="is-vertical" href="blog" image="/imgs/9.jpg"
                        header="Blog" dek="Read our stories!"></sk-index-tile>
                </section>
            </div>

            <!-- Banner of Karoline information -->
            <sk-index-banner
                image-href="/imgs/karloine.png"
                information="I make cakes and other desserts for all occasions. I can even make gluten/dairy free treats! Message me for pricing. Thanks for checking out my page!"
            ></sk-index-banner>

            <!-- Social media integration -->

        </div>
    
    `
});