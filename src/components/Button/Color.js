import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import color from "../../icons/color.svg";
import corner from "../../icons/corner.svg";

import {
  ENTER_DELAY,
  LEAVE_DELAY
} from "../../utils/constant";

import { observer, inject } from "mobx-react";

import { BlockPicker } from "react-color";

@inject("navbar")
@observer
class Color extends Component {
  state = {
    colorAnchorEl: null,
  };

  openColorMenu = event => {
    event.stopPropagation();
    this.setState({ colorAnchorEl: event.currentTarget });
  };

  colorClose = event => {
    event.stopPropagation();
    this.setState({ colorAnchorEl: null });
  };

  handleThemeColor = color => {
    // event.stopPropagation();
    this.props.navbar.setThemeColor(color.hex);
  };

  render() {
    const { classes } = this.props;

    const { colorAnchorEl } = this.state;
    const colorOpen = Boolean(colorAnchorEl);

    return (
      <div>
        <Tooltip
          title="主题颜色"
          placement="bottom"
          enterDelay={ENTER_DELAY}
          leaveDelay={LEAVE_DELAY}
          disableFocusListener
        >
          <Button
            className={classes.btn}
            classes={{
              root: classes.minWidth
            }}
            onClick={this.openColorMenu}
          >
            <img src={color} alt="logo" />
            <img src={corner} alt="logo" className={classes.corner}/>
          </Button>
        </Tooltip>

        {/* 颜色选择器菜单 */}
        <Menu
          id="color-menu"
          anchorEl={colorAnchorEl}
          open={colorOpen}
          onClose={this.colorClose}
          classes={{
            paper: classes.colorMenu
          }}
        >
          <BlockPicker
            color={this.props.navbar.themeColor}
            onChangeComplete={this.handleThemeColor}
            colors={["#468CD4", "#F47373", "#697689", "#ba68c8", "#000000"]}
            triangle="hide"
          />
        </Menu>
      </div>
    );
  }
}

const styles = theme => ({
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
  colorMenu: {
    top: "40px !important",
    "& ul": {
      padding: 0
    }
  },
  corner: {
    position: "absolute",
    bottom: 2,
    right: 2
  }
});

Color.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Color);
