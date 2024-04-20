//ChatBot imports
import Chatbot from "react-chatbot-kit";
import "./../../assets/chatbot.css";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "../widgets/chatBot/context/Provider/ActionProvider";
import config from "../widgets/chatBot/config/config";
import MessageParser from "../widgets/chatBot/parser/MessageParser";

const ChatBot = () => {
  return (
    <div
      style={{ position: "relative"}}
    >
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
};

export default ChatBot;
