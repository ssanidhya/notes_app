import logo from '../../assets/images/notes_app_image.png';

export const Navbar = () => {
    return(
        <header className='flex px-4 py-3 gap-3 border-b-2 border-gray-200'>
            <div className='w-14 h-12'>
                <img className='w-full h-full' src= {logo} alt='logo'/>
            </div>
            <h1 className='text-indigo-800 text-4xl font-bold'>NoteIt</h1>
        </header>
    )
}