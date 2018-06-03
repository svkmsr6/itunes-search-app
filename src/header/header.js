import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <header className="App-header">
							<img src="/img/apple.png" className="App-logo" alt="logo" />
							<h1 className="App-title">Welcome to the iTunes Search App</h1>
            </header>
        );
    }
}