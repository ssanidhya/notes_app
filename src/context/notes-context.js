import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers/notesReducer";

const NotesContext = createContext();

const initialState = {
    title: '',
    text: '',
    notes: [],
}

const NotesProvider = ({ children }) => {
    
    const [{title, text, notes}, notesDispatch] = useReducer(notesReducer, initialState);
    
    return (
        <NotesContext.Provider value={{ title, text, notes, notesDispatch }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };