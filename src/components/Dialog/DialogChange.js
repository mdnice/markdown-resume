import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { THEMES, TEMPLATE_NUM } from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("dialog")
@inject("navbar")
@inject("resume")
@inject("hint")
@observer
class DialogLink extends Component {

  handleClose = event => {
    event.stopPropagation();
    this.props.dialog.setChangeOpened(false);
  };

  changeTheme = event => {
    event.stopPropagation();
    const { templateNum } = this.props.navbar;
    this.props.resume.switchLayout(THEMES[templateNum]);
    window.localStorage.setItem(TEMPLATE_NUM, templateNum);
    this.props.hint.setSuccess({ isOpen: true, message: "切换模板成功" });
    this.props.dialog.setChangeOpened(false);
  }

  render() {
    // const { classes } = this.props;
    const { isChangeOpened } = this.props.dialog;

    return (
      <Dialog
        open={isChangeOpened}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">提醒</DialogTitle>
        <DialogContent>
          切换主题后将丢失当前编辑内容，是否确定切换主题？
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            取消
          </Button>
          <Button onClick={this.changeTheme} color="primary" variant="contained">
            确定
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const styles = theme => ({
  clear: {
    color: "white"
  },
  dialogField: {
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  dialogText: {
    margin: 0,
    lineHeight: "24px",
    width: "400px",
    fontSize: "0.9em",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "0.9em"
    },
    "& mark": {
      display: "inline-block",
      lineHeight: "24px",
      background: "lavender",
      padding: 0,
      margin: 0
    }
  }
});

DialogLink.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DialogLink);
