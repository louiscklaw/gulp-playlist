const { task, series, parallel } = require("gulp");
const gulp = require("gulp");
const shell = require("gulp-shell");

task("example", function (cb) {
  gulp.src("*.js", { read: false }).pipe(shell(["echo <%= file.path %>"]));
  cb();
});
const example = task("example");

function example2(cb) {
  gulp.src("*.js", { read: false }).pipe(shell(["echo <%= file.path %>"]));

  cb();
}

function clean(cb) {
  // body omitted
  cb();
}

exports.test1 = parallel(example2, clean);
