import React from 'react';
import Controls from './Controls';
import css from './Counter.module.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  
  static propTypes = {

  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  render() {
    return (
      <div className="Counter">
        <Controls
          onIncrement={this.handleIncrement} />

        <h2>Statistics</h2>

        <p className="Counter__good">Good: {this.state.value} </p>
        <p className="Counter__neutral">Neutral: {this.state.value}</p>
        <p className="Counter__bad">Bad: {this.state.value} </p>
      </div>
    );
  }
}

export default Counter;

