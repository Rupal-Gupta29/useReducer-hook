import { useReducer } from "react";
import Form from "./components/Form";
import NoteList from "./components/NoteList";

function reducer(state, action) {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case "addNote":
      return [...state, action.payload];
    case "removeNote":
      return state.filter((note) => note.id !== action.payload);
    default:
      return [...state];
  }
}

const App = () => {
  let initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl mb-6">Notes App</h1>
      <Form dispatch={dispatch} />
      <NoteList notes={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
