import React from "react"; 

const Controls = ({ onIncrement }) => {
    <div className="Counter__controls">
        <button style={{ padding: '10px', margin: '10px' }} type="button" onClick={onIncrement}>
            Good
        </button>
        <button style={{ padding: '10px', margin: '10px' }} type="button"
            onClick={onIncrement}>
            Neutral
        </button>
        <button style={{ padding: '10px', margin: '10px' }} type="button"
            onClick={onIncrement}>
            Bad
        </button>
    </div>
};

export default Controls;
