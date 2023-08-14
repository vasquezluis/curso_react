import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useReducer } from 'react'

// 1. Create the initial states
const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fontText: '',
  result: '',
  loading: false
}

// 2. Create the reducer
const reducer = (state, action) => {
  const { type, payload } = action

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
      fromLanguage: payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: payload
    }
  }

  return state
}

function App () {
  // 3. Usar el useReducer de React
  const [state, dispatch] = useReducer(initialState, reducer)

  return (
    <div className="App">
      <h1>Google Translate</h1>
    </div>
  )
}

export default App
