import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(hahaha => {
      console.log(`this is awesome ${hahaha.count + 1}`)
      return {count: hahaha.count + 1}
    })
  }
  onIncrement = () => {
    this.setState(hahaha => {
      return {count: hahaha.count - 1}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <p className="count">{count}</p> times
        </h1>
        <p>Click the button to increase the count</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increase
        </button>
        <button className="button" type="button" onClick={this.onDecrement}>
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
