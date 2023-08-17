import './App.css'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import About from './pages/About'
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Contact from './pages/Contact';


const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>

      <Footer />

    </div>

  );

}

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />

          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
