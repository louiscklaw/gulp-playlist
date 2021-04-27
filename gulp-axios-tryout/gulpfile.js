const gulp = require("gulp");
const axios = require("axios");

gulp.task("hostname", (done) => {
  axios
    .post("https://httpbin.org/post", {
      todo: "Buy the milk",
    })
    .then((res) => {
      console.log(`statusCode:`, res.status);
      console.log(res.data.json);
    })
    .then(() => {
      return require("child_process").execSync("hostname", {
        encoding: "utf-8",
      });
    })
    .then((cmd_result) => {
      console.log(cmd_result);
      done();
    })
    .catch((error) => {
      console.error(error);
    });
});

gulp.task(
  "default",
  gulp.series("hostname", (done) => {
    done();
  })
);
