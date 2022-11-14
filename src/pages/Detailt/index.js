import { useContextStatic } from '../../Contex/UseContex'
import React, { useContext } from 'react'
export const Detailt = ({ id }) => {
  const contex = useContext(useContextStatic)
  console.log(contex)
  return <div>{id}</div>
}
