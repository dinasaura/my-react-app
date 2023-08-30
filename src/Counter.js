import React, { Component } from 'react';
import CounterDisplay from './CounterDisplay';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.valoreIniziale || 0
    };
  }

  componentDidMount() {
    this.intervallo = setInterval(() => {
      this.setState(statoPrecedente => ({
        count: statoPrecedente.count + (this.props.incrementoQuantità || 1)
      }));
    }, this.props.incrementoIntervallo || 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervallo);
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}

export default Counter;

