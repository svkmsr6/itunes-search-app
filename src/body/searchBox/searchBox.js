import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './searchBox.css';

export default class SearchBox extends Component {
    constructor(props){
       super(props);
       this.state={};
    }

    render(){
        return (
            <div className="search-box-container">
              <TextField
                id="search-term"
                label="Search term"
                placeholder="Type in your search term"
                value={ this.props.searchTerm }                
                onChange={evt => this.props.setSearchTerm(evt.target.value)}
                margin="normal"
              />
              <Button 
                variant="raised" 
                color="primary"
                style={{height: 20, alignSelf: 'center'}} 
                onClick={() => this.props.fetchSearchResults()}
                >
                LET'S SEARCH
              </Button>
              <Button 
                variant="raised" 
                color="default"
                style={{height: 20, alignSelf: 'center'}} 
                onClick={() => this.props.clearAll()}
                >
                CLEAR ALL
              </Button>
            </div>
        );
    }
}