import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import Tooltip from "@material-ui/core/Tooltip";

import github from "../../icons/github.svg";
import Export from "../Button/Export"

// import { ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("resume")
@inject("navbar")
@observer
class ListStorage extends Component {
  // handleSave = () => {};

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.list}>
        {/* <ListItem
          className={classes.listExport}
          button
          onClick={this.handleExport}
        > */}
          <Export/>
          {/* <Button variant="outlined" color="primary" className={classes.btn}>
            导出PDF
          </Button> */}
        {/* </ListItem> */}

        {/* <Tooltip
          title="登录"
          placement="bottom"
          enterDelay={ENTER_DELAY}
          leaveDelay={LEAVE_DELAY}
          disableFocusListener
        > */}
          <ListItem
            className={classes.listItem}
            button
            onClick={this.handleSave}
          >
            <a className={classes.github} target="_blank" rel="noopener noreferrer" href="https://github.com/guanpengchn/markdown-resume">
              <img src={github} alt="logo" />
            </a>
          </ListItem>
        {/* </Tooltip> */}
      </List>
    );
  }
}

const styles = theme => ({
  menuItem: {
    fontSize: "0.95em"
  },
  menu: {
    left: "54px !important"
  },
  list: {
    display: "flex",
    marginLeft: "5px"
  },
  listExport: {
    padding: "0px",
    marginRight: "10px"
  },
  listItem: {
    padding: "4px 6px",
  },
  btn: {
    padding: "0",
    width: "100px",
  },
  github: {
    borderBottom: "none"
  }
});

ListStorage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListStorage);
