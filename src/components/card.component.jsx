import React from "react";

export const Card = ({ monster: { name, email, id } }) => (
  <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 ">
    <img
      alt="monster"
      src={`https://robohash.org/${id}?set=set2&size=180x180`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);
