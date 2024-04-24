import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Users from './pages/Users';
import CreateUser from './pages/CreateUser';
import UpdateUser from './pages/UpdateUser';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div>
    <Header />
      <BrowserRouter>
          <Routes>
            <Route path = "/"       element = {<Users /> }></Route>
            <Route path = "/create_user" element = {<CreateUser /> }></Route>
            <Route path = "/update_user" element = {<UpdateUser /> }></Route>
          </Routes>
       </BrowserRouter>
    </div>
  )
}
export default App