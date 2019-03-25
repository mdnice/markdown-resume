import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";

import corner from "../../icons/corner.svg";

import { ENTER_DELAY, LEAVE_DELAY, MARKDOWN_MODE } from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("navbar")
@inject("hint")
@observer
class Mode extends Component {
  state = {
    modeAnchorEl: null
  };

  openModeMenu = event => {
    event.stopPropagation();
    this.setState({ modeAnchorEl: event.currentTarget });
  };

  closeModeMenu = event => {
    event.stopPropagation();
    this.setState({ modeAnchorEl: null });
  };

  switchMode = value => event => {
    event.stopPropagation();
    this.props.navbar.setMarkdownMode(value);
    window.localStorage.setItem(MARKDOWN_MODE, value);
    this.props.hint.setSuccess({
      isOpen: true,
      message: "已切换。提示：两种模式简历独立。"
    });
    this.setState({
      modeAnchorEl: null
    });
  };

  render() {
    const { classes } = this.props;

    const { modeAnchorEl } = this.state;
    const modeOpen = Boolean(modeAnchorEl);

    return (
      <div>
        <Tooltip
          title="切换模式"
          placement="bottom"
          enterDelay={ENTER_DELAY}
          leaveDelay={LEAVE_DELAY}
          disableFocusListener
        >
          <Button
            className={classes.rightBtn}
            classes={{
              root: classes.minWidth
            }}
            onClick={this.openModeMenu}
          >
            {this.props.navbar.isMarkdownMode ? "MD" : "普通"}
            <img src={corner} alt="logo" className={classes.corner} />
          </Button>
        </Tooltip>

        {/* 模板选择器菜单 */}
        <Menu
          id="template-menu"
          anchorEl={modeAnchorEl}
          open={modeOpen}
          onClose={this.closeModeMenu}
          classes={{
            paper: classes.menu
          }}
        >
          <MenuItem className={classes.menuItem} style={{ display: "none" }} />
          <MenuItem
            className={classes.menuItem}
            onClick={this.switchMode(true)}
          >
            Markdown模式
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.switchMode(false)}
          >
            普通模式
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

const styles = theme => ({
  rightBtn: {
    padding: "0px 10px",
    borderRadius: "0",
    borderBottom: "1px solid #cccccc",
    borderTop: "1px solid #cccccc",
    borderRight: "1px solid #cccccc",
    borderTopRightRadius: "3px",
    borderBottomRightRadius: "3px",
    height: "100%",
    color: "#555"
  },
  minWidth: {
    minWidth: "auto"
  },
  menu: {
    top: "40px !important"
  },
  menuItem: {
    fontSize: "0.95em"
  },
  corner: {
    position: "absolute",
    bottom: 2,
    right: 2
  },
  active: {}
});

Mode.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Mode);
