import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import frame from "../../icons/frame.svg";
import {
  COLOR_RESIZABLE,
  COLOR_NORMAL,
  ENTER_DELAY,
  LEAVE_DELAY
} from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("resume")
@inject("navbar")
@observer
class Frame extends Component {

  toggleStatus = event => {
    event.stopPropagation();
    const {isMarkdownMode} = this.props.navbar
    // 当前是否为可编辑网格状态
    if (this.props.resume.status.isResizable) {
      const status = {
        gridStyle: { background: COLOR_NORMAL },
        isResizable: false,
        isDraggable: false
      };
      this.props.resume.setStatus(status, isMarkdownMode);
    } else {
      const status = {
        gridStyle: { background: COLOR_RESIZABLE },
        isResizable: true,
        isDraggable: true
      };
      this.props.resume.setStatus(status, isMarkdownMode);
    }
  };

  render() {
    const { classes } = this.props;

    const frameStyle = classNames(classes.leftBtn, {
      [classes.active]: this.props.resume.status.isResizable
    });

    return (
      <Tooltip
        title="排版"
        placement="bottom"
        enterDelay={ENTER_DELAY}
        leaveDelay={LEAVE_DELAY}
        disableFocusListener
      >
        <Button
          className={frameStyle}
          classes={{
            root: classes.minWidth
          }}
          onClick={this.toggleStatus}
        >
          <img src={frame} alt="logo" />
        </Button>
      </Tooltip>
    );
  }
}

const styles = theme => ({
  leftBtn: {
    padding: "6px 10px",
    border: "1px solid #cccccc",
    borderRadius: "0",
    borderTopLeftRadius: "3px",
    borderBottomLeftRadius: "3px",
    height: "100%"
  },
  minWidth: {
    minWidth: "auto"
  },
  active: {
    background: "rgba(56,132,255,.1)"
  },
});

Frame.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Frame);
