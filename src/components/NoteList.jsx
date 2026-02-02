import NoteCard from "./NoteCard";

const NoteList = ({ notes, dispatch }) => {
  return (
    <div>
      {notes && notes.map((note) => <NoteCard note={note} key={note.id} dispatch={dispatch}/>)}
    </div>
  );
};

export default NoteList;
