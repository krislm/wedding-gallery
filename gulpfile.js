var gulp = require('gulp');
var filenamesToJson = require('gulp-filenames-to-json');


gulp.task('list-images', function() {
	gulp.src('./src/assets/imgs/part1/*.jpg')
		.pipe(filenamesToJson({fileName:'part1.json'}))
		.pipe(gulp.dest('.'));
	gulp.src('./src/assets/imgs/part2/*.jpg')
		.pipe(filenamesToJson({fileName:'part2.json'}))
		.pipe(gulp.dest('.'));
	gulp.src('./src/assets/imgs/part3/*.jpg')
		.pipe(filenamesToJson({fileName:'part3.json'}))
		.pipe(gulp.dest('.'));
	gulp.src('./src/assets/imgs/part4/*.jpg')
		.pipe(filenamesToJson({fileName:'part4.json'}))
		.pipe(gulp.dest('.'));
	return;
});