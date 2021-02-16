import React from 'react'

import ListShapesItem from './ListShapesItem'

const ListShapes = ({ shapes }: any) => {
  return (
    <ul className="shapes__list list-shapes">
      {shapes.map(({ id, type }: any) => <ListShapesItem key={id} type={type} />) }
    </ul>
  )
}

export default ListShapes
