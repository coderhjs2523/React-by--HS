import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams();
  return (
    <div className='bg-gray-800 text-white text-center p-5 text-2xl'>
      User: {id}
    </div>
  )
}

export default User
