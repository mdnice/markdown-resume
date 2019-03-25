import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import help from "../../icons/help.svg";

import {
  ENTER_DELAY,
  LEAVE_DELAY
} from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("dialog")
@observer
class Help extends Component {

  openHelpDialog = event => {
    event.stopPropagation();
    this.props.dialog.setHelpOpened(true);
  };

  render() {
    const { classes } = this.props;

    return (
      <Tooltip
        title="帮助"
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
          onClick={this.openHelpDialog}
        >
          <img src={help} alt="logo" />
        </Button>
      </Tooltip>
    );
  }
}

const styles = theme => ({
  rightBtn: {
    padding: "6px 8px",
    borderRadius: "0",
    borderBottom: "1px solid #cccccc",
    borderTop: "1px solid #cccccc",
    borderRight: "1px solid #cccccc",
    borderTopRightRadius: "3px",
    borderBottomRightRadius: "3px",
    height: "100%"
  },
  minWidth: {
    minWidth: "auto"
  },
});

Help.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Help);
