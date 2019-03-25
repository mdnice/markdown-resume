import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import screen from "../../icons/screen.svg";

import { fullScreen, exitFullScreen } from "../../utils/helper";
import { ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("resume")
@observer
class Screen extends Component {
  state = {
    isScreenActive: false
  };

  toggleScreen = event => {
    event.stopPropagation();
    this.setState({ isScreenActive: !this.state.isScreenActive });
  };

  render() {
    const { classes } = this.props;

    const screenStyle = classNames(classes.btn, {
      [classes.active]: this.state.isScreenActive
    });

    this.state.isScreenActive ? fullScreen() : exitFullScreen();

    return (
      <Tooltip
        title="全屏"
        placement="bottom"
        enterDelay={ENTER_DELAY}
        leaveDelay={LEAVE_DELAY}
        disableFocusListener
      >
        <Button
          className={screenStyle}
          classes={{
            root: classes.minWidth
          }}
          onClick={this.toggleScreen}
        >
          <img src={screen} alt="logo" />
        </Button>
      </Tooltip>
    );
  }
}

const styles = theme => ({
  btn: {
    padding: "6px 10px",
    borderRadius: "0",
    borderBottom: "1px solid #cccccc",
    borderTop: "1px solid #cccccc",
    borderRight: "1px solid #cccccc"
  },
  minWidth: {
    minWidth: "auto"
  },
  active: {
    background: "rgba(56,132,255,.1)"
  }
});

Screen.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Screen);
