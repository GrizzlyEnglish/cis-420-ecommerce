Vue.component('sk-index-banner', {
    props: {
        information: String,
        imageHref: String
    },
    template: `
    
    <section class="sk-index-banner">
        <div class="image-container">
            <figure class="image">
                <img v-bind:src="imageHref" />
            </figure>
        </div>
        <div class="banner-body">
            <div class="content">
                <p class="title">
                    {{ information }}
                </p>
            </div>
        </div>
    </section>
    
    `
});