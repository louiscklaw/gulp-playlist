const { src, dest } = require("gulp");

function copy() {
  return src("input/*.js").pipe(dest("output/"));
}

exports.default = copy;
