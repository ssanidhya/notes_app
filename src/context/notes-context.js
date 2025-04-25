import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers/notesReducer";

const NotesContext = createContext();

const initialState = {
    title: '',
    text: '',
    notes: [],
    archive: [],
    trash: []
}

const NotesProvider = ({ children }) => {

    const [{title, text, notes, archive, trash}, notesDispatch] = useReducer(notesReducer, initialState);

    return (
        <NotesContext.Provider value={{ title, text, notes, archive, trash, notesDispatch }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };