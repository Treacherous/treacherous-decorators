const gulp = require('gulp');
const ts = require('gulp-typescript');
const webpack = require('webpack-stream');
const runSequence = require("run-sequence");
const merge = require('merge2');
const paths = require("../paths");

var compileFor = function(moduleType, withTypings = false, target = "es2015") {
    var tsProject = ts.createProject('tsconfig.json', {
        declaration: withTypings || false,
        module: moduleType,
        target: target
    });
    var tsResult = gulp.src([paths.source])
        .pipe(tsProject());

    if(withTypings) {
        return merge([
            tsResult.dts.pipe(gulp.dest(paths.dist + "/definitions")),
            tsResult.js.pipe(gulp.dest(paths.dist + "/" + moduleType))
        ]);
    }

    return tsResult.js.pipe(gulp.dest(paths.dist + "/" +moduleType));
}


gulp.task("compile-webpack", function() {
    return gulp.src(`${paths.dist}/es2015/index.js`)
        .pipe(webpack({
            output: {
                filename: "treacherous.decorators.umd.js",
                library: "TreacherousDecorators",
                libraryTarget: "umd"
            }
        }))
        .pipe(gulp.dest(`${paths.dist}/umd`))
});

gulp.task('compile-modules', function(){
    return merge([
        compileFor("commonjs", true, "es5"),
        compileFor("es2015")
    ])
});

gulp.task('compile', ["clean", "generate-exports"], function(callback) {
    return runSequence('compile-modules', 'compile-webpack', callback);
});