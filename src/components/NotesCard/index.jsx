import { useNotes } from "../../context/notes-context";

export const NotesCard = ({id, title, text, isPinned}) => {
    const { notesDispatch } = useNotes();
    
    const onPinClick = (id) => {
        !isPinned && notesDispatch({
            type:'PIN_NOTE',
            payload: {id}
        })

        isPinned && notesDispatch({
            type:'UNPIN_NOTE',
            payload: {id}
        })
    }

    return (
        <div className="w-56 border border-neutral-400 rounded-sm hover:shadow-md  transition-all duration-100 ease-in-out" key={id}>
            <div className="flex justify-between items-center gap-2 border-b-2 border-gray-200">
                <div className="break-words whitespace-normal font-medium border px-1">{title}</div>
                <button onClick={() => onPinClick(id)} className="w-6 h-6 items-center justify-center relative overflow-hidden">
                    <span className={`material-symbols-outlined absolute inset-0 transition-all duration-100 ${isPinned ? 'opacity-0' : 'opacity-100'}`}>
                        keep
                    </span>
                    <span className={`material-symbols-outlined absolute inset-0 transition-all duration-100 ${isPinned ? 'opacity-100' : 'opacity-0'}`}>
                        keep_off
                    </span>
                </button>
            </div>
            <div>
                <div className="break-words whitespace-normal text-sm px-1">{text}</div>
                <button>
                    <span className="material-symbols-outlined">
                        archive
                    </span>
                    <span className="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </div>
        </div>
    );
}