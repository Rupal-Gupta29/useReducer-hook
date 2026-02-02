import { useContext } from "react";
import NoteCard from "./NoteCard";
import { NoteListContext } from "../context/NoteListProvider";

const NoteList = () => {
  const { state: notes } = useContext(NoteListContext);
  return (
    <div>
      {notes && notes.map((note) => <NoteCard note={note} key={note.id} />)}
    </div>
  );
};

export default NoteList;
