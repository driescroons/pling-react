import React, { Component } from "react";
import "./App.css";

import * as notify from "pling";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      done: false,
      error: false
    };
  }

  notify = async () => {
    this.setState({ loading: true });
    // nice loading animation
    await new Promise(resolve => setTimeout(resolve, 1000));
    try {
      await notify({
        key: process.env.REACT_APP_PLING_API_KEY,
        title: "Pling from the package!",
        description: "👋 👋 👋 👋"
      });
      this.setState({ done: true, loading: false });
    } catch (error) {
      this.setState({ error: true, loading: false });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pling Notifier</h1>
          <h3>Let's test a pling!</h3>
          {this.state.error ? (
            <p>Something went wrong!</p>
          ) : this.state.loading ? (
            <p>Sending a pling!</p>
          ) : this.state.done ? (
            <p>Plinged!</p>
          ) : (
            <button type="button" onClick={this.notify}>
              Pling
            </button>
          )}
        </header>
      </div>
    );
  }
}

export default App;
