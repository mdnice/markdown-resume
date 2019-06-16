import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";

import corner from "../../icons/corner.svg";

import { ENTER_DELAY, LEAVE_DELAY, STORAGE_LAYOUT } from "../../utils/constant";
import { downloadFile } from "../../utils/helper";

import { observer, inject } from "mobx-react";

@inject("navbar")
@inject("dialog")
@observer
class Export extends Component {
  state = {
    exportAnchorEl: null
  };

  openModeMenu = event => {
    event.stopPropagation();
    this.setState({ exportAnchorEl: event.currentTarget });
  };

  closeModeMenu = event => {
    event.stopPropagation();
    this.setState({ exportAnchorEl: null });
  };

  handleExport = event => {
    event.stopPropagation();
    this.props.navbar.setExported(true);
    this.setState({ exportAnchorEl: null });
  };

  saveToLocal = event => {
    event.stopPropagation();
    const layout = window.localStorage.getItem(STORAGE_LAYOUT);
    const filename = `markdown-resume-${new Date().getTime()}.json`;
    downloadFile(filename, layout);
    this.setState({ exportAnchorEl: null });
  };

  importFromLocal = event => {
    event.stopPropagation();
    const file = event.target.files[0];
    this.fileReader = new FileReader();
    this.fileReader.onloadend = this.handleFileRead;
    this.fileReader.readAsText(file);
    this.setState({ exportAnchorEl: null });
  };

  handleFileRead = e => {
    const content = this.fileReader.result;
    window.localStorage.setItem(STORAGE_LAYOUT, content);
    window.location.href = "/";
  };

  openHelpDialog = event => {
    event.stopPropagation();
    this.props.dialog.setHelpOpened(true);
    this.setState({ exportAnchorEl: null });
  };

  render() {
    const { classes } = this.props;

    const { exportAnchorEl } = this.state;
    const exportOpen = Boolean(exportAnchorEl);

    return (
      <div>
        <Tooltip
          title="导入导出"
          placement="bottom"
          enterDelay={ENTER_DELAY}
          leaveDelay={LEAVE_DELAY}
          disableFocusListener
        >
          <Button
            className={classes.btn}
            color="primary"
            variant="outlined"
            onClick={this.openModeMenu}
          >
            导入导出
            <img src={corner} alt="logo" className={classes.corner} />
          </Button>
        </Tooltip>

        {/* 模板选择器菜单 */}
        <Menu
          id="template-menu"
          anchorEl={exportAnchorEl}
          open={exportOpen}
          onClose={this.closeModeMenu}
          classes={{
            paper: classes.menu
          }}
        >
          <MenuItem className={classes.menuItem} style={{ display: "none" }} />
          <MenuItem className={classes.menuItem} onClick={this.handleExport}>
            导出PDF
          </MenuItem>
          <MenuItem className={classes.menuItem} onClick={this.saveToLocal}>
            保存到本地
          </MenuItem>
          <label htmlFor="outlined-button-file">
            <MenuItem className={classes.menuItem}>
              <input
                accept="application/json"
                className={classes.input}
                id="outlined-button-file"
                type="file"
                onChange={this.importFromLocal}
              />
              从本地导入
            </MenuItem>
          </label>
          <MenuItem className={classes.menuItem} onClick={this.openHelpDialog}>
            帮助
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

const styles = theme => ({
  btn: {
    padding: "0px 10px",
    height: "100%",
    width: "100px"
  },
  menu: {
    top: "40px !important"
  },
  menuItem: {
    fontSize: "0.95em"
  },
  corner: {
    position: "absolute",
    bottom: 2,
    right: 2
  },
  input: {
    display: "none"
  },
  label: {
    width: "100%",
    height: "100%"
  }
});

Export.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Export);
