import {useState} from 'react'
import base from '../Api/api'

const useJHP = (endPoint) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

  const callApi = async () => {
    try {
      const axiosRes = await base.get(endPoint)
    setData(axiosRes.data)
    }
    catch (err){
      console.error('Error al obtener los datos: ', err)
      setError('Error al obtener los datos')
    }
    
  }

  return {
    data,
    error,
    callApi
  }

}

export default useJHP