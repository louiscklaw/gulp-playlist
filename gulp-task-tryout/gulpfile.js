const gulp = require("gulp");

gulp.task("hostname", () => {
  return require("child_process").exec("hostname");
});

gulp.task(
  "default",
  gulp.series("hostname", () => {
    return;
  })
);
