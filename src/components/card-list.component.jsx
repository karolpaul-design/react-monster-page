import React from "react";

import { Card } from "./card.component";

export const CardList = (props) => {
  console.log(props);
  return (
    <div className="mv2">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
