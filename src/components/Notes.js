import { MdDelete } from "react-icons/md";

const Notes = ({id,text,date,deleteNote}) => {
    return (
        <div className="notes">
            <span>{text} </span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDelete className="delete-icon" size="1.3em" onClick={()=> deleteNote(id)}/>
            </div>
        </div>
    )
};

export default Notes;