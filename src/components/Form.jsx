import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ dispatch }) => {
  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleInput = (e) => {
    setNote({ ...note, id: uuidv4(), [e.target.name]: e.target.value });
  };

  const handleAddNote = () => {
    dispatch({ type: "addNote", payload: note });
    setNote({ id: "", title: "", description: "" });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Note title"
        className="w-full border p-2 rounded mb-2"
        value={note.title}
        name="title"
        onChange={(e) => handleInput(e)}
      />

      <textarea
        placeholder="Note description"
        className="w-full border p-2 rounded mb-3"
        value={note.description}
        name="description"
        onChange={(e) => handleInput(e)}
      />

      <button
        className="w-full bg-purple-600 text-white py-2 rounded mb-4"
        onClick={handleAddNote}
      >
        Add Note
      </button>
    </div>
  );
};

export default Form;
