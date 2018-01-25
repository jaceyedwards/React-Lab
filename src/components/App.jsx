import React, { Component } from "react";

// const App = (props) => {
// return <h1>{props.text}</h1>
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hello, I am a new string",
      hasLoaded: false,
      newinput: ""
    };
  }
  
  
  handleInput(value) {
    this.setState({ text: value });
  }
  
  
  toggleLoad(event) {
    let currentState = this.state.hasLoaded;
    this.setState({ hasLoaded: !currentState });
  }

  componentDidMount() {
      this.setState({ hasLoaded: true });
  }

  render() {
    return (
      <div>
        <input
          placeholder="What's going on hotstuff?"
          value={this.state.text}
          onChange={event => this.handleInput(event.target.value)}
        />
        <button 
        onClick={event => this.toggleLoad(event.target.value)}
        >Toggle</button>
      </div>
    );
  }
}

export default App;
