import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import { HELP_INFO } from "../../utils/constant";

import MarkdownIt from "markdown-it";
import MarkdownItIns from "markdown-it-ins";
import MarkdownItMark from "markdown-it-mark";

import { observer, inject } from "mobx-react";

@inject("dialog")
@observer
class DialogHelp extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  constructor(props) {
    super(props);
    this.md = new MarkdownIt();
    this.md.use(MarkdownItIns);
    this.md.use(MarkdownItMark);
  }

  handleClose = () => {
    this.props.dialog.setHelpOpened(false);
  };

  render() {
    const { classes } = this.props;
    const value = this.state.value;

    return (
      <Dialog
        open={this.props.dialog.isHelpOpened}
        onClose={this.handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title">帮助</DialogTitle>
        <DialogContent className={classes.dialog}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="注意" />
            <Tab label="使用规则" />
            <Tab label="Markdown语法" />
          </Tabs>
          {value === 0 && (
            <DialogContentText
              dangerouslySetInnerHTML={{ __html: this.md.render(HELP_INFO[0]) }}
            />
          )}
          {value === 1 && (
            <DialogContentText
              dangerouslySetInnerHTML={{ __html: this.md.render(HELP_INFO[1]) }}
            />
          )}
          {value === 2 && (
            <DialogContentText
              dangerouslySetInnerHTML={{ __html: this.md.render(HELP_INFO[2]) }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            关闭
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const styles = theme => ({
  dialog: {
    "& table": {
      borderCollapse: "collapse",
      borderSpacing: 0,
      marginBottom: "16px",
      marginTop: 0,
      "& th": {
        fontWeight: 600,
        border: "1px solid #dfe2e5",
        padding: "6px 13px"
      },
      "& td": {
        border: "1px solid #dfe2e5",
        padding: "6px 13px",
        "& code": {
          backgroundColor: "rgba(27, 31, 35, 0.05)",
          borderRadius: "3px",
          fontSize: "100%",
          margin: 0,
          padding: ".2em .4em",
          color: "black"
        }
      },
      "& tr:nth-child(2n)": {
        backgroundColor: "#f6f8fa"
      }
    },
    "& pre": {
      "& code": {
        backgroundColor: "rgba(27, 31, 35, 0.05)",
        borderRadius: "3px",
        fontSize: "100%",
        margin: 0,
        padding: ".2em .4em",
        color: "black"
      }
    },
    "& img": {
      width: "300px",
      boxShadow: "3px 3px 10px",
      [theme.breakpoints.down("sm")]: {
        width: "200px"
      }
    }
  }
});

DialogHelp.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(DialogHelp);
