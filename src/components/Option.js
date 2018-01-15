// React Option Component
// Since our jsx gets simplified down to JSX we still need react 
// Even if its not obvious
import React from 'react';

const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button 
                onClick={(e) =>{
                    props.handleDeleteOption(props.optionText);
                }}
            >
            Remove
            </button>
        </div>
    )
}
export default Option;