import React from 'react'
import { createContext } from 'react'
export const AuthDataContext=createContext()
function AuthContext({children}) {
    let serverUrl="https://onecart-backend-8d6y.onrender.com"
    let value={
        serverUrl
    }
  return (
    <div>
      <AuthDataContext.Provider value={value}>
        {children}
      </AuthDataContext.Provider>
    </div>
  )
}

export default AuthContext
