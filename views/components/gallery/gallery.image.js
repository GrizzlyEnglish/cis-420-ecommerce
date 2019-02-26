Vue.component('sk-gallery-image', {
    props: {
        href: String,

    },
    template: `
        <div>
            <figure class="image is-128x128"> 
                <img v-bind:href="href"/>
            </figure>
        </div>
    `
});