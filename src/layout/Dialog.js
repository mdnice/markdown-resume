import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import DialogHelp from "../components/Dialog/DialogHelp"
import DialogLink from "../components/Dialog/DialogLink"
import DialogChange from "../components/Dialog/DialogChange"

class Dialog extends Component {

  render() {
    // const { classes } = this.props;

    return (
      <div>
        <DialogHelp />
        <DialogLink />
        <DialogChange />
      </div>
    );
  }
}

const styles = theme => ({});

Dialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dialog);
