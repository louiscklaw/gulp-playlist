const gulp = require("gulp");
const axios = require("axios");
var argv = require("yargs").argv;

var ticket_name = argv.ticket === undefined ? process.exit(1) : argv.ticket;

const LYNKED_JIRA_CURL_TOKEN = process.env.LYNKED_JIRA_CURL_TOKEN;
const JIRA_BASIC_AUTH = require("child_process")
  .execSync(
    `echo -n louis.law@lynked.co.jp:${LYNKED_JIRA_CURL_TOKEN} | base64`,
    {
      encoding: "utf-8",
    }
  )
  .trim();

const headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${JIRA_BASIC_AUTH}`,
};

console.log(headers);

const body_text = `
meny-admin: ___meny_app_address___

meny-manage: ___meny-manage_address___

meny-app: ___meny-app_address___

commit: ___commit___

notes: ___notes___
`;

const json_payload = {
  body: body_text,
};

gulp.task("hostname", (done) => {
  console.log(ticket_name);
  axios
    .post(
      `https://lynked.atlassian.net/rest/api/2/issue/${ticket_name}/comment`,
      json_payload,
      { headers: headers }
    )
    .then((res) => {
      // console.log(`statusCode:`, res.status);
      // console.log(res.data.json);
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
