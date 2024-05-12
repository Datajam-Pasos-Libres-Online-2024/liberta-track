import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './redux/store'

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: process.env.USER_POOL_CLIENT_ID!,
      userPoolId: process.env.USER_POOL_ID!,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </Authenticator.Provider>
  </React.StrictMode>,
)
