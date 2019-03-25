import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

import picture from "../../icons/picture.svg";

import { ENTER_DELAY, LEAVE_DELAY, DATA_MARKDOWN } from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("navbar")
@inject("resume")
@observer
class Picture extends Component {
  /**
   * 更新markdown样式
   */
  updateStyle = flag => event => {
    event.stopPropagation();
    const id = this.props.resume.choosenKey;
    const element = document.getElementById(id);
    let content = element.getAttribute(DATA_MARKDOWN);
    content = "- " + content;

    // 更新markdown内容
    element.childNodes[0].innerText = content;
    element.setAttribute(DATA_MARKDOWN, content);
  };

  render() {
    const { classes } = this.props;

    return (
      <Tooltip
        title="图片"
        placement="bottom"
        enterDelay={ENTER_DELAY}
        leaveDelay={LEAVE_DELAY}
        disableFocusListener
      >
        <Button
          className={classes.btn}
          disabled={this.props.navbar.isDisabled}
          classes={{
            root: classes.minWidth,
            disabled: classes.opacity
          }}
        >
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file" className={classes.label}>
            <img src={picture} alt="logo" />
          </label>
        </Button>
      </Tooltip>
    );
  }
}

const styles = theme => ({
  input: {
    display: "none"
  },
  label: {
    display: "flex",
    height: "100%"
  },
  btn: {
    padding: "6px 10px",
    borderRadius: "0",
    borderBottom: "1px solid #cccccc",
    borderTop: "1px solid #cccccc",
    borderRight: "1px solid #cccccc",
    height: "100%"
  },
  minWidth: {
    minWidth: "auto"
  },
  opacity: {
    opacity: 0.3
  }
});

Picture.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Picture);
