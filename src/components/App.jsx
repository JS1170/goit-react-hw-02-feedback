// import Counter from "./Counter/Counter";
import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtn = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
    // console.log(value);
  };

  totalCount = () => {
    const allValues = Object.values(this.state);
    return allValues.reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  positiveCount = () => {
    const { good } = this.state;
    return Math.round((good / this.totalCount()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onClickBtn}
          />
        </Section>
        <Section title="Statistics">
          {this.totalCount() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalCount()}
              positivePercentage={this.positiveCount()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
