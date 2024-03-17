import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.sass'
import App from './app'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import store from 'store'

const root = createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
	<Provider store={store}>
  	<App />
  </Provider>
)

reportWebVitals()
