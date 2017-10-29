//Nested App to hold other components
class ToDoApp extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <Action />
                <Options />
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
                <h1>React To-Do List</h1>
                <h2>Generate Something To Do!</h2>
            </div>
        );
    }
}

//React Action Component
class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        );
    }
}

//React Option Component
class Option extends React.Component{
    render(){
        return(
            <div>
                Option 
            </div>
        )
    }
}

//React Options Component
class Options extends React.Component{
    render(){
        return(
            <div>
                <p>Options go here</p>
                <Option />
            </div>
        );
    }
}

//React AddOption Component
class AddOption extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <input type='text' />
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