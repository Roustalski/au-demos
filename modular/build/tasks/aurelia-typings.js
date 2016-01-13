var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ lazy: true });
var paths = require('../paths');
var del = require('del');

gulp.task('clean.au.typings', function (done) {
    del([paths.aureliaTypingsDest + "**"]);
    done();
});

gulp.task('generate.au.typings', ['clean.au.typings'], function () {
    return gulp.src(paths.aureliaTypingsSource)
        .pipe($.plumber())
        .pipe($.print())
        .pipe($.flatten())
        .pipe(gulp.dest(paths.aureliaTypingsDest));
})
