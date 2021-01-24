import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false
      }
    }
  
    componentDidCatch(error, info) {
      this.setState(state => ({ ...state, hasError: true }))
    }
  
    render() {
      if (this.state.hasError) { return <div>Sorry, an error occurred</div> }
  
      return this.props.children
    }
}