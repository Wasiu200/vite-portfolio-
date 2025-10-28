import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
// import './App.css';
import Navbar from './common/navbar'
import Sidebar from './common/sidebar.jsx';
import About from './Portfolio/About.jsx';
import Resume from './Portfolio/Resume.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Contact from './Portfolio/Contact.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
      <Navbar />
      <Sidebar/>
     <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Sidebar" element={<Sidebar />} />
     </Routes>
    </BrowserRouter>
      {/* <Contact /> */}
      {/* <Portfolio /> */}
      {/* <Resume /> */}
    </>
  )
}

export default App
