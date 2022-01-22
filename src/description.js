import React from "react";

function Description ({children}) {
    return (
        <React.Fragment>
            <h2>Описание</h2>
            {children}
        </React.Fragment>
    );
}

export default Description;