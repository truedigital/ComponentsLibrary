// === STYLES
// ============================================================================

// Note: Sourcemaps are not working at the moment when used with auto prefixer.
// If you comment in sourcemaps and comment out autoprefixer. maps work fine.
// I think autoprefixer wins over sourcemaps, so it's being used by default.

module.exports = function(gulp, gutil, plugins, browserSync){

    var env = require('../settings/config').environment.production,
        path = require('../settings/paths'),
        error = require('../settings/error-handler');
        moduleImporter = require('sass-module-importer');

    if ( gutil.env.dev === true ) {
        env = require('../settings/config').environment.development
    }

    gulp.task('styles', function() {

        return gulp.src(path.to.scss.source + '/style.scss')

            // init sourcemaps
            .pipe(plugins.sourcemaps.init())

    	    // globbing
    	    .pipe(plugins.cssGlobbing({
    		    extensions: ['.css', '.scss'],
    		    scssImportPath: {
    			    leading_underscore: false,
    			    filename_extension: false
    		    }
    	    })).on('error', error.handleError)

            // compile scss
            .pipe(plugins.sass({
                outputStyle : 'expanded',
                sourceComments : 'normal', // none|normal|map
                includePaths : ['scss'],
                importer: moduleImporter(),
                errLogToConsole : true
            })).on('error', error.handleError)

            // autoprefixer
            .pipe(plugins.autoprefixer()).on('error', error.handleError)

            // write sourcemaps
            .pipe(plugins.sourcemaps.write())

            // save to file
            .pipe(gulp.dest(path.to.css.dest))

            // Browsersync
            .pipe(browserSync.stream({match: '**/*.css'}))

            // Minify
            .pipe(env.local ? plugins.cleanCss() : gutil.noop() )
            .pipe(env.local ? plugins.rename('style.min.css') : gutil.noop() )
            .pipe(env.local ? gulp.dest(path.to.css.dest) : gutil.noop() )
            .pipe(plugins.size({ showFiles: false, gzip: true, title: env.name + ' styles'}));



    });

};
