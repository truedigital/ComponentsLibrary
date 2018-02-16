// === PATHS
// ============================================================================

var path = require('path'),
    _baseDir  = './',
    _srcDir = './src/',
    _destDir = './dest/';

module.exports =
{

    to: {

        allFiles: path.join(_baseDir, '/**/**.**'),

        css: {
            dest: path.join(_destDir, '/css')
        },

        scss:{
            source: path.join(_srcDir, '/scss'),
            files: path.join(_srcDir, '/scss/**/**.scss'),
        },

        js: {
            source: path.join(_srcDir, '/js'),
            partials: path.join(_srcDir, '/js/partials/**.js'),
            dest: path.join(_destDir, '/js'),
            vendor: path.join(_srcDir, '/js/vendor'),
            vendorScripts: [path.join(_srcDir, '/js/vendor/**.js'), '!'+path.join(_srcDir, '/js/vendor/**.min.js')],
            vendorDest: path.join(_destDir, 'js/vendor')
        },

        svg: {
            source: path.join(_srcDir, '/svg'),
            files: path.join(_srcDir, '/svg/icons/*.svg'),
            dest: path.join(_destDir, '/svg')
        }

    }

};
