import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import axios from "axios";

import picture from "../../icons/picture.svg";

import {
  ENTER_DELAY,
  LEAVE_DELAY,
  DATA_MARKDOWN,
  DATA_ORIGIN,
  SM_MS_PROXY
} from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("navbar")
@inject("resume")
@inject("hint")
@observer
class Picture extends Component {
  /**
   * 上传图片
   */
  uploadPicture = async ({ target }) => {
    const file = document.getElementById("uploadImage");
    const formData = new FormData();
    formData.append("smfile", file.files[0]);

    const result = await axios.post(SM_MS_PROXY, formData);
    if (result.data.message === "Image upload repeated limit.") {
      this.props.hint.setError({
        isOpen: true,
        message: "同一张图片无法上传多次"
      });
    } else {
      const id = this.props.resume.choosenKey;
      console.log(id);
      const element = document.getElementById(id);

      const { isMarkdownMode } = this.props.navbar;
      let content;
      if (isMarkdownMode) {
        content = `![avatar](${result.data.data.url})`;
        element.childNodes[0].innerText = content;
        element.setAttribute(DATA_MARKDOWN, content);
      } else {
        content = `<section><p><img src="${result.data.data.url}" alt="avatar"></p>\n</section>`
        element.childNodes[0].innerHTML = content;
        element.setAttribute(DATA_ORIGIN, content);
      }
     
    }
  };

  stopPropagation = event => {
    event.stopPropagation();
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
          onClick={this.stopPropagation}
          classes={{
            root: classes.minWidth,
            disabled: classes.opacity
          }}
        >
          <input
            accept="image/*"
            className={classes.input}
            id="uploadImage"
            onChange={this.uploadPicture}
            type="file"
          />
          <label htmlFor="uploadImage" className={classes.label}>
            <img src={picture} alt="logo" />
          </label>
        </Button>
      </Tooltip>
    );
  }
}

const styles = theme => ({
  input: {
    display: "none",
    width: "100%"
  },
  label: {
    display: "flex",
    height: "100%",
    padding: "6px 10px"
  },
  btn: {
    padding: "0px",
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
