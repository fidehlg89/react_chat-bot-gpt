/* eslint-disable no-unused-vars */
// import Constants from "../../utils/Constants";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

// ActionProvider starter code
class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  updateChatbotState(message) {
    //this.audio = new Audio(soundFile); // Replace 'URL_TO_YOUR_SOUND_FILE' with the actual URL
    //this.audio.play();
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }

  callOpenAI = async (userInput) => {
    const thinkingMessage = this.createChatBotMessage("Processing...");
    this.updateChatbotState(thinkingMessage);

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-0613",
        messages: [{ role: "user", content: userInput }],
        stream: false,
      });

      const message = response.choices[0].message;

      const chatMessage = this.createChatBotMessage(message.content);
      this.updateChatbotState(chatMessage);
    } catch (error) {
      console.log("🚀 ~ ActionProvider ~ callOpenAI= ~ error:", error);
      // const errorMsg = this.createChatBotMessage(
      //   `We encountred an Error and we think if you are from bloqued regions, please use VPN to use Open AI. For more help type "contact" to more assistance`
      // );
      const errorMsg = this.createChatBotMessage(
        `We encountered an error and we think it may be because you are in a region where our service is not available. Please consider using a VPN to access OpenAI.`
      );
      this.updateChatbotState(errorMsg);
    }
  };
}

export default ActionProvider;
