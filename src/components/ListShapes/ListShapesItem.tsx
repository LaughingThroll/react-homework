import React from 'react'

import Button from '../Button'

import { TShape } from '../../types'

interface IListShapesItem {
  type: TShape,
  setCurrentShape: (shape: TShape) => void
} 

const ListShapesItem = ({ type, setCurrentShape }: IListShapesItem) => {
  const handlerClick = () => setCurrentShape(type)
  
   return (
    <li className="list-shapes__item"><Button className={['list-shapes__button']} onClick={handlerClick} children={type} /></li>
  )
}

export default ListShapesItem
