import React from "react";
import Category from "../Category/Category";
import Conversation from "../Conversation/Conversation";
import SidebarItem from "../SidebarItem/SidebarItem";

function Conversations({ conversations }) {
  return (
    <div>
      <Category category="conversations">
        {conversations.map((conversation, i) => (
          <SidebarItem
            key={`${conversation.id}-${i}`}
            url={`/${conversation.id}`}
            item={conversation}
          >
            <Conversation conversation={conversation} />
          </SidebarItem>
        ))}
      </Category>
    </div>
  );
}

export default Conversations;
// export default React.memo(Conversations);
