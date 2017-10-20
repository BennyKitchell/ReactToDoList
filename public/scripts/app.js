"use strict";

console.log("app js is running");

//Begin JSX (Javascript XML)
var template = React.createElement(
  "h1",
  null,
  "React To-Do List"
);
var appRoot = document.getElementById('app');

//Renders the application using two parameters (JSX youd like to render, DOM element)
//DOM element can be found in the index html with the same id
ReactDOM.render(template, appRoot);
