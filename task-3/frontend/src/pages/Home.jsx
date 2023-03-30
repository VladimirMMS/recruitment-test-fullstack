import ProductForm from '../components/ProductForm/ProductForm'
import SliderC from '../components/Slider/Slider'
import LogoutButton from '../components/LogoutButton/LogoutButton'
import useGetData from '../hooks/useGetData'

const iniialValue = {
  productName: '',
  price: '',
  description: '',
  img: null
}

export default function Home() {
  const {data, updateData}=  useGetData()
  return (
    <div>
        <LogoutButton/>
        <ProductForm initialState={iniialValue} updateData={updateData}/>
        <SliderC data={data}/>
    </div>
  )
}
