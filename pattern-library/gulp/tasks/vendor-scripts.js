// === VENDOR SCRIPTS
// ============================================================================

module.exports = function(gulp, gutil, plugins, browserSync){

    var env = require('../settings/config').environment.production,
        path = require('../settings/paths'),
        error = require('../settings/error-handler');

    if ( gutil.env.dev === true ) {
        env = require('../settings/config').environment.development
    }

    gulp.task('vendor-scripts', function () {
        return gulp.src(path.to.js.vendorScripts)
            .pipe( env.local ? plugins.uglify({ preserveComments: 'some' }) : gutil.noop() )
            .on('error', error.handleError)
            .pipe( env.local ? plugins.rename({ suffix: '.min' }) : gutil.noop() )
            .pipe( env.local ? gulp.dest(path.to.js.vendorDest) : gutil.noop() )
            .pipe(browserSync.reload({stream:true, once: true}))

    });

};
