import React from 'react'

import { TShape } from '../types' 

interface IShapesCanvas {
  shape: TShape
} 

const ShapesCanvas = ({ shape }: IShapesCanvas) => {
  return (
    <div className={`shapes__canvas shapes-canvas shapes-canvas--${shape}`}></div>
  )
}

export default ShapesCanvas
