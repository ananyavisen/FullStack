import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Counter from './Components/Counter'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<h1>Home</h1>} />
      <Route path = "/counter" element={<Counter />} />
      <Route path = "*" element={<h1>Error: Page not found</h1>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
