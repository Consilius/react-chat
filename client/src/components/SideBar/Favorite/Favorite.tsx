import React from "react";
import "./favorite.css";

function Favorite({ favorite }) {
  return (
    <div key={favorite.id} className="favorite">
      {favorite.name}
    </div>
  );
}

export default Favorite;
