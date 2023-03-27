import { useEffect, useState } from 'react';
import healthCheck from '../services/healthCheck';

const HealthCheck = () => {
  const [checkData, setCheckData] = useState([])

  useEffect(() => {
    healthCheck()
    .then((response) => {
      setCheckData(response.data)
    })
    .catch((error) => {
      setCheckData(error)
    })
  }, [checkData])

  return (
    <div>
      <h1>{JSON.stringify(checkData)}</h1>
    </div>
  )
}

export default HealthCheck
