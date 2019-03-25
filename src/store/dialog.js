import { observable, action } from "mobx";

class Dialog {
  @observable isHelpOpened = false;
  @observable isLinkOpened = false;
  @observable isChangeOpened = false;
  @observable linkText;

  @action
  setHelpOpened = isHelpOpened => {
    this.isHelpOpened = isHelpOpened;
  };

  @action
  setLinkOpened = isLinkOpened => {
    this.isLinkOpened = isLinkOpened;
  };

  @action
  setChangeOpened = isChangeOpened => {
    this.isChangeOpened = isChangeOpened;
  };

  @action
  setLinkText = linkText => {
    this.linkText = linkText;
  };
}

const store = new Dialog();

export default store;
