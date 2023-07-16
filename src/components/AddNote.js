import { useState } from "react"

const AddNote = ({ handleNote }) => {
    const [noteText, setNoteText] = useState(" ");
    const characterLimit = 200;

    const handleValue = (e) => {
        if(characterLimit - e.target.value.length >= 0)
        setNoteText(e.target.value)
    }

    const handleSave = () => {
        if (noteText.trim().length > 0) {
            handleNote(noteText)
            setNoteText(" ");
        }
    };

    return (
        <div className="notes new">
            <textarea rows="8" cols="10" placeholder="Write something"
                value={noteText} onChange={handleValue}></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
export default AddNote