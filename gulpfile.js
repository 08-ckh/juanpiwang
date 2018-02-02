var gulp=require('gulp');
var sass=require('gulp-sass');


gulp.task('index',function(){
    gulp.src('src/sass/index.scss')//查到scss文件
    .pipe(sass())//编译sass文件成css
    .pipe(gulp.dest("src/css/"))//编译后的文件输入到硬盘的指定位置
});


gulp.task('jtSass',function(){
    // 当文件有修改，则执行complieSass任务
    gulp.watch('./src/sass/*.scss',['index'])
});

