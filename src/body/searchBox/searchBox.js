import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import {} from '@material-ui/core/Icon';
import './searchBox.css';

export default class SearchBox extends Component {
    constructor(props){
       super(props);
       this.state={};
    }

    handleEnter(evt){
      if(evt.charCode === 13){
        evt.preventDefault();
        evt.stopPropagation();
        this.props.fetchSearchResults();
      }
    }

    render(){
        return (
            //<div className="search-box-container">
            <Grid container justify="center">
             <Grid item xs={6} sm={6} md={6}>
              <TextField
                id="search-term"
                label="Search term"
                placeholder="Type in your search term"
                value={ this.props.searchTerm }                
                onChange={evt => this.props.setSearchTerm(evt.target.value)}
                onKeyPress={evt => this.handleEnter(evt)}
                margin="normal"
              />              
              <Button 
                variant="raised"
                aria-label="search" 
                color="primary"
                style={{height: 20, alignSelf: 'center', margin: 10}} 
                onClick={() => this.props.fetchSearchResults()}
                >
                LET'S SEARCH
              </Button>              
              <Button 
                variant="raised"
                aria-label="refresh" 
                color="default"
                style={{height: 20, alignSelf: 'center'}} 
                onClick={() => this.props.clearAll()}
                >
                CLEAR ALL
              </Button>
              </Grid>
            </Grid>
            //</div>
        );
    }
}