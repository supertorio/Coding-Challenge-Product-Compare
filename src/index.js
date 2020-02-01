import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTrashAlt,
  faCheckSquare,
  faSquare
} from '@fortawesome/free-solid-svg-icons'
import './index.css'
import Store from './store'
import App from './components/pages/App'
import * as serviceWorker from './serviceWorker'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }
`

library.add(faTrashAlt, faCheckSquare, faSquare)

ReactDOM.render(
  <Provider store={Store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
