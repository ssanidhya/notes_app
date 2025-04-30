import { useNotes } from "../../context/notes-context";
import { findNotes } from "../../utils/findNotes";

export const NotesCard = ({ id, title, text, isPinned, fromTrash }) => {

    const { notesDispatch, archive, trash } = useNotes();

    const onPinClick = (id) => {
        !isPinned && notesDispatch({
            type: 'PIN_NOTE',
            payload: { id }
        })

        isPinned && notesDispatch({
            type: 'UNPIN_NOTE',
            payload: { id }
        })
    }

    const onArchiveClick = (id) => {
        // console.log("pressed Archive Button");
        notesDispatch({
            type: !isArchived ? 'ADD_TO_ARCHIVE' : 'REMOVE_FROM_ARCHIVE',
            payload: { id }
        })
    }

    const onDeleteClick = (id, from) => {
        notesDispatch({
            type: from === 'trash' ? 'DELETE_FROM_TRASH' : 'DELETE_NOTE',
            payload: { id , from}
        })
    }

    const onRestoreClick = (id) => {
        notesDispatch({
            type: 'RESTORE_FROM_TRASH',
            payload: { id }
        })
    }
    const isArchived = findNotes(archive, id);
    const isTrashed = findNotes(trash, id);


    return (
        <div className="w-56 border border-neutral-400 rounded-sm hover:shadow-md transition-all duration-100 ease-in-out" key={id}>
            <div className="flex justify-between items-center gap-2 border-b-2 border-gray-200">
                <div className="break-words whitespace-normal font-semibold px-1 m-1">{title}</div>
                {
                    !isArchived && !isTrashed ? <button onClick={() => onPinClick(id)} className="w-6 h-6 items-center justify-center relative overflow-hidden">
                        <span className={`material-symbols-outlined absolute inset-0 transition-all duration-100 ${isPinned ? 'opacity-0' : 'opacity-100'}`}>
                            keep
                        </span>
                        <span className={`material-symbols-outlined absolute inset-0 transition-all duration-100 ${isPinned ? 'opacity-100' : 'opacity-0'}`}>
                            keep_off
                        </span>
                    </button> : <></>
                }
            </div>
            <div className="">
                <div className="break-words whitespace-normal text-sm px-1 min-h-[80px] m-1">
                    {text}
                </div>
                <div className="flex justify-end gap-2 px-2 pb-2">
                    {isTrashed ? (
                        <>
                            <button onClick={ () => onRestoreClick(id)}>
                                <span className="material-symbols-outlined">restore</span>
                            </button>
                            <button onClick={() => onDeleteClick(id, 'trash')}>
                                <span className="material-symbols-outlined">delete_forever</span>
                            </button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => onArchiveClick(id)}>
                                <span className="material-symbols-outlined">
                                    {isArchived ? 'unarchive' : 'archive'}
                                </span>
                            </button>
                            <button onClick={() => onDeleteClick(id, isArchived ? 'archive' : 'notes')}>
                                <span className="material-symbols-outlined">delete</span>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}