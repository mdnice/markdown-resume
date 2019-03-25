import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import Cheerio from "cheerio";

import word from "../../icons/word.svg";
import corner from "../../icons/corner.svg";

import {
  ENTER_DELAY,
  LEAVE_DELAY,
  DATA_MARKDOWN,
  DATA_ORIGIN
} from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("navbar")
@inject("resume")
@observer
class Word extends Component {
  state = {
    sizeAnchorEl: null
  };
  /**
   * 更新样式
   */
  updateStyle = flag => event => {
    event.stopPropagation();
    const id = this.props.resume.choosenKey;
    const { isMarkdownMode } = this.props.navbar;
    if (isMarkdownMode) {
      this.updateMarkdown(id, flag);
    } else {
      this.updateNormal(id, flag);
    }
    // 隐藏字号菜单
    this.setState({ sizeAnchorEl: null });
  };

  updateMarkdown = (id, flag) => {
    const element = document.getElementById(id);
    let content = element.getAttribute(DATA_MARKDOWN);
    if (flag === "h1") {
      content = "# " + content;
    } else if (flag === "h2") {
      content = "## " + content;
    }
    element.childNodes[0].innerText = content;
    element.setAttribute(DATA_MARKDOWN, content);
  };

  updateNormal = (id, flag) => {
    const element = document.getElementById(id);
    let content = element.getAttribute(DATA_ORIGIN);
    // 做替换，处理已经有标题的情况
    const $ = Cheerio.load(content, {
      xmlMode: true
    });
    const section = $.html();
    const sectionInner = $("section").html();
    let sectionTitle;
    if ($("section h1").html()) {
      sectionTitle = $("section h1").html();
    } else if ($("section h2").html()) {
      sectionTitle = $("section h2").html();
    } else {
      sectionTitle = $("section").html();
    }
    if (flag === "h1") {
      content = section.replace(sectionInner, `<h1>${sectionTitle}</h1>`);
    } else if (flag === "h2") {
      content = section.replace(sectionInner, `<h2>${sectionTitle}</h2>`);
    } else if (flag === "p") {
      content = section.replace(sectionInner, `${sectionTitle}`);
    }
    element.childNodes[0].innerHTML = content;
    element.setAttribute(DATA_ORIGIN, content);
  };

  openFontSizeMenu = event => {
    event.stopPropagation();
    this.setState({ sizeAnchorEl: event.currentTarget });
  };

  closeFontSizeMenu = event => {
    event.stopPropagation();
    this.setState({ sizeAnchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { sizeAnchorEl } = this.state;
    const sizeOpen = Boolean(sizeAnchorEl);
    const { isMarkdownMode } = this.props.navbar;
    const isDisplay = {
      display: isMarkdownMode ? "none" : "block"
    };
    return (
      <div>
        <Menu
          id="size-menu"
          anchorEl={sizeAnchorEl}
          open={sizeOpen}
          onClose={this.closeFontSizeMenu}
          classes={{
            paper: classes.menu
          }}
        >
          <MenuItem className={classes.menuItem} style={{ display: "none" }} />
          <MenuItem
            className={classes.menuItem}
            onClick={this.updateStyle("p")}
            style={isDisplay}
          >
            普通字号
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.updateStyle("h1")}
          >
            一级标题
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.updateStyle("h2")}
          >
            二级标题
          </MenuItem>
        </Menu>
        <Tooltip
          title="字号切换"
          placement="bottom"
          enterDelay={ENTER_DELAY}
          leaveDelay={LEAVE_DELAY}
          disableFocusListener
        >
          <Button
            disabled={this.props.navbar.isDisabled}
            onClick={this.openFontSizeMenu}
            className={classes.leftBtn}
            classes={{
              root: classes.minWidth,
              disabled: classes.opacity
            }}
          >
            <img src={word} alt="logo" />
            <img src={corner} alt="logo" className={classes.corner} />
          </Button>
        </Tooltip>
      </div>
    );
  }
}

const styles = theme => ({
  menuItem: {
    fontSize: "0.95em"
  },
  menu: {
    top: "40px !important"
  },
  leftBtn: {
    padding: "6px 10px",
    border: "1px solid #cccccc",
    borderRadius: "0",
    borderTopLeftRadius: "3px",
    borderBottomLeftRadius: "3px",
    height: "100%"
  },
  minWidth: {
    minWidth: "auto"
  },
  opacity: {
    opacity: 0.3
  },
  corner: {
    position: "absolute",
    bottom: 2,
    right: 2
  }
});

Word.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Word);
