import React from 'react'

import Button from '../Button'

interface IListShapesItem {
  type: string
} 

const ListShapesItem = ({ type }: IListShapesItem) => {
  return (
    <li className="list-shapes__item"><Button className={['list-shapes__button']} children={type} /></li>
  )
}

export default ListShapesItem
