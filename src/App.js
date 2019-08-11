import React, { Component } from "react";
import Resume from "./layout/Resume";
import NormalResume from "./layout/NormalResume";
import Dialog from "./layout/Dialog";
import Hint from "./layout/Hint";
import Navbar from "./layout/Navbar";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { observer, inject } from "mobx-react";

@inject("navbar")
@inject("resume")
@observer
class App extends Component {
  afterPrint = () => {
    this.props.navbar.setExported(false);
  };

  componentDidMount() {
    window.onafterprint = this.afterPrint;
    window.ondragstart = e => {
      e.preventDefault();
    };
    // 其他操作按钮会阻止冒泡
    window.onclick = () => {
      console.log("window click");
      if (this.props.navbar.isMarkdownMode) {
        this.props.resume.updateResume();
        this.props.navbar.setBtnDisable(true);
      } else {
        this.props.resume.updateNormalResume();
        this.props.navbar.setBtnDisable(true);
      }
    };

    window.onbeforeunload = e => {
      e = e || window.event;
      if (e) {
        e.returnValue = "数据目前存储在浏览器中，记得保存到本地备份！";
      }
      return "数据目前存储在浏览器中，记得保存到本地备份！";
    };
  }

  componentDidUpdate() {
    if (this.props.navbar.isExported) {
      this.props.resume.setChoosen();
      window.print();
    }
  }

  render() {
    const { classes } = this.props;
    const { isExported } = this.props.navbar;
    const display = {
      display: isExported ? "none" : "block"
    };
    const resumeStyle = {
      border: isExported ? "none" : "1px solid black",
      boxShadow: isExported ? "none" : "0px 0px 4px",
      margin: isExported ? "0px" : "80px 0"
    };
    return (
      <div id="app" className={classes.app}>
        <section className={classes.navbar} style={display}>
          <Navbar />
        </section>
        <main className={classes.resume} style={resumeStyle}>
          {this.props.navbar.isMarkdownMode ? <Resume /> : <NormalResume />}
        </main>
        <Dialog />
        <Hint />
      </div>
    );
  }
}

const contentWidth = 210 - 11 * 2;
const contentHeight = 296 - 16 * 2;

const styles = theme => ({
  app: {
    display: "flex",
    width: "100%",
    justifyContent: "center"
  },
  resume: {
    display: "flex",
    padding: "16mm 11mm",
    width: contentWidth + "mm",
    height: contentHeight + "mm",
    background: "white",
    overflow: "auto",
    wordBreak: "break-all"
  },
  navbar: {
    width: "100%",
    position: "fixed",
    zIndex: "999"
  }
});

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
