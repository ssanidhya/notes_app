import { Navbar } from "../../components/Navbar"
import { Fragment } from "react"
import { Sidebar } from "../../components/Sidebar"


export const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <main>
                <Sidebar />
            </main>
        </Fragment>
    )
}