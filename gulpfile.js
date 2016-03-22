var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	http = require('http'),
	st = require('st');


gulp.task('check', function() {
  gulp.src('src/js/**/*.js')
    .pipe(livereload());
});

gulp.task('watch', ['server'], function() {
	livereload.listen();
	gulp.watch('src/css/*.css', ['check']);
    gulp.watch('src/js/**/*.js', ['check']);
	gulp.watch('src/*.html', ['check']);
	gulp.watch('src/views/*.html', ['check']);
});


gulp.task('server', function(done) {
	http.createServer(
	st({ path: __dirname + '/src', index: 'index.html', cache: false  })

	).listen(8081, done);

});
