import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import Note from "./Note";
import NoteCreator from "./NoteCreator";

import Samples from "../notes";

function App(){

    const [Notes, updateNotes] = React.useState(Samples.map((sample) => { return ({title: sample.title, content: sample.content}); }));

    function createNote(newNote){
        updateNotes((prevNotes => {
            return ([...prevNotes, newNote]);
        }));
    }

    function deleteNote(noteIndex){
        updateNotes((prevNotes => {
            return (prevNotes.filter((noteItem, index) => (index !== noteIndex && noteItem)));
        }));
    }

    return (
        <div>

            <div id="content-wrap">
            
                <Header />
                <NoteCreator onAddition={createNote} /> 

                {Notes.map((Item, index) => (
                    <Note 
                        key={index}
                        id={index}

                        title={Item.title}
                        content={Item.content}

                        onDeletion={deleteNote}
                    />
                ))}

            </div>

            <Footer />
            
        </div>
    );
}

export default App;