Vue.component('sk-gallery-image', {
    props: {
        href: String,

    },
    template: `
        <div>
            <figure class="image is-256x256"> 
                <img v-bind:src="href"/>
            </figure>
        </div>
    `
});