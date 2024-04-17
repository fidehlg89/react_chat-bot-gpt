import React from "react";

//ChatBot imports
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import ActionProvider from "@/components/widgets/chatBot/context/Provider/ActionProvider";
import MessageParser from "@/components/widgets/chatBot/parser/MessageParser";
import config from "@/components/widgets/chatBot/config/config.js";

const ChatBot = () => {
  return (
    <div className="relative">
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
};

export default ChatBot;
