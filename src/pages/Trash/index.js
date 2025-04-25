import { Fragment } from "react"
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { useNotes } from "../../context/notes-context"
import { NotesCard } from "../../components/NotesCard"

export const Trash = () => {

    const { trash } = useNotes();

    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-4">
                <Sidebar />
                <div className="flex-1 flex flex-wrap w-screen mt-2 relative gap-4 items-start">
                    {
                        trash?.length > 0 && trash.map(({id, title, text, isPinned}) => {
                            return <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                        })
                    }
                </div>
            </main>
        </Fragment>
    )
}