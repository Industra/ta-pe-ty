'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 var browserSync = require('browser-sync');


gulp.task('browser-sync', function() {
    browserSync.init({
      proxy: '127.0.0.1:8020',
      port: 8080,
      open: true,
      browser: 'google chrome canary',
      notify: false
    }, function (err, bs) {
    	 if (err) { console.log(err); }
		    if (!err) {
		        console.log('BrowserSync is ready!');
		    }
	});
});



gulp.task('sass', function () {
  return gulp.src('sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('webroot/user/themes/industratapety/css'))
    .pipe(browserSync.reload({stream:true}));
});




gulp.task('default', ['browser-sync','sass'], function () {
	gulp.watch(['sass/*.scss'], ['sass']);
});
