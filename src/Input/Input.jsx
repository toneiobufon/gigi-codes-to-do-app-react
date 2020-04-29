import React from 'react';
import "./Input.css";

export const Input= ({onSubmit, value, onChange}) => {


    return (
        <form onSubmit={onSubmit}>
            <input
            className="InputBar"
            type="text"
            placeholder="Enter To Do Item"
            value={value}
            onChange={onChange}
            
            />
            <button className="SubmitBttn">Submit</button>

        </form>
    );
    
};
