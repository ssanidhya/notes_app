import { v4 as uuid } from 'uuid';

export const notesReducer = (state, action) => {
    switch (action.type) {
        case 'TITLE':
            return {
                ...state,
                title: action.payload
            };
        case 'TEXT':
            return {
                ...state,
                text: action.payload
            };
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, { text: state.text, title: state.title, id: uuid(), isPinned: false }]
            };
        case 'CLEAR_INPUT':
            return {
                ...state,
                title: '',
                text: ''
            };
        case 'PIN_NOTE':
            const pinnedNote = state.notes.find(note => note.id === action.payload.id);
            const updatedNotes = state.notes.filter(note => note.id !== action.payload.id);
            return {
                ...state,
                notes: [...updatedNotes, { ...pinnedNote, isPinned: true }]
            };
        case 'UNPIN_NOTE':
            const unpinnedNote = state.notes.find(note => note.id === action.payload.id);
            const updatedNotes2 = state.notes.filter(note => note.id !== action.payload.id);
            return{
                ...state,
                notes: [...updatedNotes2, {...unpinnedNote, isPinned: false}]
            };
        case 'ADD_TO_ARCHIVE':
            return{
                ...state,
                archive: [...state.archive, state.notes.find(note => note.id === action.payload.id)],
                notes: state.notes.filter(note => note.id !== action.payload.id)
            }
        case 'REMOVE_FROM_ARCHIVE':
            return{
                ...state,
                notes: [...state.notes, state.archive.find(note => note.id === action.payload.id)],
                archive: state.archive.filter(note => note.id !== action.payload.id)
            }
        case 'DELETE_NOTE':
            const deletedNote = state.notes.find(note => note.id === action.payload.id) || state.archive.find(note => note.id === action.payload.id);
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.id),
                archive: state.archive.filter(note => note.id !== action.payload.id),
                trash: [...state.trash, {...deletedNote, from: action.payload.from}]
            }
        case 'RESTORE_FROM_TRASH':
            const restoredNote = state.trash.find(note => note.id === action.payload.id);
            return {
                ...state,
                [restoredNote.from]: [...state[restoredNote.from], {...restoredNote}],
                trash: state.trash.filter(note => note.id !== action.payload.id)
            
            }
        case 'DELETE_FROM_TRASH':
            return {
                ...state,
                trash: state.trash.filter(note => note.id !== action.payload.id)
            }
        default:
            return state;
    }
}