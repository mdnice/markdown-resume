import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";

import Frame from "../Button/Frame";
import Color from "../Button/Color";
import Screen from "../Button/Screen";
import AddGrid from "../Button/AddGrid";
import Help from "../Button/Help";

class ListGlobal extends Component {

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.list}>
        <Frame />
        <Color />
        <Screen />
        <AddGrid />
        <Help />
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

ListGlobal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListGlobal);
