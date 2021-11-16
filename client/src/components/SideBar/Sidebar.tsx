import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../mockData";
import Conversations from "./Conversations/Conversations";
import Favorites from "./Favorites/Favorites";
import People from "./People/People";
import "./sidebar.css";

function Sidebar() {
  const conversations = useSelector((state: State) => state.conversations);
  const favorites = useSelector((state: State) => state.favorites);
  const people = useSelector((state: State) => state.people);

  return (
    <div className="sidebar">
      <Conversations conversations={conversations} />
      <Favorites favorites={favorites} />
      <People people={people} />
    </div>
  );
}

// export default React.memo(Sidebar);
export default Sidebar;

Sidebar.whyDidYouRender = true;
