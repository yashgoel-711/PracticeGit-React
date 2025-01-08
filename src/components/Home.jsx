import React from 'react'
import { useContext } from 'react'
import { sampleVariable } from '../context/context'
const Home = () => {
  const sample = useContext(sampleVariable)
  console.log(sample)
  
  return (
    <div>
      home {sample}
    </div>
  )
}

export default Home
