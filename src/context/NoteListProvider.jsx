import { createContext } from "react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "addNote":
      return [...state, action.payload];
    case "removeNote":
      return state.filter((note) => note.id !== action.payload);
    default:
      return [...state];
  }
}

const NoteListContext = createContext();

const NoteListProvider = ({ children }) => {
  let initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NoteListContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteListContext.Provider>
  );
};

export { NoteListProvider, NoteListContext };
