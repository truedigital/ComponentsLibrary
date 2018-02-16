// === GULP MAGIC
// ============================================================================
var argv = require('yargs').argv,
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    path = require('./gulp/settings/paths')

// BROWSER SYNC
var browserSync = require('browser-sync'),
    reload      = browserSync.reload;

// LOAD PLUGINS
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});

// === TASKS
// ==============================================================================
require('./gulp/tasks/styles')(gulp, gutil, plugins, browserSync);
require('./gulp/tasks/partials')(gulp, gutil, plugins, browserSync);
require('./gulp/tasks/vendor-scripts')(gulp, gutil, plugins, browserSync);
require('./gulp/tasks/browser-sync')(gulp, browserSync);
require('./gulp/tasks/sprites')(gulp, plugins, browserSync);


// GULP
//==============================================================================

gulp.task('default', function () {
    gulp.start('sprites', 'styles', 'partials', 'vendor-scripts');
});

gulp.task('watch', ['default', 'browser-sync-templates'], function () {
    watchFiles();
});

function watchFiles(){
    // Styles
    gulp.watch(path.to.scss.files, ['browserSyncRunning', 'styles']);

    // Scripts
    gulp.watch(path.to.js.partials, ['browserSyncRunning','partials']);
    gulp.watch(path.to.js.vendorScripts, ['browserSyncRunning', 'vendor-scripts']);

    // Images
    gulp.watch(path.to.svg.files, ['sprites', 'styles'], browserSync.reload);
}
