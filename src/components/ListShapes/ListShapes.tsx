import React from 'react'

import ListShapesItem from './ListShapesItem'

import { IShapesState, IShape } from './../../types'

const ListShapes = ({ shapes }: IShapesState ) => {
  return (
    <ul className="shapes__list list-shapes">
      {shapes.map(({ id, type }: IShape) => <ListShapesItem key={id} type={type} />) }
    </ul>
  )
}

export default ListShapes
