import React, { Component } from "react";
import PropTypes from "prop-types";
import { browserHistory } from "react-router";
// import Player from '../components/player';
import Button from "react-md/lib/Buttons/Button";
import ListItem from "react-md/lib/Lists/ListItem";
import MenuButton from "react-md/lib/Menus/MenuButton";
import NavigationDrawer from "react-md/lib/NavigationDrawers";
import FontIcon from "react-md/lib/FontIcons";
import TextField from "react-md/lib/TextFields";
import Dialog from "react-md/lib/Dialogs";
import Player from "../components/Player/Player.jsx";
import { connect } from "react-redux";

const styles = {
  toolbarStyle: {
    backgroundColor: "#3F51B5"
  },
  drawerStyle: {
    backgroundColor: "#7364FB"
  }
};

class App extends Component {
  state = {
    dialogVisible: false
  };
  render() {
    const closeButton = [
      <MenuButton
        id="vert-menu"
        icon
        buttonChildren="more_vert"
        className="menu-example"
      >

        {true
          ? [
              <ListItem
                key={1}
                onClick={this.showDialog}
                primaryText="Admin Sign In"
              />
            ]
          : <ListItem
              onClick={() => {
                localStorage.clear();
                this.props.logOut();
                browserHistory.push("/");
              }}
              primaryText="Log Out"
            />}
      </MenuButton>
    ];
    return (
      <div>
        <NavigationDrawer
          drawerTitle={
            <div>
              <a
                style={{ marginLeft: "20%", color: "white" }}
                onClick={() => (window.location = "/#/")}
              >
                Сониуч
              </a>
            </div>
          }
          mobileDrawerType="temporary"
          tabletDrawerType="temporary"
          drawerStyle={styles.drawerStyle}
          toolbarActions={closeButton}
          onMediaTypeChange={this._handleMediaTypeChange}
          toolbarStyle={styles.toolbarStyle}
          navItems={[
            {
              onClick: () => browserHistory.push("/"),
              primaryText: <a style={{ color: "white" }}>Нүүр</a>,
              leftIcon: <FontIcon style={{ color: "white" }}>home</FontIcon>
            },
            {
              onClick: () => browserHistory.push("/podcasts"),
              primaryText: <a style={{ color: "white" }}>Podcast</a>,
              leftIcon: <FontIcon style={{ color: "white" }}>radio</FontIcon>
            },
            {
              onClick: () => browserHistory.push("/podcasts"),
              primaryText: <a style={{ color: "white" }}>Lifestyle</a>,
              leftIcon: (
                <FontIcon style={{ color: "white" }}>invert_colors</FontIcon>
              )
            },
            {
              onClick: () => browserHistory.push("/podcasts"),
              primaryText: <a style={{ color: "white" }}>Technology</a>,
              leftIcon: <FontIcon style={{ color: "white" }}>polymer</FontIcon>
            }
          ]}
        >
          {this.props.children}

          <Player hide={false}/>
          <Dialog
            id="simpleDialogExample"
            visible={this.state.dialogVisible}
            title="Sign In"
            onHide={() => this.setState({ dialogVisible: false })}
          >
            <div>
              <form onSubmit={e => this.signInUser(e)}>
                <TextField
                  placeholder="E-mail"
                  onChange={this.emailHandler}
                  name="email"
                />
                <TextField
                  onChange={this.passwordHandler}
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                />
                <Button type="submit" raised label="Sign In" />
              </form>
            </div>
          </Dialog>

        </NavigationDrawer>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    musicPlayer: state.musicPlayer
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);