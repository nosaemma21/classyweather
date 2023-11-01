// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((x) => {
      return { count: x.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((x) => {
      return { count: x.count + 1 };
    });
  }

  render() {
    const date = new Date("june 28 2012");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default App;
