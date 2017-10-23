'use strict';

console.log("app js is running");

//Because userName is a javascript expression, it can call methods and concat strings dynamically
var app = {
    title: 'React To-Do List',
    subtitle: 'This is a paragraph test',
    options: []
};

//event e object
var onFormSubmit = function onFormSubmit(e) {
    //stop full page refresh
    e.preventDefault();

    //target point to the element that the event started on (the form)
    //option is the name below in the html
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        //wipe the input
        e.target.elements.option.value = '';
        renderLength();
    }
};

//This template is the beginning of having a template that references variables
//instead of referencing static text 
// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <h2>{app.subtitle}</h2>}
//         {app.options.length ? 'Current Options: ' : 'No Options'}
//         <p>{app.options.length}</p>
//         <ol>
//             <li>{app.options[0]}</li>
//             <li>{app.options[1]}</li>
//         </ol>
//         <form onSubmit={onFormSubmit}>
//             <input type="text" name="option"/>
//             <button>Add Option</button>
//         </form>
//     </div>
// );
var removeAll = function removeAll() {
    app.options = [];
    renderLength();
};

var appRoot = document.getElementById('app');
//Renders the application using two parameters (JSX youd like to render, DOM element)
//DOM element can be found in the index html with the same id
//ReactDOM.render(template, appRoot)

var renderLength = function renderLength() {
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,

            //maps each element of an array to a list item
            //key is mapped to the string itself, find a better way to generate unique keys
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderLength();
