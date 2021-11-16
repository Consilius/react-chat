import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { State } from "../../../mockData";
import { addToFavorites } from "../../App";
import "./sidebarItem.css";

const SidebarItem = ({ url, children, item }) => {
  const isFavorited = useSelector((state: State) => {
    return state.favorites.find((favorite) => favorite.id === item.id);
  });
  console.log("Render sidebar item");
  const dispatch = useDispatch();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    dispatch(addToFavorites(item));
  }

  return (
    <Link to={url} className="sidebar-item">
      {children}
      <i
        className={isFavorited ? "fa fa-bookmark" : "far fa-bookmark"}
        onClick={handleClick}
      ></i>
    </Link>
  );
};

export default React.memo(SidebarItem);

SidebarItem.whyDidYouRender = true;
