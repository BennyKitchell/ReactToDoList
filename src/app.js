//Nested App to hold other components
class ToDoApp extends React.Component{
    render(){
        //Props for the ToDoApp
        const title = 'React Todo';
        const subtitle = 'Generate Something To Do!';
        const options = ['Thing one', 'Thing 2', 'Thing 3'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
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
class Action extends React.Component{
    handleChoice() {
        alert('something chosen');
    }
    render(){
        return (
            <div>
                <button onClick={this.handleChoice}>What Should I do?</button>
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
class Options extends React.Component{
    handleRemoveAll(){
        alert('remove all');
    }
    render(){
        return(
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
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