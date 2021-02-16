import React from 'react'

import Button from '../Button'

const ListShapesItem = ({ type }: any) => {

  return (
    <li className="list-shapes__item"><Button className={['list-shapes__button']} children={type} /></li>
  )
}

export default ListShapesItem
