import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Snackbar from "@material-ui/core/Snackbar";

import add from "../../icons/add.svg";
import Hint from "../Basic/Hint";

import { ENTER_DELAY, LEAVE_DELAY, ITEM_MAX_NUMS } from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("resume")
@inject("navbar")
@observer
class AddGrid extends Component {
  state = {
    isHintOpen: false
  };

  addGrid = event => {
    event.stopPropagation();
    if (this.props.resume.layout.length >= ITEM_MAX_NUMS) {
      this.setState({ isHintOpen: true });
    } else {
      this.props.resume.addGrid(this.props.navbar.isMarkdownMode);
      this.props.navbar.setBtnDisable(false);
    }
  };

  closeHint = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ isHintOpen: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Tooltip
          title="新增网格"
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
            onClick={this.addGrid}
          >
            <img src={add} alt="logo" />
          </Button>
        </Tooltip>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={this.state.isHintOpen}
          autoHideDuration={5000}
          onClose={this.closeHint}
        >
          <Hint onClose={this.closeHint} variant="error" message="网格过多" />
        </Snackbar>
      </div>
    );
  }
}

const styles = theme => ({
  btn: {
    padding: "6px 8px",
    borderRadius: "0",
    borderBottom: "1px solid #cccccc",
    borderTop: "1px solid #cccccc",
    borderRight: "1px solid #cccccc",
    height: "100%"
  },
  minWidth: {
    minWidth: "auto"
  }
});

AddGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddGrid);
