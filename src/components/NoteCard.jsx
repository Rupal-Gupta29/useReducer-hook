import { useContext } from "react";
import { NoteListContext } from "../context/NoteListProvider";

const NoteCard = ({ note }) => {
  const {dispatch} = useContext(NoteListContext)
  return (
    <div className="border border-gray-500 rounded p-4 flex justify-between mt-4">
      <div>
        <h3 className="text-lg font-medium">{note.title}</h3>
        <p className="text-sm text-gray-600">{note.description}</p>
      </div>

      <button
        className="text-red-500 text-sm hover:underline"
        onClick={() => dispatch({ type: "removeNote", payload: note.id })}
      >
        Remove
      </button>
    </div>
  );
};

export default NoteCard;
