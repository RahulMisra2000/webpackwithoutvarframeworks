import $ from "jquery";

//$('.my-element').animate(/* ... */);

export default function printMe() {
  console.log("print");
}

$(document).ready(function () {
  console.log("jquery is ready to be used");
  $("div").animate(
    {
      width: "70%",
      opacity: 0.4,
      marginLeft: "0.6in",
      fontSize: "3em",
      borderWidth: "10px",
    },
    1500
  );
});
