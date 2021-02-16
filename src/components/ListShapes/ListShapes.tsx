import React from 'react'

import ListShapesItem from './ListShapesItem'

import { IShape, TShape } from './../../types'

interface IListShapes {
  shapes: IShape[]
  setCurrentShape: (shape: TShape) => void
} 

const ListShapes = ({ shapes, setCurrentShape }: IListShapes ) => {
  return (
    <ul className="shapes__list list-shapes">
      {shapes.map(({ id, type }: IShape) => <ListShapesItem key={id} type={type} setCurrentShape={setCurrentShape} />) }
    </ul>
  )
}

export default ListShapes
