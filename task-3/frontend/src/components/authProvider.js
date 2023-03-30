import { useState, useEffect } from 'react'
import { userContext } from '../context/userContext'
import { getToken, removeToken } from '../helpers/token'

export default function AuthProvider({children}) {
  const [isUserLogin, setIsUserLogin]=useState(false)

  const checking = ()=> {
    const token = getToken()
    if(token) {
      setIsUserLogin(true)
    }
  }
  const logout =() => {
    removeToken()
    setIsUserLogin(false)
  }
  useEffect(() => {
    checking()
  }, []);

  return (
    <userContext.Provider value={{isUserLogin, setIsUserLogin, logout}}>
        {children}
    </userContext.Provider>
  )
}
