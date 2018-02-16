// === BROWSER-SYNC
// ============================================================================

module.exports = function(gulp, browserSync){

    var error = require('../settings/error-handler');

    gulp.task('browser-sync-templates', function() {
        browserSync({
            server: {
                baseDir: './',
                directory: true
            },
            startPath: ".",
            open: true,
            reloadDelay: 500,
            reloadDebounce: 3000,
            notify: {
                styles: [
                    "display: none",
                    "padding: 7px 20px",
                    "font-family: sans-serif",
                    "position: fixed",
                    "font-size: 14px",
                    "z-index: 9999",
                    "right: 0px",
                    "top: 0px",
                    "border-bottom-left-radius: 3px",
                    "background-color: #1B2032",
                    "margin: 0",
                    "color: white",
                    "text-align: center"
                ]
            }
        });
    });

    function browserSyncNotify(msg){
        var msg = msg || 'I appear to have lost the plot';
        return browserSync.notify(msg);
    }

    gulp.task('browserSyncRunning' , function () {
        return browserSync.notify('<svg width="16" height="16" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-pacman"><style>.a{fill:#f0c741;}</style><rect width="100" height="100" class="bk" fill="#1b2032"/><path d="M0 50A50 50 0 1 0 100 50" class="a"><animateTransform attributeName="transform" type="rotate" dur=".5s" repeatCount="indefinite" from="30 50 50" to="30 50 50" values="30 50 50;0 50 50;30 50 50"/></path><path d="M0 50A50 50 0 1 1 100 50" class="a"><animateTransform attributeName="transform" type="rotate" dur=".5s" repeatCount="indefinite" from="-30 50 50" to="-30 50 50" values="-30 50 50;0 50 50;-30 50 50"/></path></svg>');
    });

};
