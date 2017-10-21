'use strict';

console.log("app js is running");

//Because userName is a javascript expression, it can call methods and concat strings dynamically
var app = {
    title: 'React To-Do List',
    subtitle: 'This is a paragraph test',
    options: ['first', 'second']
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
    app.subtitle && React.createElement(
        'h2',
        null,
        app.subtitle
    ),
    app.options.length ? 'Current Options: ' : 'No Options',
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            app.options[0]
        ),
        React.createElement(
            'li',
            null,
            app.options[1]
        )
    )
);
var appRoot = document.getElementById('app');
//Renders the application using two parameters (JSX youd like to render, DOM element)
//DOM element can be found in the index html with the same id
ReactDOM.render(template, appRoot);
