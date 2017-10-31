'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Nested App to hold other components
var ToDoApp = function (_React$Component) {
    _inherits(ToDoApp, _React$Component);

    function ToDoApp() {
        _classCallCheck(this, ToDoApp);

        return _possibleConstructorReturn(this, (ToDoApp.__proto__ || Object.getPrototypeOf(ToDoApp)).apply(this, arguments));
    }

    _createClass(ToDoApp, [{
        key: 'render',
        value: function render() {
            //Props for the ToDoApp
            var title = 'React Todo';
            var subtitle = 'Generate Something To Do!';
            var options = ['Thing one', 'Thing 2', 'Thing 3'];

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, null),
                React.createElement(Options, { options: options }),
                React.createElement(AddOption, null)
            );
        }
    }]);

    return ToDoApp;
}(React.Component);

//React component header
//Can be found in jsx template below and can be called endlessly
//Uppercase first letter is REQUIRED


var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',

        //react components require 'render' to be defined
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

//React Action Component


var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'handleChoice',
        value: function handleChoice() {
            alert('something chosen');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.handleChoice },
                    'What Should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

//React Option Component


var Option = function (_React$Component4) {
    _inherits(Option, _React$Component4);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'Option: ',
                this.props.optionText
            );
        }
    }]);

    return Option;
}(React.Component);

//React Options Component


var Options = function (_React$Component5) {
    _inherits(Options, _React$Component5);

    //method binding by overriding the constructor for React component
    //this is done to keep this binding on event handler
    function Options(props) {
        _classCallCheck(this, Options);

        //bind the event handler
        var _this5 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this5.handleRemoveAll = _this5.handleRemoveAll.bind(_this5);
        return _this5;
    }
    //event handler to remove all of the options array


    _createClass(Options, [{
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            alert(this.props.options);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.handleRemoveAll },
                    'Remove All'
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, optionText: option });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

//React AddOption Component


var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            //Stop page reloading when form submitted
            e.preventDefault();
            //actual input element from form
            var option = e.target.elements.option.value;

            if (option.trim()) {
                alert(option);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Some value'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

//Template to be rended to the app
//Each react component is called here
// const jsx = (
//     <div>

//     </div>
// )

//Render to the application


ReactDOM.render(React.createElement(ToDoApp, null), document.getElementById('app'));
