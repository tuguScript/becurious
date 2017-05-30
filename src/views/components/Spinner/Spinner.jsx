import React, { Component } from 'react';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';


export default class Spinner extends Component {
    state = {  }
    render() {
        return (
            <CircularProgress key="progress" id={1} scale={3}/>
        );
    }
}