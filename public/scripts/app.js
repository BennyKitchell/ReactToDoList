'use strict';

var showParagraph = false;
var onToggleVisible = function onToggleVisible() {
    showParagraph = !showParagraph;
    render();
};
var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onToggleVisible },
            showParagraph ? 'Hide Details' : 'Show Details'
        ),
        showParagraph && React.createElement(
            'p',
            null,
            'These are the details'
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
