const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const issue_number = default_parse("issue_number");
const lock_reason = default_parse("lock_reason");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
  "sailor-v",
]

const inputs = {
  token,
  owner,
  repo,
  issue_number,
  lock_reason,
  file_output,
  custom_outputs,
}


request(token, 
  "put", 
  "/repos/{owner}/{repo}/issues/{issue_number}/lock", 
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