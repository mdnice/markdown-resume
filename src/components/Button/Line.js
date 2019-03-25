import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Cheerio from "cheerio";
import line from "../../icons/line.svg";
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
class Line extends Component {
  state = {
    lineAnchorEl: null
  };
  /**
   * 更新markdown样式
   */
  addLine = flag => event => {
    event.stopPropagation();
    const id = this.props.resume.choosenKey;
    const { isMarkdownMode } = this.props.navbar;
    if (isMarkdownMode) {
      this.updateMarkdown(id, flag);
    } else {
      this.updateNormal(id, flag);
    }
    this.setState({ lineAnchorEl: null });
  };

  updateMarkdown = (id, flag) => {
    const element = document.getElementById(id);
    let content = element.getAttribute(DATA_MARKDOWN);
    if (flag === "h") {
      content = "---";
    } else if (flag === "v") {
      content = "+++";
    }
    if (flag === "H") {
      content = "---";
    } else if (flag === "strongH") {
      content = "**---**";
    } else if (flag === "colorH") {
      content = "`---`";
    } else if (flag === "strongColorH") {
      content = "**`---`**";
    } else if (flag === "V") {
      content = "+++";
    } else if (flag === "strongV") {
      content = "**+++**";
    } else if (flag === "colorV") {
      content = "`+++`";
    } else if (flag === "strongColorV") {
      content = "**`+++`**";
    }
    element.childNodes[0].innerText = content;
    element.setAttribute(DATA_MARKDOWN, content);
  };

  updateNormal = (id, flag) => {
    const element = document.getElementById(id);
    let content = element.getAttribute(DATA_ORIGIN);
    const $ = Cheerio.load(content, {
      xmlMode: true,
    });
    const section = $.html();
    const sectionInner = $("section").html();
    let html;
    if (flag === "H") {
      html = "<ins><hr></ins>";
    } else if (flag === "strongH") {
      html = "<strong><ins><hr></ins></strong>";
    } else if (flag === "colorH") {
      html = "<code><ins><hr></ins></code>";
    } else if (flag === "strongColorH") {
      html = "<strong><code><ins><hr></ins></code></strong>";
    } else if (flag === "V") {
      html = "<mark><hr></mark>";
    } else if (flag === "strongV") {
      html = "<strong><mark><hr></mark></strong>";
    } else if (flag === "colorV") {
      html = "<code><mark><hr></mark></code>";
    } else if (flag === "strongColorV") {
      html = "<strong><code><mark><hr></mark></code></strong>";
    }
    content = section.replace(sectionInner, html);
    element.childNodes[0].innerHTML = content;
    element.setAttribute(DATA_ORIGIN, content);
  };

  openLineMenu = event => {
    event.stopPropagation();
    this.setState({ lineAnchorEl: event.currentTarget });
  };

  closeLineMenu = event => {
    event.stopPropagation();
    this.setState({ lineAnchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { lineAnchorEl } = this.state;
    const lineOpen = Boolean(lineAnchorEl);
    return (
      <div>
        <Menu
          id="line-menu"
          anchorEl={lineAnchorEl}
          open={lineOpen}
          onClose={this.closeLineMenu}
          classes={{
            paper: classes.menu
          }}
        >
          <MenuItem className={classes.menuItem} style={{ display: "none" }} />
          <MenuItem className={classes.menuItem} onClick={this.addLine("H")}>
            横线
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.addLine("strongH")}
          >
            加粗横线
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.addLine("colorH")}
          >
            主题色横线
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.addLine("strongColorH")}
          >
            加粗主题色横线
          </MenuItem>
          <MenuItem className={classes.menuItem} onClick={this.addLine("V")}>
            竖线
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.addLine("strongV")}
          >
            加粗竖线
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.addLine("colorV")}
          >
            主题色竖线
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={this.addLine("strongColorV")}
          >
            加粗主题色竖线
          </MenuItem>
        </Menu>
        <Tooltip
          title="分割线"
          placement="bottom"
          enterDelay={ENTER_DELAY}
          leaveDelay={LEAVE_DELAY}
          open={this.state.open}
          disableFocusListener
        >
          <Button
            disabled={this.props.navbar.isDisabled}
            onClick={this.openLineMenu}
            className={classes.btn}
            classes={{
              root: classes.minWidth,
              disabled: classes.opacity
            }}
          >
            <img src={line} alt="logo" />
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

Line.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Line);
