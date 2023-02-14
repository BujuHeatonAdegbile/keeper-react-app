import React from "react";
import Header from './Header.jsx';
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js"
import CreateArea from "./CreateArea.jsx";


function App(){
    const [notes, setNotes] = React.useState([])

    function addNote(newNote){
        setNotes(prevNote => {
            return [...prevNote, newNote]
        })
    }
    

    function deleteNote(id){
        setNotes(prevNote => {
            return prevNote.filter((noteItem, index) => {
                return index != id
            })
        })
    }

    return(
        <div>
            <Header />
            <CreateArea onAdd = {addNote} />
            {notes.map((noteItem, index) => (
            <Note 
            key = {index} 
            id = {index}
            title = {noteItem.title} 
            content = {noteItem.content} 
            onDelete = {deleteNote}/>)
            )}
            <Footer />
        </div>
    )
}

export default App
