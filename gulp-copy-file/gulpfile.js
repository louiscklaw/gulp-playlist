const { series, parallel } = require("gulp");

const gulp = require("gulp");

const { series, parallel } = require("gulp");
var run = require("gulp-run-command").default;

const CLEAN_CMD = "rm -rf jobsdb_qa.png";
const BUILD_CMD = "node test.js";
const WATCH_DIR = ".";

gulp.task("copy-img", function () {
  return gulp.src("./src/img/*.png").pipe(gulp.dest("./deploy/imgs"));
});

gulp.task("default", gulp.series("copy-img"));
