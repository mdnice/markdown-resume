import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import MarkdownIt from "markdown-it";
import MarkdownItIns from "markdown-it-ins";
import MarkdownItMark from "markdown-it-mark";

import {
  DATA_MARKDOWN
} from "../utils/constant";

import { parseMarkdown } from "../utils/helper";

import { observer, inject } from "mobx-react";

@inject("resume")
@inject("navbar")
@observer
class Resume extends Component {
  constructor(props) {
    super(props);
    this.md = new MarkdownIt();
    this.md.use(MarkdownItIns);
    this.md.use(MarkdownItMark);
  }

  handleClick = event => {
    event.stopPropagation();

    const id = event.target.id ? event.target.id : event.target.offsetParent.id;
    const { choosenKey } = this.props.resume;
    const { isResizable } = this.props.resume.status;
    // 当处于内容编辑状态 或 网格状态 则不予处理点击事件
    if (id === choosenKey || isResizable) {
      return;
    }
    // 不同
    if (choosenKey) {
      this.props.resume.updateResume();
    }

    this.props.resume.setChoosen(id);
    this.props.navbar.setBtnDisable(false);
    // MARKDOWN模式下单击切换编辑状态
    const cur = document.getElementById(id);
    cur.focus();
    cur.childNodes[0].innerText = cur.getAttribute(DATA_MARKDOWN);
  };

  // 禁止换行
  handleKeyDown = event => {
    const id = this.props.resume.choosenKey;
    const cur = document.getElementById(id);
    const value = cur.childNodes[0].innerText.replace(/[\r\n]/g,"")

    // 退格，避免删掉html
    if (event.keyCode === 8 && value === "") {
      event.preventDefault();
    }
    // 回车
    if (event.keyCode === 13) {
      this.props.resume.updateResume();
      this.props.navbar.setBtnDisable(true);
    }
  };

  handleInput = event => {
    const id = this.props.resume.choosenKey;
    if (id) {
      const cur = document.getElementById(id);
      cur.setAttribute(DATA_MARKDOWN, cur.innerText);
    }
  };

  // 只粘贴纯文本
  handlePaste = event => {
    event.preventDefault();
    var text = event.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
  }

  // 需要注意此处layout和this.layout顺序是否一致
  handleLayoutChange = layout => {
    // 实时保存
    this.props.resume.updateLayout(layout);
  };

  componentDidUpdate() {
    if (this.props.resume.isAdded) {
      this.props.resume.switchStyle(this.props.resume.choosenKey, true);
    }
  }

