import React, { Component } from 'react'
import Loading from './Loading.gif'
export default class spinner extends Component {
  render() {
    return (
      <div>
        <img src={Loading} alt="loading" />
      </div>
    )
  }
}
