import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import remove from "../../icons/remove.svg";

import { ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("resume")
@inject("navbar")
@observer
class RemoveGrid extends Component {
  removeGrid = () => {
    this.props.resume.removeGrid();
  };

  render() {
    const { classes } = this.props;

    return (
      <Tooltip
        title="删除网格"
        placement="bottom"
        enterDelay={ENTER_DELAY}
        leaveDelay={LEAVE_DELAY}
        disableFocusListener
      >
        <Button
          className={classes.rightBtn}
          disabled={this.props.navbar.isDisabled}
          classes={{
            root: classes.minWidth,
            disabled: classes.opacity
          }}
          onClick={this.removeGrid}
        >
          <img src={remove} alt="logo" />
        </Button>
      </Tooltip>
    );
  }
}

const styles = theme => ({
  rightBtn: {
    padding: "6px 10px",
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
  opacity: {
    opacity: 0.3
  }
});

RemoveGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RemoveGrid);
