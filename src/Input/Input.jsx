import React from 'react';
import "./Input.css";

export const Input= ({onSubmit, value, onChange}) => {


    return (
        <form onSubmit={onSubmit}>
            <input
            className="InputBar"
            type="text"
            placeholder="Agrega algo!"
            value={value}
            onChange={onChange}
            
            />
            <button className="SubmitBttn">Agregar</button>

        </form>
    );
    
};
