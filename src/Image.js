import React from 'react'
import {data} from './data'

function Image() {
  return (
    <div>
      <img src={data[0].path} style={{width:'200px'}} /> 
      <img src={data[1].path} style={{width:'200px'}}  />
      <img src={data[2].path}style={{width:'200px'}}  />
    </div>
  )
}

export default Image
