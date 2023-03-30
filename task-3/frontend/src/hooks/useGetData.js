import  {useState, useEffect} from 'react'
import { getProducts } from '../apis/getProducts'

export default function useGetData() {
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
    return {
        data,
        updateData
    }
}
