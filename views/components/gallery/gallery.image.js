Vue.component('sk-gallery-image', {
    props: {
        href: String,
        caption: String
    },
    methods: {
        onClick: function () {
            console.log('clicked image');
            this.$emit('openLightBox', this.href);
        }
    },
    template: `
        <div class="sk-gallery-image" v-on:click="onClick">
            <figure class="image"> 
                <img v-bind:src="href"/>
            </figure>
            <p class="caption">
                {{ caption }}
            </p>
        </div>
    `
});