import React from 'react';
import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';

const ErrorModal = props => {
    return(
        // We want to get out of the backdrop layout if either the backdrop 
        // itself or the button is clicked. Hence we add props.onConfirm to both 
        // elements.
        // For the button, the onClick value is forwarded to the native onClick attribute on 
        // the button definition in Button.js. This is why 
        // we can actually use it.
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm} >Okay</Button>
                </footer>
            </Card>
        </div>
    );
};
export default ErrorModal;