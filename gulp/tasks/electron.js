var gulp = require('gulp');
var electron = require('gulp-electron');
var packageJson = require('../../package.json');

var electron_task = function() {
    gulp.src("")
    .pipe(electron({
        src: './build/',
        packageJson: packageJson,
        release: './release',
        cache: './cache',
        version: 'v1.7.6',
        packaging: true,
        token: '5a7cce755d1c4ffa6c188456faebe45007fa4f99 ',
        platforms: ['win32'],
        platformResources: {
            win: {
                "version-string": packageJson.version,
                "file-version": packageJson.version,
                "product-version": packageJson.version,
                //"icon": 'gulp-electron.ico'
            }
        }
    }))
    .pipe(gulp.dest(""));
    
}
gulp.task('electron', electron_task);
module.exports = electron_task;