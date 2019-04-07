Vue.component('sk-blog', {
    data: function () {
        return {
            blogs: blogs
        }
    },
    methods: {
        openBlog: function (blog) {
            window.location += `/${blog.id}`;
        }
    },
    template: `
        <div class="sk-blog">
            <div class="columns is-multiline">
                <div class="column is-12" v-for="(blog, index) in blogs">
                    <div class="columns blog-post" v-on:click="openBlog(blog)">
                        <div class="column is-4">
                            <figure>
                                <img v-bind:src="blog.image.src" />
                            </figure>
                        </div>
                        <div class="column is-8">
                            <h1 class="is-size-4 has-text-weight-bold">{{blog.title}}</h1>
                            <p>{{blog.dek}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
});