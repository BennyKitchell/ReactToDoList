//React AddOption Component
import React from 'react';

//export default the class to be used in other files
export default class AddOption extends React.Component{
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
        
        this.setState(() => ({error}));
        if(!error){
            e.target.elements.option.value = '';
        }
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