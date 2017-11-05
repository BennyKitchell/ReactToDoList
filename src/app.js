//Nested App to hold other components
//Can be found in jsx template below and can be called endlessly
//Uppercase first letter is REQUIRED
class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options:  []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleChoice = this.handleChoice.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
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
    handleAddOption(option){
        if(!option){
            return 'Enter Valid Value!';
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists!';
        }

        this.setState((prevState) =>{
            //using concat instead of push so that we are not directly affecting the state
            return {
                options: prevState.options.concat([option])
            }
        })
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
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

//React component header
//stateless functional component
//can still use props, just no state
const Header = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

//React Action Component
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handleChoice} disabled={!props.hasOptions}>
                What Should I do?
            </button>
        </div>
    );
}

//React Option Component
const Option = (props) => {
    return(
        <div>
            {props.optionText}
        </div>
    )
}

//React Options Component
const Options = (props) =>{
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => <Option key={option} optionText={option}/>)
            }
        </div>
    );
}

//React AddOption Component
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        //Stop page reloading when form submitted
        e.preventDefault();
        //actual input element from form
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(( ) => {
            return { error }
        })
    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text'  name='option'/>
                    <button>Some value</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<ToDoApp />, document.getElementById('app'));