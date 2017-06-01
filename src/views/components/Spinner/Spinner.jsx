import React, { Component } from "react";
import Loader from "halogenium/MoonLoader";

export default class Spinner extends Component {
  state = {};
  render() {
    return <Loader color={this.props.color} size={this.props.size} margin="4px" style={{position: 'fixed', left: '50%', top: '30%'}}/>;
  }
}
