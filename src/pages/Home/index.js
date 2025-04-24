import { Navbar } from "../../components/Navbar"
import { Fragment } from "react"
import { Sidebar } from "../../components/Sidebar"
import { NotesCard } from "../../components/NotesCard"
import { useNotes } from "../../context/notes-context"

export const Home = () => {

    const { title, text, notes, notesDispatch } = useNotes();

    const onTitleChange = (e) => {
        notesDispatch({
            type: 'TITLE',
            payload: e.target.value
        })
    }

    const onTextChange = (e) => {
        notesDispatch({
            type: 'TEXT',
            payload: e.target.value
        })
    }

    const onAddClick = (e) => {
        notesDispatch({
            type: 'ADD_NOTE'
        })
        notesDispatch({
            type: 'CLEAR_INPUT'
        })
    }

    const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
    const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);


    console.log(pinnedNotes, otherNotes);

    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-4">
                <Sidebar />
                <div>
                    <div className="flex flex-col w-[300px] gap-1 border-2 relative">
                        <input value={title} onChange={onTitleChange} className="border border-neutral-400 rounded-t-md focus:outline-none border-b-0 p-1" placeholder="Enter Title" />
                        <textarea value={text} onChange={onTextChange} className="border border-neutral-400 rounded-b-md focus:outline-noneborder-t-0 p-1 resize-none w-full h-24" placeholder="Enter Text" />
                        <button disabled={title.length === 0} onClick={onAddClick} className="w-6 h-6 m-1 bg-indigo-400 text-slate-50 rounded-full hover:bg-indigo-500 hover:scale-110 transition-all duration-200 ease-in-out absolute top-[calc(100%-30px)] right-[-40px]">
                            <span className="material-symbols-outlined">
                                add
                            </span>
                        </button>
                    </div>
                    <div>{
                        pinnedNotes?.length > 0 && (
                            <div className="mt-14 flex flex-wrap gap-4">
                                <h3 className="w-full"> Pinned Notes </h3>
                                {
                                    pinnedNotes?.length > 0 && pinnedNotes.map(({ id, title, text, isPinned }) => {
                                        return <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                    })
                                }
                            </div>
                        )}
                    </div>
                    <div>{
                        otherNotes?.length > 0 && (
                            <div className="mt-14 flex flex-wrap gap-4">
                                <h3 className="w-full"> Other Notes </h3>
                                {
                                    otherNotes?.length > 0 && otherNotes.map(({ id, title, text, isPinned }) => {
                                        return <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                    })
                                }
                            </div>
                        )}
                    </div>

                </div>
            </main>
        </Fragment>
    )
}