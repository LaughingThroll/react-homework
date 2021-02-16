import React, { Component } from 'react'

import ListShapes from './components/ListShapes/ListShapes'
import ShapesCanvas from './components/ShapesCanvas'

class Shapes extends Component {
  state = {
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
    ]
  }

  render() {
    return (
      <div className="container">
        <section className="shapes">
          <div className="shapes__left">
            <div className="shapes__title h2-like"> Choose a shape </div>
            <ListShapes shapes={this.state.shapes} />
          </div>
          <div className="shapes__right">
            <div className="shapes__title h2-like"> Selected shape </div>
            <ShapesCanvas />        
          </div>
        </section>
      </div>)
  }
}

export default Shapes
