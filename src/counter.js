import React from "react";

function Counter () {
    return (
        <React.Fragment>
            Количество:
            <button type="button">-</button>
            <span>1</span>
            <button type="button">+</button>
        </React.Fragment>
    )
};

export default Counter;