  render() {
    const { classes } = this.props;
    const { isResizable, isDraggable, gridStyle } = this.props.resume.status;
    const listItems = this.props.resume.layout.map(item => {
      const [html, align] = parseMarkdown(item.value);

      const classname = classNames({
        [classes.hStart]: align.hStart,
        [classes.hCenter]: align.hCenter,
        [classes.hEnd]: align.hEnd,
        [classes.vStart]: align.vStart,
        [classes.vCenter]: align.vCenter,
        [classes.vEnd]: align.vEnd
      });
      return (
        <div
          id={item.i}
          key={item.i}
          data-markdown={item.value}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          onPaste={this.handlePaste}
          onInput={this.handleInput}
          style={gridStyle}
          suppressContentEditableWarning={true}
        >
          <section
            className={classname}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      );
    });
    // 设置主题色
    document.styleSheets[0].rules[0].style.color = this.props.navbar.themeColor;

    // 横线
    document.styleSheets[0].rules[1].style.backgroundColor = this.props.navbar.themeColor;
    document.styleSheets[0].rules[1].style.height = "3px";

    document.styleSheets[0].rules[2].style.backgroundColor = "black";
    document.styleSheets[0].rules[2].style.height = "3px";

    document.styleSheets[0].rules[3].style.backgroundColor = this.props.navbar.themeColor;
    document.styleSheets[0].rules[3].style.height = "1px";

    document.styleSheets[0].rules[4].style.backgroundColor = "black";
    document.styleSheets[0].rules[4].style.height = "1px";

    // 竖线
    document.styleSheets[0].rules[5].style.backgroundColor = this.props.navbar.themeColor;
    document.styleSheets[0].rules[5].style.width = "3px";

    document.styleSheets[0].rules[6].style.backgroundColor = "black";
    document.styleSheets[0].rules[6].style.width = "3px";

    document.styleSheets[0].rules[7].style.backgroundColor = this.props.navbar.themeColor;
    document.styleSheets[0].rules[7].style.width = "1px";

    document.styleSheets[0].rules[8].style.backgroundColor = "black";
    document.styleSheets[0].rules[8].style.width = "1px";

    //链接下划线
    document.styleSheets[0].rules[9].style.borderBottom = `1px solid ${
      this.props.navbar.themeColor
    }`;
    document.styleSheets[0].rules[9].style.color = this.props.navbar.themeColor;

    // 设置字体大小
    // a
    document.styleSheets[0].cssRules[9].style.fontSize = `${this.props.navbar.fontSize}px`;
    // section
    document.styleSheets[0].cssRules[10].style.fontSize = `${this.props.navbar.fontSize}px`;
    // h1
    document.styleSheets[0].cssRules[11].style.fontSize = `${this.props.navbar.fontSize * 2 - 2}px`;
    // h2
    document.styleSheets[0].cssRules[12].style.fontSize = `${this.props.navbar.fontSize + 1}px`;
    // p
    document.styleSheets[0].cssRules[13].style.fontSize = `${this.props.navbar.fontSize}px`;

    return (
      <GridLayout
        className={classes.layout}
        layout={this.props.resume.layout}
        cols={24}
        rowHeight={22}
        width={710}
        margin={[10, 2]}
        isResizable={isResizable}
        isDraggable={isDraggable}
        onLayoutChange={this.handleLayoutChange}
      >
        {listItems}
      </GridLayout>
    );
  }
}

const styles = theme => ({
  hStart: {
    justifyContent: "flex-start"
  },
  hCenter: {
    justifyContent: "center"
  },
  hEnd: {
    justifyContent: "flex-end"
  },
  vStart: {
    alignItems: "flex-start"
  },
  vCenter: {
    alignItems: "center"
  },
  vEnd: {
    alignItems: "flex-end"
  },
  layout: {
    width: "188mm",
    // height: "200vh",
    // margin: "16mm 11mm",
    "& div": {
      display: "flex",
      flexDirection: "column-reverse",
      "& mark": {
        color: "rgb(70,140,212)",
        backgroundColor: "rgba(0,0,0,0)",
        "& hr": {
          height: "100%",
          border: "0",
          color: "black",
          margin: 0
        }
      },
      "& ins": {
        textDecoration: "none",
        width: "100%",
        "& hr": {
          width: "100%",
          border: "0",
          color: "black",
          margin: 0
          // backgroundColor: "black"
        }
      },
      "& section": {
        height: "100%",
        display: "flex",
        lineHeight: "24px",
        overflow: "hidden",
        width: "100%"
      },
      "& h1": {
        margin: "0",
      },
      "& h2": {
        margin: "0",
        fontWeight: "bold"
      },
      "& p": {
        margin: "0",
        lineHeight: "24px"
      },
      "& a": {
        textDecoration: "none",
        fontWeight: "bold"
        // borderBottom: "1px solid black"
      },
      "& strong": {
        width: "100%"
        // "& hr": {
        //   width: "100%",
        //   border: "0",
        //   height: "3px",
        //   color: "black",
        //   // backgroundColor: "black"
        // },
      },
      "& blockquote": {
        margin: "0",
        "&:before": {
          content: "''" /*CSS伪类用法*/,
          position: "absolute" /*定位背景横线的位置*/,
          bottom: "-1px",
          background: "#494949" /*宽和高做出来的背景横线*/,
          width: "100%",
          height: "1px"
        }
      },
      "& ul": {
        fontSize: "3.8mm",
        margin: "0",
        paddingInlineStart: "20px",
        lineHeight: "24px",
        width: "100%"
        // padding: "0"
      },
      "& code": {
        width: "100%"
      },
      "& img": {
        width: "100%"
      }
    }
  }
});

Resume.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Resume);
