'use strict';

console.log("app js is running");

//Because userName is a javascript expression, it can call methods and concat strings dynamically
var app = {
    title: 'React To-Do List',
    subtitle: 'This is a paragraph test',
    number: '2017'
};
//This template is the beginning of having a template that references variables
//instead of referencing static text 
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'h2',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.number
    )
);
var appRoot = document.getElementById('app');
//Renders the application using two parameters (JSX youd like to render, DOM element)
//DOM element can be found in the index html with the same id
ReactDOM.render(template, appRoot);
