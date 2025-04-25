export const findNotes = (archive, id) => {
        return archive.some(note => note.id === id);
}