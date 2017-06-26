//gulp files should always be at the root of your code.

const gulp = require('gulp')
  , sourcemaps = require('gulp-sourcemaps')
  , scss = require('gulp-sass')
  , CacheBuster = require('gulp-cachebust')
  , cachebust = new CacheBuster()
  , concat = require('gulp-concat')
  , babel = require('gulp-babel')
  , print = require('gulp-print')
  , uglify = require('gulp-uglify')
  , autoprefixer = require('gulp-autoprefixer')
  , nodemon = require('nodemon');

  // DECLARE FILE PATHS =============================
  const basePath = './public';
  const resetPath = "./public/styles/reset.css";
  const paths = {
    jsSrc: [`${basePath}/js/app.js`, `${basePath}/js/*.js`, `${basePath}/js/controllers/*.js`, `${basePath}/directives/*.js`, `${basePath}/js/services/*.js`],
    scssSrc: [`${resetPath}`, `${basePath}/styles/*.scss`],
    server: './server/server.js'
  };
  // DEFINE TASKS ===================================
  gulp.task('server', () => {
    nodemon({
      'script': paths.server
    })
  });
  gulp.task('js-bundle', () =>  {
    gulp.src(paths.jsSrc)
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./public/dist'));
  });
  gulp.task('scss-bundle', () => {
    gulp.src(paths.scssSrc)
        .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        }))
        .pipe(scss())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./public/dist'))
  });
  // WATCH TASK =======================================
  gulp.task('watch', () => {
    gulp.watch(paths.jsSrc, ['js-bundle']);
    gulp.watch(paths.scssSrc, ['scss-bundle']);
  });
  gulp.task('build', ['js-bundle','scss-bundle']);
  gulp.task('default', ['watch', 'js-bundle','scss-bundle', 'server']);
// gulp.task('hello', ()=> {
//   console.log('Hello from inside your computer. We have gulp-off')
// })
//
//
// gulp.task('build-css', ()=> {
//   return gulp.src('./styles/*')
//     .pipe(sourcemaps.init())
//     .pipe(sass())
//     .pipe(cachebust.resources())
//     .pipe(concat('styles.css'))
//     .pipe(sourcemaps.write('./maps'))
//     .pipe(gulp.dest('./dist'));
// })
//
// gulp.task('build-js', ()=> {
//    return gulp.src('js/**/*.js')
//       .pipe(sourcemaps.init())
//       .pipe(print())
//       .pipe(babel({ presets: ['es2015'] }))
//       .pipe(concat('bundle.js'))
//       //.pipe(uglify())
//       .pipe(sourcemaps.write('./'))
//       .pipe(gulp.dest('./dist/js'));
// });
//
// gulp.task('build', ['build-css', 'build-js'], ()=> {
//     return gulp.src('./public/index.html')
//         .pipe(cachebust.references())
//         .pipe(gulp.dest('dist'));
// });
//
// gulp.task('styles', ()=> {
//     gulp.src('./public/styles/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./css/'))
// });
//
// gulp.task('watch', ()=> {
//     return gulp.watch(['./public/index.html','./public/views/*.html', './public/styles/*.*css', './public/js/**/*.js'], ['build']);
// });
//
// gulp.task('default', ['./public/index.html','./public/views/*.html', './public/styles/*.*css', './public/js/**/*.js'])
