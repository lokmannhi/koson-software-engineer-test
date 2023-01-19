import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteBody, setNewNoteBody] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/notes").then((res) => {
      setNotes(res.data.data);
    });
  }, []);

  const insertNote = () => {
    axios.post("http://localhost:8000/notes", {
      notetitle: noteTitle,
      notebody: noteBody,
    });
    window.location.reload(false);
  };

  const updateNote = (id) => {
    axios.put(
      `http://localhost:8000/notes/${id}`,
      {
        notetitle: newNoteTitle,
        notebody: newNoteBody,
      },
      window.location.reload(false)
    );
    setNewNoteTitle("");
    setNewNoteBody("");
  };

  const deleteNote = (id) => {
    axios.delete(
      `http://localhost:8000/notes/${id}`,
      window.location.reload(false)
    );
  };
  return (
    <div className="App">
      <div>
        <h1>New Note</h1>
        <label>Note Title</label>
        <input
          type="text"
          name="note title"
          onChange={(e) => {
            setNoteTitle(e.target.value);
          }}
        />
        <label>Note Body</label>
        <input
          type="text"
          name="note body"
          onChange={(e) => {
            setNoteBody(e.target.value);
          }}
        />
        <button onClick={insertNote}>Add New Note</button>
      </div>
      {notes.map((note) => {
        return (
          <div>
            <div key={note.id}>
              <h3>{note.notetitle}</h3>
              <h6>{note.notebody}</h6>
            </div>
            <div>
              <input
                type="text"
                name="new note body"
                onChange={(e) => {
                  setNewNoteTitle(e.target.value);
                }}
              />
              <input
                type="text"
                name="new note body"
                onChange={(e) => {
                  setNewNoteBody(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  updateNote(note.id);
                }}
              >
                Update Note
              </button>
              <button
                onClick={() => {
                  deleteNote(note.id);
                }}
              >
                Delete Note
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
