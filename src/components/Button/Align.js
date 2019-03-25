import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Cheerio from "cheerio";
import align from "../../icons/align.svg";
import corner from "../../icons/corner.svg";

import { ENTER_DELAY, LEAVE_DELAY, DATA_MARKDOWN,DATA_ORIGIN } from "../../utils/constant";

import { observer, inject } from "mobx-react";

@inject("navbar")
@inject("resume")
@observer
class Word extends Component {
  state = {
    alignAnchorEl: null
  };
  /**
   * 更新markdown样式
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
    this.setState({ alignAnchorEl: null });
  };

  updateMarkdown = (id, flag) => {
    const element = document.getElementById(id);
    let content = element.getAttribute(DATA_MARKDOWN);
    if (flag === "hStart") {
      content = content + "[-S]";
    } else if (flag === "hCenter") {
      content = content + "[-C]";
    } else if (flag === "hEnd") {
      content = content + "[-E]";
    } else if (flag === "vStart") {
      content = content + "[+S]";
    } else if (flag === "vCenter") {
      content = content + "[+C]";
    } else if (flag === "vEnd") {
      content = content + "[+E]";
    }
    element.childNodes[0].innerText = content;
    element.setAttribute(DATA_MARKDOWN, content);
  }

  updateNormal = (id, flag) => {
    const element = document.getElementById(id);
    let content = element.getAttribute(DATA_ORIGIN);
    const $ = Cheerio.load(content, {
      xmlMode: true
    });
    const sectionInner = $("section").html();
    content = `<section class="${flag}">${sectionInner}</section>`
    element.childNodes[0].innerHTML = content;
    element.setAttribute(DATA_ORIGIN, content);
  }

  openAlignMenu = event => {
    event.stopPropagation();
    this.setState({ alignAnchorEl: event.currentTarget });
  };

  closeAlignMenu = event => {
    event.stopPropagation();
    this.setState({ alignAnchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { alignAnchorEl } = this.state;
    const alignOpen = Boolean(alignAnchorEl);

    return (
      <div>
        <Menu
          id="align-menu"
          anchorEl={alignAnchorEl}
          open={alignOpen}
          onClose={this.closeAlignMenu}
          classes={{
            paper: classes.menu
          }}
        >
          <MenuItem className={classes.menuItem} style={{ display: "none" }} />
          <MenuItem
            className={classes.menuItem}
            onClick={this.updateStyle("hStart")}
          >
            左对齐
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.updateStyle("hCenter")}
          >
            水平居中
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.updateStyle("hEnd")}
          >
            右对齐
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.updateStyle("vStart")}
          >
            上对齐
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.updateStyle("vCenter")}
          >
            垂直居中
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.updateStyle("vEnd")}
          >
            下对齐
          </MenuItem>
        </Menu>
        <Tooltip
          title="对齐"
          placement="bottom"
          enterDelay={ENTER_DELAY}
          leaveDelay={LEAVE_DELAY}
          disableFocusListener
        >
          <Button
            disabled={this.props.navbar.isDisabled}
            onClick={this.openAlignMenu}
            className={classes.btn}
            classes={{
              root: classes.minWidth,
              disabled: classes.opacity
            }}
          >
            <img src={align} alt="logo" />
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
