import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Menu from './components/pages/Menu'
import Contact from './components/pages/Contact'
import Gallery from './components/pages/Gallery'
import './App.css'

function App() {
  return (
    <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </Router>
  )
}

export default App
