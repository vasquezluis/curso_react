import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Tareas from './pages/Tasks'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import AccountState from './states/AccountState'

function App () {
  return (
    <BrowserRouter>
      <AccountState>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/tareas' element={<Tareas />} />
        </Routes>
      </AccountState>
    </BrowserRouter>
  )
}

export default App
