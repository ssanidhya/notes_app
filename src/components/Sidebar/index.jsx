import { NavLink } from "react-router-dom";

export const Sidebar = () => {

    const getStyles = ({isActive}) => {
        const styles = "flex items-center gap-2 px-3 py-2 rounded-tr-full rounded-br-full";
        return isActive
        ? `bg-indigo-600 text-white ${styles}`
        : `hover:bg-indigo-100 ${styles}`;
    }

    return (
        <aside className="flex flex-col px-1 py-4  gap-3 border-r-2 border-gray-200 w-48 h-screen">
            <NavLink className={getStyles} to="/">
                <span className="material-symbols-outlined">home</span>
                <span>Home</span>
            </NavLink>
            <NavLink className={getStyles} to="/archive">
                <span className="material-symbols-outlined">archive</span>
                <span>Archive</span>
            </NavLink>
            <NavLink className={getStyles} to="/important">
                <span className="material-symbols-outlined">label_important</span>
                <span>Important</span>
            </NavLink>
            <NavLink className={getStyles} to="/bin">
                <span className="material-symbols-outlined">delete</span>
                <span>Bin</span></NavLink>
        </aside>
    );
};
