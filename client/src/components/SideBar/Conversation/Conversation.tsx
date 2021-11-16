import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../mockData";

function Conversation({ conversation }) {
  const user = useSelector((state: State) =>
    state.people.find((p) => p.id === conversation.participants[1])
  );
  return (
    <div key={conversation.id} className="conversation">
      {user.name}
    </div>
  );
}

export default Conversation;
