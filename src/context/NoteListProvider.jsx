import { createContext } from "react"

const NoteListProvider = ({children}) => {
    const NoteListContext = createContext()
    

  return (
    <div>NoteListProvider</div>
  )
}

export default NoteListProvider