import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { observer, inject } from "mobx-react";

import resume from "../icons/resume.svg";

import ListStorage from "../components/Navbar/ListStorage";
import ListGlobal from "../components/Navbar/ListGlobal";
import ListSwitch from "../components/Navbar/ListSwitch";
import ListMarkdown from "../components/Navbar/ListMarkdown";
// import ListNormal from "../components/Navbar/ListNormal";

@inject("navbar")
@observer
class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.navbar}>
        <div className={classes.title}>
          <img src={resume}  alt="logo"/>
          <span>Markdown简历</span>
        </div>
        <div className={classes.btnGroup}>
          <ListSwitch />
          <ListGlobal />
          {/* {this.props.navbar.isMarkdownMode ? <ListMarkdown /> : <ListNormal />} */}
          <ListMarkdown />
        </div>
        <div className={classes.user}>
          <ListStorage />
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  navbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    width: "100%",
    background: "white",
    boxShadow: "0px 0px 5px",
    zIndex: "999",
    overflow: "auto"
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "20px",
    flexBasis: "200px",
    flexGrow: 1
  },
  btnGroup: {
    display: "flex",
    justifyContent: "space-between",
    width: "210mm",
    flexShrink: 0
  },
  user: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "20px",
    flexBasis: "200px",
    flexGrow: 1
  },
});

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
