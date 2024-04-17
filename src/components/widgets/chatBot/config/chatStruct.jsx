/* eslint-disable no-unused-vars */
import Constants from "../utils/Constants";

class ChatStruct {
  static addAllWidgets() {
    var arrWidget = [];
    // ChatStruct.createServicesWidget(arrWidget);
    return arrWidget;
  }

  static createServicesWidget(arrWidget) {
    arrWidget.push({
      widgetName: Constants.SERVICES_WIDGET_NAME,
      widgetFunc: (props) => <>{Constants.HELLO_MSG}</>,
    });
  }
}

export default ChatStruct;
