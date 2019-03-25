import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";

import Change from "../Button/Change";
import Mode from "../Button/Mode";

class ListSwitch extends Component {

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.list}>
        <Change />
        <Mode />
      </List>
    );
  }
}

const styles = theme => ({
  list: {
    display: "flex",
    marginLeft: "5px"
  }
});

ListSwitch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListSwitch);
