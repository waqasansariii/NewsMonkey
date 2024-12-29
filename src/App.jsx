import { useState } from 'react'
import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar'
import News from './News.Jsx'
// Class-based components provide a built-in way to manage the component's state using this.state

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5}/>
        {/* 7725666da32b433cb00bbdadb8c0628c : News APi key */}
        
      </div>
    )
  }
}

