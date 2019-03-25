import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import Word from "../Button/Word";
import Strong from "../Button/Strong";
import Li from "../Button/Li";
import Bucket from "../Button/Bucket";
import Blockquote from "../Button/Blockquote";
import Link from "../Button/Link";
import Align from "../Button/Align";
import Line from "../Button/Line";
import Picture from "../Button/Picture";
import RemoveGrid from "../Button/RemoveGrid";

class ListMd extends Component {
  render() {
    const { classes } = this.props;

    return (
      <List className={classes.list}>
        <Word/>
        <Strong />
        <Li />
        <Blockquote />
        <Bucket />
        <Link />
        <Align />
        <Line />
        <Picture />
        <RemoveGrid />
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

ListMd.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListMd);
