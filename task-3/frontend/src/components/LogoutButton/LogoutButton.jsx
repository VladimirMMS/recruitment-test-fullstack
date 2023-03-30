import React, {useContext} from 'react'
import { userContext } from '../../context/userContext'
import './styles.css'

export default function LogoutButton() {
  const {logout} = useContext(userContext)
  return (
    <div className='button-c'>
      <button className='logout' onClick={logout}>Logout</button>
    </div>
  )
}
