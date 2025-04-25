import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Archive } from './pages/Archive';
import { Trash } from './pages/Trash';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/archive' element={<Archive/>} />
      <Route path='/trash' element={<Trash/>}/>
    </Routes>
  );
}

export default App;
