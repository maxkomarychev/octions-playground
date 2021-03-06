const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const keyword = default_parse("keyword");
const start_page = default_parse("start_page");
const sort = default_parse("sort");
const order = default_parse("order");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
]

const inputs = {
  token,
  keyword,
  start_page,
  sort,
  order,
  file_output,
  custom_outputs,
}


request(token, 
  "get", 
  "/legacy/user/search/{keyword}", 
  previews,
  _.omit(inputs, ["token", "file_output", "custom_outputs"]),
  file_output,
  custom_outputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });