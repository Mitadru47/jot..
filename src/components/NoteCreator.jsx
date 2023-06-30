import React from "react";

function NoteCreator(props){

    const [note, updateNote] = React.useState({ title: "", content: ""});

    function handleHoverIn(){
        document.getElementById("addButton").style.color = "white";
        document.getElementById("addButton").style.backgroundColor = "black";
    }

    function handleHoverOut(){
        document.getElementById("addButton").style.color = "black";
        document.getElementById("addButton").style.backgroundColor = "#9376E0";
    }

    function handleInput(event){
        const {value, name} = event.target;

        updateNote((prevNote) => {
            return ({
                ...prevNote,
                [name]: value
            });
        });
    }

    function addNote(event){

        props.onAddition(note);

        updateNote({ title: "", content: ""});
        event.preventDefault();
    }

    return (
        <div className="creator">
            <form>
                <input name="title" onChange={handleInput} type="text" placeholder="Title" value={note.title}/>
                <textarea name="content" onChange={handleInput} type="text" placeholder="Start jotting.." value={note.content}/>

                <button 
                    id="addButton" 
                    
                    onMouseOver={handleHoverIn} 
                    onMouseOut={handleHoverOut} 

                    onClick={addNote}
                    
                    type="submit">
                        jot..
                </button>
            </form>
        </div>
    );
}

export default NoteCreator;