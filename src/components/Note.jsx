import React from "react";

function Note(props){

    const [hoverState, setHoverState] = React.useState(false);

    function handleHover(){
        setHoverState(!hoverState);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>

            <button id="deleteButton" 
            
            onMouseOver={handleHover} 
            onMouseOut={handleHover} 
            
            style={{color: hoverState ? "black" : "#9376E0"}}

            onClick={() => props.onDeletion(props.id)}>
                Delete
            </button>
        </div>
    );
}

export default Note;