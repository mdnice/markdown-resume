import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Snackbar from "@material-ui/core/Snackbar";

import a from "../../icons/a.svg";

import { ENTER_DELAY, LEAVE_DELAY, ITEM_MAX_NUMS } from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("resume")
@inject("navbar")
@observer
class ChangeFontsize extends Component {
  state = {
    isHintOpen: false,
    isSnackbarOpen: false,
  };

  closeHint = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ isHintOpen: false });
  };

  closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ isSnackbarOpen: false });
  };

  handleFontSize = (fontSize) => {
    var targetFontSize = 14;
    switch (this.props.navbar.fontSize) {
      case 16:
        targetFontSize = 14;
        break;
      case 14:
        targetFontSize = 12;
        break;
      case 12:
        targetFontSize = 10;
        break;
      case 10:
        targetFontSize = 16;
        break;
      default:
        targetFontSize = 14;
        break;
    }
    this.props.navbar.setFontSize(targetFontSize);
    this.setState({ isSnackbarOpen: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Tooltip
          title="切换字体大小: 10, 12, 14, 16"
          placement="bottom"
          enterDelay={ENTER_DELAY}
          leaveDelay={LEAVE_DELAY}
          disableFocusListener
        >
          <Button
            className={classes.btn}
            classes={{
              root: classes.minWidth,
            }}
            onClick={this.handleFontSize}
          >
            <img src={a} alt="logo" />
          </Button>
        </Tooltip>
        <Snackbar
          open={this.state.isSnackbarOpen}
          autoHideDuration={6000}
          onClose={this.closeSnackbar}
          message={`字体：${this.props.navbar.fontSize}px`}
        />
      </div>
    );
  }
}

const styles = (theme) => ({
  btn: {
    padding: "6px 8px",
    borderRadius: "0",
    borderBottom: "1px solid #cccccc",
    borderTop: "1px solid #cccccc",
    borderRight: "1px solid #cccccc",
    height: "100%",
  },
  minWidth: {
    minWidth: "auto",
  },
});

ChangeFontsize.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChangeFontsize);
