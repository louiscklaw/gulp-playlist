const gulp = require("gulp");
const axios = require("axios");

const JIRA_BASIC_AUTH = process.env.JIRA_BASIC_AUTH;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${JIRA_BASIC_AUTH}`,
};

gulp.task("hostname", (done) => {
  axios
    .post(
      "https://lynked.atlassian.net/rest/api/2/issue/MENY-212/comment",
      {
        body: "hello gulp",
      },
      { headers: headers }
    )
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
