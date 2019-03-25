import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

import bucket from "../../icons/bucket.svg";

import {
  ENTER_DELAY,
  LEAVE_DELAY,
  DATA_MARKDOWN,
  DATA_ORIGIN
} from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("navbar")
@inject("resume")
@inject("hint")
@observer
class Bucket extends Component {
  /**
   * 更新markdown样式
   */
  updateStyle = event => {
    event.stopPropagation();
    const id = this.props.resume.choosenKey;
    const { isMarkdownMode } = this.props.navbar;
    if (isMarkdownMode) {
      this.updateMarkdown(id);
    } else {
      this.updateNormal(id);
    }
  };

  updateMarkdown = id => {
    const element = document.getElementById(id);
    let content = element.getAttribute(DATA_MARKDOWN);
    const selectValue = window.getSelection().toString();
    if (selectValue) {
      const index = content.indexOf(selectValue);
      content =
        content.slice(0, index) +
        "`" +
        selectValue +
        "`" +
        content.slice(index + selectValue.length);
    } else {
      content = `${content}\`\``;
    }
    // 更新markdown内容
    element.childNodes[0].innerText = content;
    element.setAttribute(DATA_MARKDOWN, content);
  };

  updateNormal = id => {
    const element = document.getElementById(id);
    let content = element.getAttribute(DATA_ORIGIN);
    const selectValue = window.getSelection().toString();
    if (selectValue) {
      const index = content.indexOf(selectValue);
      if (index === -1) {
        this.props.hint.setError({
          isOpen: true,
          message: "主题色位置请不要与其他加粗、主题色和链接位置重合"
        });
        return;
      }
      content =
        content.slice(0, index) +
        "<code>" +
        selectValue +
        "</code>" +
        content.slice(index + selectValue.length);
      element.childNodes[0].innerHTML = content;
      element.setAttribute(DATA_ORIGIN, content);
    } else {
      this.props.hint.setError({
        isOpen: true,
        message: "请选择文本"
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Tooltip
        title="油漆桶"
        placement="bottom"
        enterDelay={ENTER_DELAY}
        leaveDelay={LEAVE_DELAY}
      >
        <Button
          disabled={this.props.navbar.isDisabled}
          onClick={this.updateStyle}
          className={classes.btn}
          classes={{
            root: classes.minWidth,
            disabled: classes.opacity
          }}
        >
          <img src={bucket} alt="logo" />
        </Button>
      </Tooltip>
    );
  }
}

const styles = theme => ({
  list: {
    display: "flex",
    marginLeft: "5px"
  },
  btn: {
    padding: "6px 10px",
    borderRadius: "0",
    borderBottom: "1px solid #cccccc",
    borderTop: "1px solid #cccccc",
    borderRight: "1px solid #cccccc",
    height: "100%"
  },
  minWidth: {
    minWidth: "auto"
  },
  opacity: {
    opacity: 0.3
  }
});

Bucket.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bucket);
