import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

import link from "../../icons/link.svg";

import {
  ENTER_DELAY,
  LEAVE_DELAY,
  DATA_MARKDOWN,
  DATA_ORIGIN
} from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("navbar")
@inject("resume")
@inject("dialog")
@inject("hint")
@observer
class Link extends Component {
  /**
   * 更新markdown样式
   */
  updateStyle = event => {
    event.stopPropagation();
    const id = this.props.resume.choosenKey;
    const element = document.getElementById(id);
    const selectValue = window.getSelection().toString();
    const { isMarkdownMode } = this.props.navbar;
    if (selectValue) {
      let content;
      if (isMarkdownMode) {
        content = element.getAttribute(DATA_MARKDOWN);
      } else {
        content = element.getAttribute(DATA_ORIGIN);
      }
      const index = content.indexOf(selectValue);
      if (index === -1) {
        this.props.hint.setError({
          isOpen: true,
          message: "链接位置请不要与其他加粗、主题色和链接位置重合"
        });
        return;
      } else {
        // 成功选择了
        this.props.dialog.setLinkOpened(true);
        this.props.dialog.setLinkText(selectValue);
      }
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
        title="链接"
        placement="bottom"
        enterDelay={ENTER_DELAY}
        leaveDelay={LEAVE_DELAY}
        disableFocusListener
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
          <img src={link} alt="logo" />
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

Link.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Link);
