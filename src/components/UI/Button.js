import React from 'react';
import classes from '../UI/Button.module.css';


const Button = props => {
    return (<button 
        type={props.type || 'button' } 
        // 'button' is a fallback value; I don't know if it does anything.
        onClick={props.onClick} 
        className={classes.button} >
            {props.children}
        </button>);
};

export default Button;