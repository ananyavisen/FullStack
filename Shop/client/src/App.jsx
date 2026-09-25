
import './App.css'

import Store from './Components/Store'
import { BrowserRouter, Route } from 'react-router-dom'
import UserLayout from '../../../Shopping-Cart/Shop/Components/UserLayout'
import Cart from './Components/Cart'
import Profile from './Components/Profile'
import { Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout />}>
      <Route index element={<Store />} />
      <Route path="/mycart" element={<Cart />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/settings" element={<h1>Settings</h1>}/>
      <Route path="/logout" element={<h1> Logout</h1>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    

    </>
  )
}

export default App
