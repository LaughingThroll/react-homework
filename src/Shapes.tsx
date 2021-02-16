import React, { Component } from 'react'

import ListShapes from './components/ListShapes/ListShapes'
import ShapesCanvas from './components/ShapesCanvas'

import { IShape, TShape } from './types'

interface IShapesState {
  shapes: IShape[],
  currentShape: TShape
}

class Shapes extends Component {
  state: IShapesState = {
    shapes: [
      {
        id: 1,
        type: 'triangle'
      },
      {
        id: 2,
        type: 'square'
      },
      {
        id: 3,
        type: 'romb'
      }
    ],
    currentShape: 'triangle'
  }

  setCurrentShape = (shape: TShape): void => {
    this.setState({currentShape: shape})
  }  

  render() {
    return (
      <div className="container">
        <section className="shapes">
          <div className="shapes__left">
            <div className="shapes__title h2-like"> Choose a shape </div>
            <ListShapes shapes={this.state.shapes} setCurrentShape={this.setCurrentShape} />
          </div>
          <div className="shapes__right">
            <div className="shapes__title h2-like"> Selected shape </div>
            <ShapesCanvas shape={this.state.currentShape} />
          </div>
        </section>
      </div>)
  }
}

export default Shapes


