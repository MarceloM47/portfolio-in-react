import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/skills" element={<SkillsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;