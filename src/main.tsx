import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'

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
      <App />
    </Authenticator.Provider>
  </React.StrictMode>,
)
