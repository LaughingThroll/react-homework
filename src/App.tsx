import React, { Component } from 'react'


class App extends Component {



  render() {
    return (
      <div className="container">
        <section className="shapes">
          <div className="shapes__left">
            <div className="shapes__title h2-like"> Choose a shape </div>
            <ul className="shapes__list list-shapes">
              <li className="list-shapes__item"><button className="list-shapes__button button">square</button></li>
              <li className="list-shapes__item"><button className="list-shapes__button button">triangle</button></li>
              <li className="list-shapes__item"><button className="list-shapes__button button">romb</button></li>
            </ul>
          </div>
          <div className="shapes__right">
            <div className="shapes__title h2-like"> Selected shape </div>
            <div className="shapes__canvas shapes-canvas shapes-canvas--triangle"></div>
            <div className="shapes__canvas shapes-canvas shapes-canvas--square"></div>
            <div className="shapes__canvas shapes-canvas shapes-canvas--romb"></div>
          </div>
        </section>


      </div>)
  }
}

export default App
