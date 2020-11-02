import React from 'react'

class ComponentExample extends React.Component {
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
    // Always rerendered, even if state is the same
    return <div><b>Counter Value: {this.state.counter}</b></div>
  }
}

export default ComponentExample