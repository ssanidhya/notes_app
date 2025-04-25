import { useNotes } from "../../context/notes-context";
import { findNotesInArchive } from "../../utils/findNotesInArchive";

export const NotesCard = ({ id, title, text, isPinned }) => {

    const { notesDispatch, archive } = useNotes();

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
        !isArchived ? notesDispatch({
            type: 'ADD_TO_ARCHIVE',
            payload: { id }
        }) : notesDispatch({
            type: "REMOVE_FROM_ARCHIVE",
            payload: { id }
        })
    }



    const isArchived = findNotesInArchive(archive, id);

    return (
        <div className="w-56 border border-neutral-400 rounded-sm hover:shadow-md transition-all duration-100 ease-in-out" key={id}>
            <div className="flex justify-between items-center gap-2 border-b-2 border-gray-200">
                <div className="break-words whitespace-normal font-semibold px-1 m-1">{title}</div>
                {
                    !isArchived ? <button onClick={() => onPinClick(id)} className="w-6 h-6 items-center justify-center relative overflow-hidden">
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
                <div className="flex gap-2 ml-2 justify-end">
                    <button onClick={() => onArchiveClick(id)} className="flex ">
                        <span className="material-symbols-outlined">
                            {isArchived ? 'unarchive' : 'archive'}
                        </span>
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}