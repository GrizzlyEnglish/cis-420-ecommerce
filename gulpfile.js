var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

const assets = {
    "scripts": {
        "vue": "dist/vue.js"
    },
    "styles": {
        "bulma": "bulma.sass"
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
            source.pipe(gulp.dest("public/" + assetType));
        }
    }
});

gulp.task('node-server', function() {
    var server = exec('node ./sk.app.js');
    server.stdout.pipe(process.stdout);
    server.stderr.pipe(process.stderr);
});

gulp.task('start-server', gulp.series('clean', 'dist_lib', 'node-server'));