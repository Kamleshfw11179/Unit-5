import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from "../Redux/store"
import {AppContextProvider} from "../Redux/AppContextProvider"
console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
  <AppContextProvider store={store}>
    <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
