//React component header
import React from 'react';
//stateless functional component
//can still use props, just no state
const Header = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'React To-do App'
}

export default Header;