var gulp = require("gulp");
var sass = require('gulp-sass');
gulp.task("copy-index",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\vip"));
});

gulp.task("images",function(){
	gulp.src("img/*.{jpg,png,gif,bmp}")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\vip\\img"));
});
gulp.task("js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\vip\\js"));
});
gulp.task("css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\vip\\css"));
});
gulp.task("phpfile",function(){
	gulp.src("*.php")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\vip"));
});
gulp.task("sass",function(){
 	//gulp.src("index.html").pipe(gulp.dest("dist"));
 	gulp.src("sass/*.scss")
 	.pipe(sass())
 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\vip\\css"));
});
gulp.task("copyallfile",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("*/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\vip"));
});

gulp.task("watch",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.watch("*.html",["copy-index"]);
	gulp.watch("img/*.{jpg,png,bmp,gif}",["images"]);
	gulp.watch("js/*.js",["js"]);
	gulp.watch("*.php",["phpfile"]);
	gulp.watch("css/*.css",["css"]);
	gulp.watch("sass/*.scss",["sass"]);
});