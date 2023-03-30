import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRef, useContext } from 'react'
import * as Yup from 'yup'
import { createProduct } from '../../apis/createProduct'
import { userContext } from '../../context/userContext'
import './styles.css'

export default function Login(props) {
  const inputRef = useRef()
  const {updateData} = useContext(userContext)
  return (
    <div className='product-container'>
      <div className="form-box-p">
        <h1 className=''>Create Product</h1>
        <Formik
          initialValues={{...props.initialState}}
          onSubmit={async(values, actions, formik) => {
            const formData = new FormData();
            formData.append('file', values.img);
            formData.append('productName', values.productName);
            formData.append('price', values.price);
            formData.append('description', values.description);
            const response = await (await createProduct(formData))
            if(response.status ===200) {
              actions.resetForm()
              updateData()
            }
            
          }}
          validationSchema={
            Yup.object({
              productName:Yup.string().min(3, 'Min legth 5 letters')
              .strict(true)
              .matches(/^[A-Za-z]+$/)
              .required('This field is required'),
              price: Yup.number().strict(true).required('This field is required'),
              description: Yup.string().max(45, 'It must be <= character').required("This field is required"),
              img: Yup.mixed().required('You must select a file'),
            })
          }
        >
          {
            (formik) => (
              <Form onSubmit={formik.handleSubmit} className='form-c'>
                <label>Product:</label>
                <Field name="productName" type="text" placeholder="Product" className="input"/>
                <span className='error'><ErrorMessage name='productName' /></span>
                <label>Price:</label>
                <Field type="number" name='price' placeholder="Price"  className="input"/>
                <span className='error'><ErrorMessage name='price' /></span>
                <label>Description:</label>
                <Field as="textarea" className='input' name='description' placeholder='Description'/>
                <span className='error'><ErrorMessage name='description' /></span>
                <label>File:</label>
                <button className='input' onClick={() => inputRef.current.click()}>Select File</button>
                <input ref={inputRef} name="img" id='file' hidden className='input' type="file" onChange={(event) => {
                    formik.setFieldValue("img", event.currentTarget.files[0]);
                }}/>
                <span className='error'><ErrorMessage name='img' /></span>
                <button type='submit' className='button-p'>Create Product:</button>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}
