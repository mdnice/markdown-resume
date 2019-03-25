import { observable, action } from "mobx";
import { TEMPLATE_NUM, MARKDOWN_MODE } from "../utils/constant";

class Navbar {
  @observable isDisabled = true;
  @observable themeColor = "#468CD4";
  @observable isExported = false;
  @observable isMarkdownMode = false;
  @observable templateNum = 1;

  @action
  setBtnDisable = isDisabled => {
    this.isDisabled = isDisabled;
  };

  @action
  setThemeColor = themeColor => {
    this.themeColor = themeColor;
  };

  @action
  setExported = isExported => {
    this.isExported = isExported;
  };

  @action
  setMarkdownMode = isMarkdownMode => {
    this.isMarkdownMode = isMarkdownMode;
  };

  @action
  setTemplateNum = templateNum => {
    this.templateNum = templateNum;
  };
}

const store = new Navbar();
const templateNum = localStorage.getItem(TEMPLATE_NUM);
store.templateNum = templateNum ? parseInt(templateNum) : 1;
const markdownMode = localStorage.getItem(MARKDOWN_MODE);
store.isMarkdownMode = markdownMode === "true" ? true : false;

export default store;
