import { Navbar } from "../../components/Navbar"
import { Fragment, useReducer, useState } from "react"
import { Sidebar } from "../../components/Sidebar"
import { notesReducer } from "../../reducers/notesReducer"

export const Home = () => {

    const initialState = {
        title: '',
        text: '',
        notes: []
    }
    const [state, notesDispatch] = useReducer(notesReducer, initialState);

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

    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-4">
                <Sidebar />
                <div>
                    <div className="flex flex-col w-[300px] gap-1 border-red-400 border-2 relative">
                        <input value={state.title} onChange={onTitleChange} className="border" placeholder="Enter Title" />
                        <textarea value={state.text} onChange={onTextChange} className="border resize-none w-full h-24" placeholder="Enter Text" />
                        <button disabled={state.title.length === 0} onClick={onAddClick} className="absolute bottom-0 right-0">
                            <span className="material-symbols-outlined">
                                add
                            </span>
                        </button>
                    </div>
                    <div className="mt-14 flex flex-wrap gap-4">
                        {
                            state.notes?.length > 0 && state.notes.map(({ id, title, text }) => {
                                return (
                                    <div className="w-56 border border-neutral-400 rounded-sm" key={id}>
                                        <div className="flex justigy-between items-center gap-2 border-b-2 border-gray-200">
                                            <p>{title}</p>
                                            <button>
                                                <span class="material-symbols-outlined">
                                                    keep
                                                </span>
                                            </button>
                                        </div>
                                        <div>
                                            <p>{text}</p>
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
                            })
                        }
                    </div>
                </div>
            </main>
        </Fragment>
    )
}