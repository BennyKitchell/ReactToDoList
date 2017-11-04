//Nested App to hold other components
class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options:  ['Thing one', 'Thing 2', 'Thing next']
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleChoice = this.handleChoice.bind(this);
    }
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handleChoice(){
        let randomNumber = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNumber]);
    }
    render(){
        //Props for the ToDoApp
        const title = 'React Todo';
        const subtitle = 'Generate Something To Do!';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action handleChoice={this.handleChoice} hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption />
            </div>
        )
    }
}

//React component header
//Can be found in jsx template below and can be called endlessly
//Uppercase first letter is REQUIRED
class Header extends React.Component{
    //react components require 'render' to be defined
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

//React Action Component
//Random pick now uses props
class Action extends React.Component{
    render(){
        return (
            <div>
                <button onClick={this.props.handleChoice} disabled={!this.props.hasOptions}>
                    What Should I do?
                </button>
            </div>
        );
    }
}

//React Option Component
class Option extends React.Component{
    render(){
        return(
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}

//React Options Component
//Remove all now uses props and states to empty array
class Options extends React.Component{
    render(){
        return(
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

//React AddOption Component
class AddOption extends React.Component{
    handleAddOption(e){
        //Stop page reloading when form submitted
        e.preventDefault();
        //actual input element from form
        const option = e.target.elements.option.value;

        if(option.trim()){
            alert(option);
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text'  name='option'/>
                    <button>Some value</button>
                </form>
            </div>
        );
    }
}

//Template to be rended to the app
//Each react component is called here
// const jsx = (
//     <div>

//     </div>
// )

//Render to the application
ReactDOM.render(<ToDoApp />, document.getElementById('app'));