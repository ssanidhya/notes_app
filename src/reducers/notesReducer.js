import { v4 as uuid } from 'uuid';

export const notesReducer = (state, { type, payload }) => {
    switch (type) {
        case 'TITLE':
            return {
                ...state,
                title: payload
            };
        case 'TEXT':
            return {
                ...state,
                text: payload
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
            const pinnedNote = state.notes.find(note => note.id === payload.id);
            const updatedNotes = state.notes.filter(note => note.id !== payload.id);
            return {
                ...state,
                notes: [...updatedNotes, { ...pinnedNote, isPinned: true }]
            };
        case 'UNPIN_NOTE':
            const unpinnedNote = state.notes.find(note => note.id === payload.id);
            const updatedNotes2 = state.notes.filter(note => note.id !== payload.id);
            return{
                ...state,
                notes: [...updatedNotes2, {...unpinnedNote, isPinned: false}]
            };
        default:
            return state;
    }
}