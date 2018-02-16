// === ERROR HANDLING
// ============================================================================

var gutil = require('gulp-util'),
    browserSync = require('browser-sync');
    
module.exports =
{
    handleError: function( err )
    {
        gutil.log( gutil.colors.green(err) );
        browserSync.notify( err , 360000);
        this.emit( 'end' );
    }
};
