import React from "react";
import Category from "../Category/Category";
import Favorite from "../Favorite/Favorite";
import SidebarItem from "../SidebarItem/SidebarItem";

function Favorites({ favorites }) {
  return (
    <div>
      <Category category="favorites">
        {favorites.map((favorite, i) => (
          <SidebarItem
            key={favorite.id}
            url={`/${favorite.id}`}
            item={favorite}
          >
            <Favorite favorite={favorite} />
          </SidebarItem>
        ))}
      </Category>
    </div>
  );
}

export default Favorites;
// export default React.memo(Favorites);
