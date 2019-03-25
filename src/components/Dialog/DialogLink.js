import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { DATA_MARKDOWN, DATA_ORIGIN } from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("dialog")
@inject("resume")
@inject("navbar")
@observer
class DialogLink extends Component {
  state = {
    link: []
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.dialog.setLinkOpened(false);
  };

  linkChange = event => {
    this.setState({
      link: event.target.value
    });
  };

  // 添加链接
  addLink = event => {
    event.stopPropagation();
    // 没填写链接则不作任何改变
    if (this.state.link === "") {
      this.props.dialog.setLinkOpened(false);
      return;
    }
    const id = this.props.resume.choosenKey;

    const { isMarkdownMode } = this.props.navbar;
    if (isMarkdownMode) {
      this.updateMarkdown(id);
    } else {
      this.updateNormal(id);
    }
    this.props.dialog.setLinkOpened(false);
  };

  updateMarkdown = id => {
    const element = document.getElementById(id);
    const selectValue = this.props.dialog.linkText;
    let content = element.getAttribute(DATA_MARKDOWN);
    const index = content.indexOf(selectValue);
    content =
      content.slice(0, index) +
      "[" +
      selectValue +
      "](" +
      this.state.link +
      ")" +
      content.slice(index + selectValue.length);
    element.childNodes[0].innerText = content;
    element.setAttribute(DATA_MARKDOWN, content);
  };

  updateNormal = id => {
    const element = document.getElementById(id);
    const selectValue = this.props.dialog.linkText;
    let content = element.getAttribute(DATA_ORIGIN);
    const index = content.indexOf(selectValue);
    content =
      content.slice(0, index) +
      `<a href="${this.state.link}" target="_blank">` +
      selectValue +
      "</a>" +
      content.slice(index + selectValue.length);
    element.childNodes[0].innerHTML = content;
    element.setAttribute(DATA_ORIGIN, content);
  };

  render() {
    const { classes } = this.props;
    const { isLinkOpened } = this.props.dialog;

    return (
      <Dialog
        open={isLinkOpened}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">请填写链接</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="请输入链接地址"
            type="email"
            fullWidth
            className={classes.dialogField}
            onChange={this.linkChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            取消
          </Button>
          <Button onClick={this.addLink} color="primary" variant="contained">
            添加
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
