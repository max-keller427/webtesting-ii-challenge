import React from "react";

function Dashboard(props) {
  return (
    <div>
      <button data-testid="ballButton" onClick={props.incrementBalls}>
        Ball
      </button>
      <button data-testid="strikeButton" onClick={props.incrementStrikes}>
        Strike
      </button>
      <button data-testid="foulButton" onClick={props.incrementFouls}>
        Foul
      </button>
      <button data-testid="hitButton" onClick={props.incrementHits}>
        Hit
      </button>
    </div>
  );
}

export default Dashboard;
