var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('./config.json');

gulp.task('Default',['buildjs'], function(){
  console.log(config.dist.dest.html);
  gulp.src(config.dist.src.html)
  .pipe(gulp.dest('./dist/'));
})

gulp.task('buildjs', function(){
  gulp.src(config.dist.src.js)
    //.pipe(concat('js/app.all.js'))
    .pipe(gulp.dest(config.dist.dest));

})

gulp.task('vendor', function(){
  gulp.src(config.dist.src.vendor)
  //.pipe(concat('lib.all.js'))
  .pipe(gulp.dest(config.dist.destvendor))
})

gulp.task('app', function(){
  gulp.src('typescript-test/app.js')
  .pipe(gulp.dest(config.dist.dest))
})

gulp.task('html', function(){
  gulp.src(config.dist.src.html)
  .pipe(gulp.dest(config.dist.dest))
})
