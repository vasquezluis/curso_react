import AccountContext from '../context/AccountConext'
import userPool from './userPool'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'

const AccountState = (props) => {
  // logout funcionality
  const logout = async () => {
    return await new Promise((resolve, reject) => {
      const user = userPool.getCurrentUser()
      if (user) {
        user.signOut()
        resolve(user)
      } else {
        reject(new Error('User not found'))
      }
    })
  }

  // get current session
  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = userPool.getCurrentUser()
      if (user) {
        user.getSession(async (err, session) => {
          if (err) {
            reject(err)
          } else {
            // resolve(session)

            // get user attributes
            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if (err) {
                  console.log(err.message)
                  reject(err)
                } else {
                  const results = {}

                  for (const attribute of attributes) {
                    const { Name, Value } = attribute
                    results[Name] = Value
                  }

                  resolve(results)
                  console.log(results)
                  window.localStorage.setItem('user', JSON.stringify(results))
                }
              })
            })
            resolve({ user, ...session, ...attributes })
          }
        })
      } else {
        reject(new Error('User not found'))
      }
    })
  }

  // user registration
  const signup = async (email, name, password) => {
    return await new Promise((resolve, reject) => {
      const attributeList = []

      const userName = {
        Name: 'name',
        Value: name
      }

      attributeList.push(userName)

      userPool.signUp(email, password, attributeList, null, (err, data) => {
        if (err) {
          console.log('fail to register', err.message)
          reject(err)
        } else {
          console.log('account created', data)
          resolve()
        }
      })
    })
  }

  // login functionatily
  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool: userPool })

      const authDetails = new AuthenticationDetails({ Username, Password })

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log('onSuccess', data)
          resolve(data)
        },
        onFailure: (err) => {
          console.log('onFailure', err.message)
          reject(err)
        },
        newPasswordRequired: (data) => {
          console.log('newPasswordRequired', data)
          resolve(data)
        }
      })
    })
  }

  return (
    <AccountContext.Provider value={{ signup, authenticate, getSession, logout }}>
      {props.children}
    </AccountContext.Provider>
  )
}

export default AccountState
