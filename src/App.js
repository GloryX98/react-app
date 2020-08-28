import React, { Component } from 'react';


// state data for 3 counters
const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];

// Counter Component
class Counter extends Component {

  //onIncrement callback function
  onIncrement = e => {
    this.props.onIncrement(1);
  };
  //onDecrement callback function
  onDecrement = () => {
    this.props.onIncrement(-1);
  };
  render() {
    const { value } = this.props;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button className="button is-danger is-small" onClick={this.onDecrement} >-</button>
          <button className="button is-success is-small" onClick={this.onIncrement} >+</button>
        </div>
      </div>
    );
  }
}

class Total extends Component {
  
  totalCounter = () => this.props.getData.reduce((a, b) => a + b.value, 0)

  render() {
    return (
      <div  className="counter">
        <b>Total Value of Counters: {this.totalCounter()}</b>
      </div>
    );
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
    // Global data array
    this.state = {
      data: [...data]
    }
  }

  onIncrement = (counter, increment) => {
    const newValue = counter.value + increment;
    this.setState({
      data: data.map(item => {
        item.value = item.id === counter.id ? newValue : item.value;
        return item;
      })
    });
  };

  render() {
    return (
      <div>
        {data.map((counter) => (
          <Counter key={counter.id} value={counter.value}
          onIncrement = {this.onIncrement.bind(this, counter)} />
          
        ))}
        <Total getData={this.state.data}/>
      </div>
    );
  }
}





export default App;
