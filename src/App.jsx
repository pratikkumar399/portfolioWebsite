import './App.css'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Intro from './pages/Intro'
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import About from './pages/AboutMe';


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
            <Route index element={<Intro />} />
            <Route path="/intro" element={<Intro />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
