// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import Constants from "../utils/Constants";
import ChatStruct from "../config/chatStruct";

var config = {
  botName: Constants.CHAT_BOT_NAME,
  initialMessages: [
    createChatBotMessage(
      Constants.STARTER_CHAT_MSG,
      {
        widget: Constants.HELLO_MSG,
      }
    ),
  ],

  widgets: ChatStruct.addAllWidgets(),
};

export default config;
