var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;

const webpackages = {
    "vue": "dist/vue.min.js"
};

gulp.task('clean', function(){
    return del('public/**', {force:true});
});

gulp.task("dist_lib", async function() {
    for (var package in webpackages) {
        console.log("Moving package: " + package);
        gulp.src("node_modules/" + package + "/" + webpackages[package])
            .pipe(gulp.dest("public/"));
    }
});

gulp.task('node-server', function() {
    exec('node ./sk.app.js').stdout.pipe(process.stdout);
});

gulp.task('start-server', gulp.series('clean', 'dist_lib', 'node-server'));