import MarkdownIt from "markdown-it";
import MarkdownItIns from "markdown-it-ins";
import MarkdownItMark from "markdown-it-mark";
import {
  ADD_DEFAULT_WIDTH,
  ADD_DEFAULT_HEIGHT,
  MARK,
  STORAGE_LAYOUT,
} from "./constant";

import LAYOUT from "./theme1";

const md = new MarkdownIt();
md.use(MarkdownItIns);
md.use(MarkdownItMark);

/**
 * 全屏
 */
export const fullScreen = () => {
  var el = document.documentElement;
  var rfs =
    el.requestFullScreen ||
    el.webkitRequestFullScreen ||
    el.mozRequestFullScreen ||
    el.msRequestFullScreen;
  if (typeof rfs != "undefined" && rfs) {
    rfs.call(el);
  }
};

/**
 * 退出全屏
 */
export const exitFullScreen = () => {
  var el = document;
  var cfs =
    el.cancelFullScreen ||
    el.webkitCancelFullScreen ||
    el.mozCancelFullScreen ||
    el.exitFullScreen;
  if (typeof cfs != "undefined" && cfs) {
    cfs.call(el);
  }
};

/**
 * 从markdown格式的内容获取原始内容
 * @param {markdown格式的内容} mdContent
 */
export const getOriginContent = mdContent => {
  const [value, align] = solveAlign(mdContent);
  // 先匹配横线和竖线
  const hlineReg = /-[-]+-/;
  const vlineReg = /\+[+]+\+/;
  if (hlineReg.exec(value)) {
    return ["---", align];
  } else if (vlineReg.exec(value)) {
    return ["+++", align];
  }
  return [md.render(value).replace(/<[^>]+>/g, ""), align];
};

export const calclayout = (unsortLayout = LAYOUT) => {
  // 有缓存先获取缓存
  if (window.localStorage.getItem(STORAGE_LAYOUT)) {
    unsortLayout = window.localStorage.getItem(STORAGE_LAYOUT);
    unsortLayout = JSON.parse(unsortLayout);
  }
  // // 没有缓存则使用localStorage中模板号指定的
  // else if(window.localStorage.getItem(TEMPLATE_NUM)) {
  //   unsortLayout = THEMES[TEMPLATE_NUM];
  // }
  // 空模板
  if (unsortLayout.length === 0) {
    return [unsortLayout, 0];
  }
  const layout = unsortLayout.sort(compare("i"));;
  const len = layout.length;
  const count = parseInt(layout[len - 1].i.split(MARK)[1]) + 1;
  return [layout, count];
};

export const generateItem = (key, value = "") => {
  return {
    i: key,
    x: 0,
    y: Infinity,
    w: ADD_DEFAULT_WIDTH,
    h: ADD_DEFAULT_HEIGHT,
    value: value
  };
};

/**
 * 深拷贝
 * @param {} source
 */
export function deepClone(source) {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments", "shallowClone");
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === "object") {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}

// 有数字按照数字来排序，无数字则按照字母顺序排序
export const compare = pro => {
  return function(obj1, obj2) {
    var val1 = obj1[pro];
    var val2 = obj2[pro];
    var arr1 = val1.split(MARK);
    var arr2 = val2.split(MARK);
    return parseInt(arr1[1]) - parseInt(arr2[1]);
  };
};

export const parseMarkdown = itemValue => {
  const [value, align] = solveAlign(itemValue);

  let html = solveLine(value);
  html = html ? html : md.render(value);

  return [html, align];
};

const solveAlign = itemValue => {
  const align = {
    hStart: false,
    hCenter: false,
    hEnd: false,
    vStart: false,
    vCenter: false,
    vEnd: false
  };

  const reg = /\[[-+][SCE]\]/i;
  let value = itemValue;
  let res = reg.exec(value);
  while (res) {
    const index = res.index;
    const matchValue = res[0];
    switch (matchValue) {
      case "[-S]":
        align.hStart = true;
        break;
      case "[-s]":
        align.hStart = true;
        break;
      case "[-C]":
        align.hCenter = true;
        break;
      case "[-c]":
        align.hCenter = true;
        break;
      case "[-E]":
        align.hEnd = true;
        break;
      case "[-e]":
        align.hEnd = true;
        break;
      case "[+S]":
        align.vStart = true;
        break;
      case "[+s]":
        align.vStart = true;
        break;
      case "[+C]":
        align.vCenter = true;
        break;
      case "[+c]":
        align.vCenter = true;
        break;
      case "[+E]":
        align.vEnd = true;
        break;
      case "[+e]":
        align.vEnd = true;
        break;
      default:
    }
    value = value.slice(0, index) + value.slice(index + 4);
    res = reg.exec(value);
  }
  return [value, align];
};

const solveLine = value => {
  // 横线和竖线的正则匹配
  const hlineReg = /-[-]+-/;
  const vlineReg = /\+[+]+\+/;
  const strongHlineReg = /\*\*-[-]+-\*\*/;
  const strongVlineReg = /\*\*\+[+]+\+\*\*/;
  const colorHlineReg = /`-[-]+-`/;
  const colorVlineReg = /`\+[+]+\+`/;
  const strongColorHlineReg = /\*\*`-[-]+-`\*\*/;
  const strongColorVlineReg = /\*\*`\+[+]+\+`\*\*/;

  let html;

  if (strongColorHlineReg.exec(value)) {
    html = "<strong><code><ins><hr></ins></code></strong>";
  } else if (strongColorVlineReg.exec(value)) {
    html = "<strong><code><mark><hr></mark></code></strong>";
  } else if (strongHlineReg.exec(value)) {
    html = "<strong><ins><hr></ins></strong>";
  } else if (strongVlineReg.exec(value)) {
    html = "<strong><mark><hr></mark></strong>";
  } else if (colorHlineReg.exec(value)) {
    html = "<code><ins><hr></ins></code>";
  } else if (colorVlineReg.exec(value)) {
    html = "<code><mark><hr></mark></code>";
  } else if (hlineReg.exec(value)) {
    html = "<ins><hr></ins>";
  } else if (vlineReg.exec(value)) {
    html = "<mark><hr></mark>";
  }
  return html;
};

/**
 * 创建并下载文件
 * @param  {String} fileName 文件名
 * @param  {String} content  文件内容
 */
export const downloadFile = (fileName, content) => {
  var aTag = document.createElement('a');
  var blob = new Blob([content]);
  aTag.download = fileName;
  aTag.href = URL.createObjectURL(blob);
  aTag.click();
  URL.revokeObjectURL(blob);
}