console.log("app js is running");

//Because userName is a javascript expression, it can call methods and concat strings dynamically
var app = {
    title: 'React To-Do List',
    subtitle: 'This is a paragraph test',
    options: ['first', 'second']
};

//This template is the beginning of having a template that references variables
//instead of referencing static text 
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h2>{app.subtitle}</h2>}
        {app.options.length ? 'Current Options: ' : 'No Options'}
        <ol>
            <li>{app.options[0]}</li>
            <li>{app.options[1]}</li>
        </ol>
    </div>
);
var appRoot = document.getElementById('app');
//Renders the application using two parameters (JSX youd like to render, DOM element)
//DOM element can be found in the index html with the same id
ReactDOM.render(template, appRoot);