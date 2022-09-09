import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
           
    </div>
  )
}

export default App
