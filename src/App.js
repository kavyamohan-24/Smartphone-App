import logo from './logo.svg';
import './App.css';
import AddSmartPhone from './components/AddSmartPhone';
import SearchSmartPhone from './components/SearchSmartPhone';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeleteSmartPhone from './components/DeleteSmartPhone';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddSmartPhone/>}/>
    <Route path="/search" element={<SearchSmartPhone/>}/>
    <Route path="/delete" element={<DeleteSmartPhone/>}/>
   </Routes>
   </BrowserRouter>


  );
}

export default App;
