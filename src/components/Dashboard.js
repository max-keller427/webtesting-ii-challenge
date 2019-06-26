import React from "react";

function Dashboard(props) {
  return (
    <>
      <button title="ballButton" onClick={props.incrementBalls}>
        Ball
      </button>
      <button title="strikeButton" onClick={props.incrementStrikes}>
        Strike
      </button>
      <button title="foulButton" onClick={props.incrementFouls}>
        Foul
      </button>
      <button title="hitButton" onClick={props.incrementHits}>
        Hit
      </button>
    </>
  );
}

export default Dashboard;
