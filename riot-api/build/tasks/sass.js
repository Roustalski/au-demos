var gulp = require('gulp');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

//Pre-processes SASS files and copies changed css files to the output directory
gulp.task('build-sass', function() {
    return buildSass(paths.scss, paths.output + 'styles/');
});

gulp.task('build-static-sass', function() {
    return buildSass(paths.staticScss, paths.staticStyleOutput);
});

function buildSass(src, dest) {
    return gulp.src(src)
        .pipe(plumber())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write({ includeContent: true }))
        .pipe(autoprefixer())
        .pipe(changed(paths.output, { extension: '.css' }))
        .pipe(gulp.dest(dest));
}