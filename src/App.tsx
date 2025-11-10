import { Routes, Route } from 'react-router-dom'
import { PageLayout } from './pageLayout'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='skills' element={<Skills />} />
        
        <Route path='*' element={<div className="card"><h2>404</h2><p>Not found.</p></div>} />
      </Route>
    </Routes>
  )
}

export default App
