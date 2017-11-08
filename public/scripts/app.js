'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Nested App to hold other components
//Can be found in jsx template below and can be called endlessly
//Uppercase first letter is REQUIRED

var ToDoApp = function (_React$Component) {
    _inherits(ToDoApp, _React$Component);

    function ToDoApp(props) {
        _classCallCheck(this, ToDoApp);

        var _this = _possibleConstructorReturn(this, (ToDoApp.__proto__ || Object.getPrototypeOf(ToDoApp)).call(this, props));

        _this.state = {
            options: props.options
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleChoice = _this.handleChoice.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        return _this;
    }
    //lifecycle method that is fired when component is mounted to the DOM


    _createClass(ToDoApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('fetching data...');
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                //Do nothing
                console.log('Invalid json in options');
            }
        }
        //lifecycle method that is fired when component props or state is changed

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            //check if options length has changed
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
                console.log('saving data...');
            }
        }
        //lifecycle method that is fired when just before the component goes away

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            //wrap an object in  ( ) in arrow functions to return object rather than empty body
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    //use filter to return array with everything except word that was removed
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handleChoice',
        value: function handleChoice() {
            var randomNumber = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomNumber]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter Valid Value!';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists!';
            }

            //using concat instead of push so that we are not directly affecting the state
            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            //Props for the ToDoApp
            var subtitle = 'Generate Something To Do!';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, { handleChoice: this.handleChoice, hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return ToDoApp;
}(React.Component);

//default prop for the class


ToDoApp.defaultProps = {
    options: []

    //React component header
    //stateless functional component
    //can still use props, just no state
};var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'React To-do App'

    //React Action Component
};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleChoice, disabled: !props.hasOptions },
            'What Should I do?'
        )
    );
};

//React Option Component
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }
            },
            'Remove'
        )
    );
};

//React Options Component
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option.'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

//React AddOption Component

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            //Stop page reloading when form submitted
            e.preventDefault();
            //actual input element from form
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });
            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
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

ReactDOM.render(React.createElement(ToDoApp, null), document.getElementById('app'));
