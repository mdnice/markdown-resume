import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Snackbar from "@material-ui/core/Snackbar";

import Hint from "../components/Basic/Hint";

import { observer, inject } from "mobx-react";

@inject("hint")
@observer
class Dialog extends Component {

  closeSuccessHint = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.props.hint.setSuccess({isOpen: false})
  };

  closeErrorHint = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.props.hint.setError({isOpen: false})
  };

  render() {
    // const { classes } = this.props;
    const isSuccessOpen = this.props.hint.success.isOpen
    const successMessage = this.props.hint.success.message
    const isErrorOpen = this.props.hint.error.isOpen
    const errorMessage = this.props.hint.error.message

    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={isSuccessOpen}
          autoHideDuration={5000}
          onClose={this.closeSuccessHint}
        >
          <Hint onClose={this.closeSuccessHint} variant="success" message={successMessage} />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={isErrorOpen}
          autoHideDuration={5000}
          onClose={this.closeErrorHint}
        >
          <Hint onClose={this.closeErrorHint} variant="error" message={errorMessage} />
        </Snackbar>
      </div>
    );
  }
}

const styles = theme => ({});

Dialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dialog);
