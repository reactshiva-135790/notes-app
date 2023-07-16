import './App.css';
import NoteList from './components/NoteList';
import { useState } from 'react';
import { nanoid } from "nanoid"
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my First NoteList",
      date: "15/06/2023"
    },
    {
      id: nanoid(),
      text: "This is my First NoteList",
      date: "14/06/2023"
    },
    {
      id: nanoid(),
      text: "This is my Second NoteList",
      date: "15/06/2023"
    },
    {
      id: nanoid(),
      text: "This is my Third NoteList",
      date: "16/06/2023"
    },
    {
      id: nanoid(),
      text: "This is my Four NoteList",
      date: "17/06/2023"
    },
  ])

  const [searchText, setSearchText] = useState(" ");
  const [darkMode, setDarkMode] = useState(false)

  const addNote = (text) => {
    // console.log(text)
    const data = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: data.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };



  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearch={setSearchText} />
        <NoteList notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))}
          handleNote={addNote} deleteNote={deleteNote}
        />
      </div>
    </div>

  );
}

export default App;
