import _ from "lodash";
import "./style.css";
import "./style1.css";
import img1 from "./assets/img1.jpg";
import j from "./staticdata/1.json";
import c from "./staticdata/1.csv";
import x from "./staticdata/1.xml";
import printMe from "./print";
import { v4 as uuidv4 } from "uuid";

import(/* webpackPrefetch: true */ "./rmprefetch.js");
import(/* webpackPreload: true */ "./rmpreload.js");

console.log(j);
console.log(c);
console.log(x);

console.log("Hello World from your main file!");

console.log(`top of index.js at ${new Date().toTimeString()}`);
function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());

document.addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor == "blue" ? "white" : "blue";
});

window.addEventListener("load", () => {
  console.log(`window.load at ${new Date().toTimeString()}`);
});

document.addEventListener("DOMContentLoaded", () => {
  console.log(`DOMContentLoaded at ${new Date().toTimeString()}`);
});

// 1 second wait

document.getElementById("img1").setAttribute("src", img1);
document.getElementsByTagName("div")[0].classList.add("classred");

console.log(printMe());

console.log(`bottom of index.js  at ${new Date().toTimeString()}`);

function hof() {
  let x = 10;
  let z = 20;

  return function (y) {
    return x + y;
  };
}

let f = hof();
f(100);

console.log("---------------------------");
function Counter() {
  let cnt = 0;
  let nc = "a";
  return () => {
    return cnt++;
  };
}

let f1 = Counter();
let f2 = Counter();

console.log(f1(), f1(), f1());
console.log(f2(), f2(), f2());

console.log("---------------------------");

console.log("a");
setTimeout(() => {
  console.log("b");
}, 1000);
console.log("c");

let sTime = new Date().getSeconds();
while (true) {
  if (new Date().getSeconds() - sTime > 2) {
    break;
  }
}
console.log("d");

console.log(uuidv4());
