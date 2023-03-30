import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'

const initialState = {
  username: '',
  password: ''
}
export default function Login() {
  return (
    <div className='loginC'>
        <LoginForm initialValues={initialState}/>
    </div>
  )
}
