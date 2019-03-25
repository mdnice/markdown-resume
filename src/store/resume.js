import { observable, action } from "mobx";
import { calclayout, generateItem, parseMarkdown } from "../utils/helper";
import { MARK, STORAGE_LAYOUT, COLOR_NORMAL } from "../utils/constant";

// Resume 类
class Resume {
  // 简历布局
  @observable layout;
  // 当前被选中的单元格
  @observable choosenKey = "";
  // 网格编辑状态
  @observable status = {
    isResizable: false,
    isDraggable: false,
    gridStyle: { background: COLOR_NORMAL }
  };

  @observable count = 0;
  @observable isAdded = false;

  @action
  addGrid = isMarkdownMode => {
    this.setAdded(true)
    if (this.choosenKey) {
      if (isMarkdownMode) {
        this.updateResume();
      } else {
        this.updateNormalResume();
      }
      this.switchStyle(this.choosenKey, false);
    }
    const key = "item" + MARK + this.count;
    const item = generateItem(key);
    this.layout = this.layout.concat(item);
    window.localStorage.setItem(STORAGE_LAYOUT, JSON.stringify(this.layout));
    this.count++;
    this.choosenKey = key;
  };

  @action
  setAdded = isAdded => {
    this.isAdded = isAdded;
  };

  @action
  switchStyle = (id, isActive) => {
    if (!id) {
      return;
    }
    const element = document.getElementById(id);
    if (isActive) {
      element.contentEditable = true;
      element.style.background = "white";
      element.style.outline = "rgba(0, 103, 244, 0.247) auto 5px";
      element.style.zIndex = "999";
    } else {
      element.style.background = COLOR_NORMAL;
      element.style.outline = "none";
      element.style.zIndex = "1";
    }
  };

  @action
  removeGrid = () => {
    const key = this.choosenKey;
    this.layout = this.layout.filter(item => item.i !== key);
    this.choosenKey = "";
    window.localStorage.setItem(STORAGE_LAYOUT, JSON.stringify(this.layout));
  };

  // 编辑器信息修改后
  @action
  updateResume = () => {
    if (!this.choosenKey) {
      return;
    }
    const element = document.getElementById(this.choosenKey);
    element.contentEditable = false;
    const modifyContent = element.innerText;
    this.layout.forEach(item => {
      if (item.i === this.choosenKey) {
        // 很重要，在找到key之后马上变成空，避免resume渲染componentDidUpdate覆盖
        this.setChoosen();
        // 当值不改变时mobx不起作用，不会重渲染
        const [html] = parseMarkdown(modifyContent);
        element.childNodes[0].innerHTML = html;
        item.value = modifyContent;
      }
    });

    window.localStorage.setItem(STORAGE_LAYOUT, JSON.stringify(this.layout));
  };

  // 编辑器信息修改后
  @action
  updateNormalResume = () => {
    if (!this.choosenKey) {
      return;
    }
    const element = document.getElementById(this.choosenKey);
    element.contentEditable = false;

    const modifyContent = element.childNodes[0].innerHTML;
    this.layout.forEach(item => {
      if (item.i === this.choosenKey) {
        // 很重要，在找到key之后马上变成空，避免resume渲染componentDidUpdate覆盖
        this.setChoosen();
        // 当值不改变时mobx不起作用，不会重渲染
        element.childNodes[0].innerHTML = modifyContent;
        item.origin = modifyContent;
      }
    });

    window.localStorage.setItem(STORAGE_LAYOUT, JSON.stringify(this.layout));
  };

  // 在简历网格修改后更新layout信息，第一次进入就会调用，所以才会在localstorage里面存储
  @action
  updateLayout = layout => {
    layout.forEach((item, index) => {
      const { w, h, x, y } = item;
      item.value = this.layout[index].value;
      item.origin = this.layout[index].origin;
      this.layout[index].w = w;
      this.layout[index].h = h;
      this.layout[index].x = x;
      this.layout[index].y = y;
    });
    window.localStorage.setItem(STORAGE_LAYOUT, JSON.stringify(layout));
  };

  // 设置被选中的网格
  @action
  setChoosen = (key = "") => {
    this.switchStyle(this.choosenKey, false);
    this.choosenKey = key;
    this.switchStyle(this.choosenKey, true);
  };

  // 设置网格的markdown样式状态
  @action
  setStatus = (status, isMarkdownMode) => {
    if (isMarkdownMode) {
      this.updateResume();
    } else {
      this.updateNormalResume();
    }
    this.status = Object.assign(this.status, status);
  };

  // 切换简历布局
  @action
  switchLayout = unsortLayout => {
    window.localStorage.removeItem(STORAGE_LAYOUT);
    const [layout, count] = calclayout(unsortLayout);
    this.layout = layout;
    this.count = count;
    this.setChoosen();
    this.setStatus({
      isResizable: false,
      isDraggable: false,
      gridStyle: { background: COLOR_NORMAL }
    });
    window.localStorage.setItem(STORAGE_LAYOUT, JSON.stringify(layout));
  };
}

const store = new Resume();

const [layout, count] = calclayout();
store.layout = layout;
store.count = count;

export default store;
