import React from "react";
import Category from "../Category/Category";
import Person from "../Person/Person";
import SidebarItem from "../SidebarItem/SidebarItem";

function People({ people }) {
  return (
    <div>
      <Category category="people">
        {people.map((person, i) => (
          <SidebarItem
            key={`${person.id}-${i}`}
            url={`/${person.id}`}
            item={person}
          >
            <Person person={person} />
          </SidebarItem>
        ))}
      </Category>
    </div>
  );
}

// export default React.memo(People);
export default People;
