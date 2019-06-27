import React from "react";

function Display(props) {
  console.log(props.fouls);
  return (
    <>
      <h2 data-testid="ballCount">Balls:{props.balls}</h2>
      <h2 data-testid="strikeCount">Strikes:{props.strikes}</h2>
      <h2 data-testid="foulCount">Fouls:{props.fouls}</h2>
      <h2 data-testid="hitCount">Hits:{props.hits}</h2>
    </>
  );
}

export default Display;
