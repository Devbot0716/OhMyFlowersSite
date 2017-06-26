//gulp files should always be at the root of your code.

const gulp = require('gulp')
  , sourcemaps = require('gulp-sourcemaps')
  , sass = require('gulp-sass')
  , CacheBuster = require('gulp-cachebust')
  , cachebust = new CacheBuster()
  , concat = require('gulp-concat')
  , babel = require('gulp-babel')
  , print = require('gulp-print')
  , uglify = require('gulp-uglify');



gulp.task('hello', ()=> {
  console.log('Hello from inside your computer. We have gulp-off')
})

gulp.task('build-css', ()=> {
  return gulp.src('./styles/*')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cachebust.resources())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
})

gulp.task('build-js', ()=> {
   return gulp.src('js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', ['build-css', 'build-js'], ()=> {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('styles', ()=> {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

gulp.task('watch', ()=> {
    return gulp.watch(['./index.html','./partials/*.html', './styles/*.*css', './js/**/*.js'], ['build']);
});
