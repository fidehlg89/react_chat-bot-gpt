/* import {
  greetingsKeywords,
  servicesKeywords,
  appointmentKeywords,
} from "./keywords"; */

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    this.actionProvider.callOpenAI(message);
  }

  /* containsAny(str, substrings) {
    return substrings.some((substring) => {
      const regex = new RegExp(`\\b${substring}\\b`, "i"); // Using word boundaries for exact match
      return regex.test(str);
    });
  } */
}

export default MessageParser;
