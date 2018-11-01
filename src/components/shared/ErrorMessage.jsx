import React from 'react';


const ErrorMessage =  (props) => {
    if(typeof  props === 'object' &&
        props.hasOwnProperty('message') &&
        typeof props.message === 'string' &&
        props.message
    ) {
        return (
            <div style={{color: 'red'}}>{props.error}</div>
        );
    }
    return '';
};

export default ErrorMessage;