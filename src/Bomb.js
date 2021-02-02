// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends React.Component {
    constructor(props) {
        super() 
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render() {
        let SECONDS_LEFT = this.state.secondsLeft
        return (
            SECONDS_LEFT == 0 ? <div>Boom!</div> : <div>{SECONDS_LEFT} seconds left before I go boom!</div>
        )
    }
}