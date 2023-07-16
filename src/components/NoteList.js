import Notes from "./Notes"
import AddNote from "./AddNote"

const NoteList = ({ notes,handleNote,deleteNote }) => {
    return (
        <div className="notes-list">
            {
                notes.map((note) => <Notes id={note.id} text={note.text} date={note.date} deleteNote={deleteNote}/>)
            }
            <AddNote handleNote={handleNote} />
        </div>
    )
}

export default NoteList