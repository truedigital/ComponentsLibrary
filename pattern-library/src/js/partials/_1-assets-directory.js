var assetsDir = (function($) {
    var tssukScripts = $('script[src*=scripts]').attr('src');
    var assetsPath = tssukScripts.split('?')[0]; // remove any ? query
    var assetsDirectory = assetsPath.split('/').slice(0, -1).join('/') + '/'; // remove last filename part of path

    return {
        path: assetsDirectory
    }
})(jQuery);
