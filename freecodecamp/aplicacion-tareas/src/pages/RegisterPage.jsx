import { useState, useContext } from 'react'
import AccountContext from '../context/AccountConext'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const { signup } = useContext(AccountContext)

  const handleRegistration = (e) => {
    e.preventDefault()
    signup(email, name, password)
      .then(data => {
        console.log('registered successfully', data)
      })
      .catch(err => {
        console.log('faile to register', err.message)
      })
  }

  return (
    <div>
      <h1 style={{ color: 'white' }}>Register Page</h1>
      <form>
        <label htmlFor='email'>Email</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor='name'>Name</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor='password'>Password</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' onClick={handleRegistration}>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage
