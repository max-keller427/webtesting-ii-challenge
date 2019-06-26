import React from "react";
import Dashboard from "./Dashboard";

class Display extends React.Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0,
      fouls: 0,
      hits: 0
    };
  }

  incrementBalls = () => {
    if (this.state.balls < 3) {
      this.setState({ ...this.state, balls: this.state.balls + 1 });
    } else {
      this.setState({
        balls: 0,
        strikes: 0,
        fouls: 0
      });
    }
  };

  incrementStrikes = () => {
    if (this.state.strikes < 2) {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1
      });
    } else {
      this.setState({
        balls: 0,
        strikes: 0,
        fouls: 0
      });
    }
  };

  incrementHits = () => {
    this.setState({
      balls: 0,
      strikes: 0,
      fouls: 0,
      hits: this.state.hits + 1
    });
  };

  incrementFouls = () => {
    if (this.state.strikes < 2) {
      this.setState({
        // ...this.state,
        strikes: this.state.strikes + 1
      });
    } else {
      this.setState({
        // ...this.state
      });
    }
    this.setState({ fouls: this.state.fouls + 1 });
  };

  render() {
    return (
      <>
        <Dashboard
          balls={this.state.balls}
          strikes={this.state.strikes}
          fouls={this.state.fouls}
          hits={this.state.hits}
        />
        <button title="ballButton" onClick={this.incrementBalls}>
          Ball
        </button>
        <button title="strikeButton" onClick={this.incrementStrikes}>
          Strike
        </button>
        <button title="foulButton" onClick={this.incrementFouls}>
          Foul
        </button>
        <button title="hitButton" onClick={this.incrementHits}>
          Hit
        </button>
      </>
    );
  }
}

export default Display;
