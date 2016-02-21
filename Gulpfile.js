var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('./config.json');
var build = require('./semantic/tasks/build');
var watch = require('./semantic/tasks/watch');

gulp.task('default',['buildjs'], function(){
  console.log(config.dist.dest);
  gulp.src(config.dist.src.html)
  .pipe(gulp.dest(config.dist.dest));
})

gulp.task('buildjs', function(){
  gulp.src(config.dist.src.js)
    //.pipe(concat('js/app.all.js'))
    .pipe(gulp.dest(config.dist.dest));

})

gulp.task('buildcss', function(){
  gulp.src(config.dist.src.css)
  .pipe(concat("styles.css"))
  .pipe(gulp.dest(config.dist.destcss))
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

gulp.task('semantic',['build-ui'], function(){
  gulp.src(['./semantic/dist/semantic.min.*'])
  .pipe(gulp.dest(config.dist.destsemantic))
})

gulp.task('semanticthemes',function(){
  gulp.src('./semantic/dist/themes/**/*')
  .pipe(gulp.dest(config.dist.destsemantic + '/themes'))
})

gulp.task('watch-ui', watch);
gulp.task('build-ui', 'Build UI for Semantic UI', build);
