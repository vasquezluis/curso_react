import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useReducer } from 'react'
import { type State, type Action } from './types.d'

// 1. Create the initial states
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromtText: '',
  result: '',
  loading: false
}

// 2. Create the reducer
const reducer = (state: State, action: Action) => {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state
}

function App () {
  // 3. Usar el useReducer de React
  const [{ fromLanguage }, dispatch] =
    useReducer(reducer, initialState)

  console.log({ fromLanguage })

  return (
    <div className="App">
      <h1>Google Translate</h1>

      <button
        onClick={() => {
          dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'es' })
        }}
      >
        Cambiar a español
      </button>
    </div>
  )
}

export default App
