Vue.component('sk-gallery-lightbox', {
    props: {
        images: Array,
        isVisible: Boolean,
        index: Number
    },
    data: function () {
        return {
            showLightbox: false,
            image: null
        }
    },
    watch: { 
        isVisible: function(newVal, oldVal) {
            this.image = this.images[this.index];
            this.showLightbox = newVal;
            console.log(this.image.href);
      }
    },
    methods: {
        close: function () {
            this.showLightbox = false;
        }
    },
    template: `
        <div class="modal" :class="[showLightbox ? 'is-active' : '']">
            <div class="modal-background"></div>
            <div class="modal-content" style="text-align:center">
                <div class="arrow right"><i class="fas fa-arrow-left"></i></div>
                <div class="sk-gallery-lightbox">
                    <img :src="image.href" alt="">
                </div>
                <div class="arrow left"><i class="fas fa-arrow-right"></i></div>
                <p class="lightbox-caption">
                    {{ image.caption }}
                </p>
            </div>
            <button class="modal-close is-large" v-on:click="close"></button>
        </div>
    `
});