import { observable, action } from "mobx";

class Hint {
  @observable error = {
    isOpen: false,
    message: "操作出错"
  };
  @observable success = {
    isOpen: false,
    message: "操作成功"
  }

  @action
  setSuccess = success => {
    this.success = Object.assign(this.success, success);
  };

  @action
  setError = error => {
    this.error = Object.assign(this.error, error);
  };
}

const store = new Hint();

export default store;
