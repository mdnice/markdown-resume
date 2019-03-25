import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";

import corner from "../../icons/corner.svg";

import { ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("navbar")
@inject("dialog")
@observer
class Change extends Component {
  state = {
    templateAnchorEl: null
  };

  openTemplateMenu = event => {
    event.stopPropagation();
    this.setState({ templateAnchorEl: event.currentTarget });
  };

  closeTemplateMenu = event => {
    event.stopPropagation();
    this.setState({ templateAnchorEl: null });
  };

  switchTemplate = value => event => {
    event.stopPropagation();
    this.props.dialog.setChangeOpened(true);
    this.props.navbar.setTemplateNum(value)
    this.setState({ templateAnchorEl: null });
  };

  render() {
    const { classes } = this.props;

    const { templateAnchorEl } = this.state;
    const templateOpen = Boolean(templateAnchorEl);
    const { templateNum } = this.props.navbar;
    const message = templateNum === 0 ? "自定义" : `模板${templateNum}`;
    return (
      <div>
        <Tooltip
          title="切换模板"
          placement="bottom"
          enterDelay={ENTER_DELAY}
          leaveDelay={LEAVE_DELAY}
          disableFocusListener
        >
          <Button
            className={classes.leftBtn}
            classes={{
              root: classes.minWidth
            }}
            onClick={this.openTemplateMenu}
          >
            {message}
            <img src={corner} alt="logo" className={classes.corner} />
          </Button>
        </Tooltip>

        {/* 模板选择器菜单 */}
        <Menu
          id="template-menu"
          anchorEl={templateAnchorEl}
          open={templateOpen}
          onClose={this.closeTemplateMenu}
          classes={{
            paper: classes.menu
          }}
        >
          <MenuItem className={classes.menuItem} style={{ display: "none" }} />
          <MenuItem
            className={classes.menuItem}
            onClick={this.switchTemplate(1)}
          >
            模板1
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.switchTemplate(2)}
          >
            模板2
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.switchTemplate(3)}
          >
            模板3
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.switchTemplate(4)}
          >
            模板4
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.switchTemplate(0)}
          >
            自定义
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

const styles = theme => ({
  leftBtn: {
    padding: "0px 10px",
    border: "1px solid #cccccc",
    borderRadius: "0",
    borderTopLeftRadius: "3px",
    borderBottomLeftRadius: "3px",
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
  }
});

Change.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Change);
