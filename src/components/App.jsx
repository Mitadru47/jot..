import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import Note from "./Note";
import Notes from "../notes";

function App(){
    return (
        <div>
            <Header />
            
            {Notes.map(Item => (
                <Note 
                    key={Item.id}

                    title={Item.title}
                    content={Item.content}
                />
            ))}
            
            <Footer />
        </div>
    );
}

export default App;