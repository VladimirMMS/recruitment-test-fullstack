import ProductForm from '../components/ProductForm/ProductForm'
import SliderC from '../components/Slider/Slider'
import LogoutButton from '../components/LogoutButton/LogoutButton'

const iniialValue = {
  productName: '',
  price: '',
  description: '',
  img: null
}

export default function Home() {
  return (
    <div>
        <LogoutButton/>
        <ProductForm initialState={iniialValue}/>
        <SliderC/>
    </div>
  )
}
