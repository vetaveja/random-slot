import React, { Component } from 'react'
import SlotsComponent from './components/Slots';
import slots from './SlotsDB';

export default class App extends Component {

  //on page load
  state = {
    slot: '',
    provider: '',
    img: ''
  }

  //generate diffrent quote function
  generateRandomSlot = (arr) => {
    //get random numbers
    let num = Math.floor(Math.random() * slots.length)

    let newSlot = slots[num];

    //update state
    this.setState({
      slot: newSlot.slot,
      provider: newSlot.provider,
      img: newSlot.img
    })

    this.shuffleSlots(slots)

  }

  //shuffle slots function
  shuffleSlots = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  render() {
    return (
      <div className="container ">
        <h1 className="text-center m-3">Slot of the Day</h1>
        <SlotsComponent
          generateRandomSlot={this.generateRandomSlot}
          slot={this.state}
        />
      </div>
    )
  }
}