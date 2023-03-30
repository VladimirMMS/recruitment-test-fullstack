import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import './styles.css'
import { doLogin } from '../../apis/doLogin'
import { setToken } from '../../helpers/token'
import { userContext } from '../../context/userContext'
import { useContext } from 'react'

export default function Login(props) {
  const {setIsUserLogin} = useContext(userContext)
  return (
    <div className='login-container'>
      <div className="form-box">
        <h1 className='h1_login'>Login</h1>
        <Formik
          initialValues={{...props.initialValues}}
          onSubmit={async (values) => {
            const response = await (await doLogin(values)).json()
            if(response.token) {
              setToken(response.token)
              setIsUserLogin(true)
            }
          }}
          validationSchema={
            Yup.object({
              username: Yup.string().max(15, 'It must be <= character').required(),
              password: Yup.string().max(45, 'It must be <= character').required(),
            })
          }
        >
          {
            (formik) => (
              <Form onSubmit={formik.handleSubmit}>
                <Field name="username" type="text" placeholder="Username" className='input_login' />
                <span className='error'><ErrorMessage name='username' /></span>
                <Field type="password" name='password' placeholder="Password" className='input_login' />
                <span className='error'><ErrorMessage name='password' /></span>
                <button type='submit' className='button_login'>Sign In</button>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}


