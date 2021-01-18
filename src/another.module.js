import _ from "lodash";

console.log(
  `${new Date().toTimeString()} Coming from another.module.js - ${_.join(
    ["hello", "world"],
    " "
  )}`
);
