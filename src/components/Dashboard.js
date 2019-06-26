import React from "react";

function Dashboard(props) {
  console.log(props.fouls);
  return (
    <>
      <h2>Balls:{props.balls}</h2>
      <h2>Strikes:{props.strikes}</h2>
      <h2>Fouls:{props.fouls}</h2>
      <h2>Hits:{props.hits}</h2>
    </>
  );
}

export default Dashboard;
