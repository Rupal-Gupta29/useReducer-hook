import Form from "./components/Form";
import NoteList from "./components/NoteList";
import { NoteListProvider } from "./context/NoteListProvider";

const App = () => {
  return (
    <NoteListProvider>
      <div className="max-w-lg mx-auto p-6">
        <h1 className="text-3xl mb-6">Notes App</h1>
        <Form />
        <NoteList />
      </div>
    </NoteListProvider>
  );
};

export default App;
