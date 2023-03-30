/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getDogs,getImages } from '../apis/';

export function useJoinData() {
    const [dataJoined, setDataJoin] = useState([])
    const getData = async () => {
      const array=[]
      const response = await getDogs()
      for(let name of Object.keys(response.message)) {
        await getImages(name)
        .then((value) => array.push({name, imageUrl: value.message, breeds: response.message[name]}))
      }
      setDataJoin(array);
      
    }
   
    useEffect(() => {
      getData()
    }, []);

    return {
        dataJoined,
      
    }
}
