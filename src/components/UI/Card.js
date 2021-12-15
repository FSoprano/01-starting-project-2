import React from 'react';
import classes from "./Card.module.css";
// Need to import from Card.module.css in this way because we're using 
// CSS modules.
const Card = (props) => {
    
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
    /* We inject two CSS stylings here, one is .card from the CSS modules file
    Card.module.css; the other is classes.input, which is passed down via props 
    from the className attribute of the <Card> element in AddUser.js.
    
    props.children is built into React. 
    We need it if we want to wrap return output 
    in custom components (here: Card). 
    children is a reserved name. Its value will 
    always be the content in between the custom 
    component tags.*/
}
export default Card;