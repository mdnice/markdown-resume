import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Cheerio from "cheerio";

import list from "../../icons/list.svg";

import { ENTER_DELAY, LEAVE_DELAY, DATA_MARKDOWN,DATA_ORIGIN } from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("navbar")
@inject("resume")
@observer
class Li extends Component {
  /**
   * 更新markdown样式
   */
  updateStyle = event => {
    event.stopPropagation();
    const id = this.props.resume.choosenKey;
    const { isMarkdownMode } = this.props.navbar;
    if (isMarkdownMode) {
      this.updateMarkdown(id);
    } else {
      this.updateNormal(id);
    }
  };

  updateMarkdown = (id) => {
    const element = document.getElementById(id);
    let content = element.getAttribute(DATA_MARKDOWN);
    content = "- " + content;
    element.childNodes[0].innerText = content;
    element.setAttribute(DATA_MARKDOWN, content);
  };

  updateNormal = (id) => {
    const element = document.getElementById(id);
    let content = element.getAttribute(DATA_ORIGIN);
    // 做替换，处理已经有标题的情况
    const $ = Cheerio.load(content, {
      xmlMode: true
    });
    const section = $.html();
    const sectionInner = $("section").html();
    let sectionTitle;
    if ($("section ul li").html()) {
      sectionTitle = $("section ul li").html();
      content = section.replace(sectionInner, `${sectionTitle}`);
    } else {
      sectionTitle = $("section").html();
      content = section.replace(sectionInner, `<ul><li>${sectionTitle}</ul></li>`);
    }
    element.childNodes[0].innerHTML = content;
    element.setAttribute(DATA_ORIGIN, content);
  }

  render() {
    const { classes } = this.props;

    return (
      <Tooltip
        title="列表"
        placement="bottom"
        enterDelay={ENTER_DELAY}
        leaveDelay={LEAVE_DELAY}
        disableFocusListener
      >
        <Button
          disabled={this.props.navbar.isDisabled}
          onClick={this.updateStyle}
          className={classes.btn}
          classes={{
            root: classes.minWidth,
            disabled: classes.opacity
          }}
        >
          <img src={list} alt="logo" />
        </Button>
      </Tooltip>
    );
  }
}

const styles = theme => ({
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

Li.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Li);
