import React from "react";

function Person({ person }) {
  return (
    <div key={person.id} className="person">
      {person.name}
    </div>
  );
}

export default Person;
