import { useState, useContext, useEffect } from 'react'
import AccountContext from '../context/AccountConext'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { authenticate, getSession } = useContext(AccountContext)

  useEffect(() => {
    getSession().then((session) => {
      console.log('Session:', session)
    })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    authenticate(email, password)
      .then(data => {
        window.localStorage.setItem('token', data.accessToken.jwtToken)
        console.log('Logged in!', data)
      })
      .catch(err => {
        console.log('Failed to login!', err.message)
      })
  }

  return (
    <div>
      <h1 style={{ color: 'white' }}>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor='email'>Email</label>
        <input type='email' onChange={(e) => setEmail(e.target.value)} />
        <p>{email}</p>
        <label htmlFor='password'>Password</label>
        <input type='password' onChange={(e) => setPassword(e.target.value)} />
        <p>{password}</p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default LoginPage
