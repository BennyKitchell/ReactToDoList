import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

//Can be found in jsx template below and can be called endlessly
//Uppercase first letter is REQUIRED
export default class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options:  []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleChoice = this.handleChoice.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
    //lifecycle method that is fired when component is mounted to the DOM
    componentDidMount(){
        console.log('fetching data...');
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options}))
            }
        }
        catch(e){
            //Do nothing
            console.log('Invalid json in options')
        }
    }
    //lifecycle method that is fired when component props or state is changed
    componentDidUpdate(prevProps, prevState){
        //check if options length has changed
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log('saving data...');
        } 
    }
    //lifecycle method that is fired when just before the component goes away
    componentWillUnmount(){

    }
    handleDeleteOptions(){
        //wrap an object in  ( ) in arrow functions to return object rather than empty body
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            //use filter to return array with everything except word that was removed
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
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

        //using concat instead of push so that we are not directly affecting the state
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }
    render(){
        //Props for the ToDoApp
        const subtitle = 'Generate Something To Do!';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action handleChoice={this.handleChoice} hasOptions={this.state.options.length > 0}/>
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}