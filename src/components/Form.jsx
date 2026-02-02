import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { NoteListContext } from "../context/NoteListProvider";

const Form = () => {
  const { dispatch } = useContext(NoteListContext);
  const [note, setNote] = useState({
    id: uuidv4(),
    title: "",
    description: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleAddNote = () => {
    if (!note.title.trim() || !note.description.trim()) {
      setErrorMsg("Please fill all the fields.");
      return;
    }
    dispatch({ type: "addNote", payload: note });
    setNote({ id: uuidv4(), title: "", description: "" });
    setErrorMsg("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Note title"
        className="w-full border p-2 rounded mb-2"
        value={note.title}
        name="title"
        onChange={(e) => setNote({ ...note, [e.target.name]: e.target.value })}
      />

      <textarea
        placeholder="Note description"
        className="w-full border p-2 rounded mb-3"
        value={note.description}
        name="description"
        onChange={(e) => setNote({ ...note, [e.target.name]: e.target.value })}
      />

      <button
        className="w-full bg-purple-600 text-white py-2 rounded mb-4"
        onClick={handleAddNote}
      >
        Add Note
      </button>
      <p className="text-red-600">{errorMsg && errorMsg}</p>
    </div>
  );
};

export default Form;
