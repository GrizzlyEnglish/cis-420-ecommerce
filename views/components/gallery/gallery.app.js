const row_length = 4;
Vue.component('sk-gallery', {
    data: function () {
        return {
            images: [],
            rows: [],
            showLightbox: false,
            currentIndex: 0
        }
    },
    beforeMount: function () {
        this.images = [];

        for (var i = 0; i < 50; i++) {
            this.images.push({
                href: "https://bulma.io/images/placeholders/256x256.png",
                caption: "This is image " + this.images.length
            });
        }

        console.log(this.images.length);
        let row_count = Math.round(this.images.length / row_length) + 1;
        this.rows = new Array(row_count);
        let r = 0;
        let s = 0;
        this.images.forEach(element => {
            if(this.rows[r] === undefined) this.rows[r] = [];
            this.rows[r].push(element); 
            if (++s > row_length) {
               r++;
               s = 0;
            }
        });
        console.log(this.rows);
        console.log(this.images);
    },
    methods: {
        lightBox: function (event, imageIndex, rowIndex) {
            this.currentIndex = (rowIndex * row_length) + imageIndex;
            this.showLightbox = true;
        }
    },
    template: `
        <div class="sk-gallery">
            <sk-gallery-lightbox :images="images" :index="currentIndex" :is-visible="showLightbox"></sk-gallery-lightbox>
            <div class="columns" v-for="(row, rowIndex) in rows">
                <div class="gallery-image column is-one-fourth" v-for="(image, imageIndex) in row">
                    <sk-gallery-image 
                        v-on:openLightBox="lightBox($event, imageIndex, rowIndex)"
                        :href="image.href"
                        :caption="image.caption">
                    </sk-gallery-image>
                </div>
            </div>
        </div>
    `
});