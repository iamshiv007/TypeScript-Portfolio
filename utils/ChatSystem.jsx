import React, { useEffect, useState } from "react";
import Talk from "talkjs";

const ChatSystem = () => {
  const [talkLoaded, markTalkLoaded] = useState(false);
  // wait for TalkJS to load
  useEffect(() => {
    if (talkLoaded) {
      Talk.ready.then(function () {
        var me = new Talk.User({
          id: "123456",
          name: "Alice",
          email: "alice@example.com",
          photoUrl: "https://talkjs.com/images/avatar-1.jpg",
          welcomeMessage: "Hey there! How are you? :-)",
        });
        window.talkSession = new Talk.Session({
          appId: "YOUR_APP_ID",
          me: me,
        });
        var other = new Talk.User({
          id: "654321",
          name: "Sebastian",
          email: "Sebastian@example.com",
          photoUrl: "https://talkjs.com/images/avatar-5.jpg",
          welcomeMessage: "Hey, how can I help?",
        });

        var conversation = talkSession.getOrCreateConversation(
          Talk.oneOnOneId(me, other)
        );
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        var inbox = talkSession.createInbox({ selected: conversation });
        inbox.mount(document.getElementById("talkjs-container"));
      });
    }
  }, [talkLoaded]);

  return <></>; // The component doesn't need to render anything, it's just for the script to run.
};

export default ChatSystem;
