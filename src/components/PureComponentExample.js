import React from 'react'

class PureComponentExample extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    // The state after interval exutions is the same
    setInterval(() => {
      this.setState({
        counter: 0
      });
    }, 1000);
  }

  render() {
    // Not rerendered if state is the same
    return <div><b>Counter Value: {this.state.counter}</b></div>
  }
}

export default PureComponentExample