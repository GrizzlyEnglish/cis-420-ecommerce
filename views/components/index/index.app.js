Vue.component('sk-index', {
    template: `
    
        <div class="">

            <div class="gallery-short-links">
                <!-- Top level links -->
                <section class="tile is-ancestor">
                    <sk-index-tile tile-classes="is-vertical is-7" href="order"
                        header="Order" dek="This will link to orders"></sk-index-tile>
                    <sk-index-tile tile-classes="is-vertical" href="gallery" image="/imgs/1.jpg"
                        header="Gallery" dek="See pictures of our cakes"></sk-index-tile>
                    <sk-index-tile tile-classes="is-vertical" href="contact"
                        header="Contact" dek="This will link to contact"></sk-index-tile>
                </section>
                <section class="tile is-ancestor">
                    <sk-index-tile tile-classes="is-vertical" href="about"
                        header="About" dek="This will link to about"></sk-index-tile>
                </section>
            </div>

            <!-- Banner of Karoline information -->
            <sk-index-banner
                image-href="https://bulma.io/images/placeholders/256x256.png"
                information="Banner on Karoline"
            ></sk-index-banner>

            <!-- Social media integration -->

        </div>
    
    `
});