Vue.component('sk-blog-post', {
    data: function () {
        return {
            blog: this.$parent.selected_blog
        }
    },
    beforeMount: function () {
        
    },
    methods: {
        
    },
    template: `
        <div class="sk-blog">
            <div class="columns is-multiline">
                <div class="column is-12">
                    <a class="button is-secondary" href="/blog">
                        <i class="fas fa-caret-left space"></i>
                        Back To Blogs
                    </a>
                </div>
                <div class="column is-12 has-text-centered">
                    <h1 class="is-size-2">{{blog.title}}</h1>
                    <p>{{blog.dek}}</p>
                </div>
                <div class="column is-12 has-text-centered">
                    <figure>
                        <img v-bind:src="blog.image.src" style="max-height: 250px"/>
                    </figure>
                </div>
                <div class="column is-12">
                    <div v-html="blog.post"></div>
                </div>
            </div>
        </div>
    `
});