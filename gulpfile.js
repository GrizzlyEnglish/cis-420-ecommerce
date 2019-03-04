var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;
var sass = require('gulp-sass');
var fs = require('fs');

sass.compiler = require('node-sass');

const assets = {
    "scripts": {
        "vue": "dist/vue.js",
        "vue-image-lightbox": "dist/vue-image-lightbox.min.js"
    },
    "styles": {
        "bulma": "bulma.sass",
        "vue-image-lightbox": "dist/vue-image-lightbox.min.css"
    },
    "fonts": {}
};

gulp.task('clean', function(){
    return del('public/**', {force:true});
});

gulp.task("dist_lib", async function() {
    for (var assetType in assets) {
        console.log("Moving " + assetType);
        for (var package in assets[assetType]) {
            console.log("Moving package: " + assets[assetType][package] + " to /" + assetType);
            var source = gulp.src("node_modules/" + package + "/" + assets[assetType][package]);
            if (assetType === 'styles') {
                source = source.pipe(sass().on('error', sass.logError));   
            }
            var path = "public/" + assetType; 
            fs.access(path, fs.constants.F_OK, (err) => {
                console.log(`${err ? 'does not exist' : 'exists'}`);
                if (!err) {
                    source.pipe(gulp.dest(path));
                }
            });
        }
    }
});

gulp.task('node-server', function() {
    var server = exec('node ./sk.app.js');
    server.stdout.pipe(process.stdout);
    server.stderr.pipe(process.stderr);
});

gulp.task('start-server', gulp.series('dist_lib', 'node-server'));