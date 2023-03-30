import { useState, useEffect } from 'react'
import { userContext } from '../context/userContext'
import { getToken, removeToken } from '../helpers/token'
import { getProducts } from '../apis/getProducts'

export default function AuthProvider({children}) {
  const [isUserLogin, setIsUserLogin]=useState(false)
  const [data, setData] = useState([])

  const updateData = () => {
    getProducts()
    .then((res) => res.json())
    .then((value) => setData(value))
  }
  useEffect(() => {
    getProducts()
    .then((res) => res.json())
    .then((value) => setData(value))
  }, []);
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
    <userContext.Provider value={{isUserLogin, setIsUserLogin, data, updateData, logout}}>
        {children}
    </userContext.Provider>
  )
}
