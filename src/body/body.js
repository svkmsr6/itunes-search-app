import React, { Component } from 'react';
import swal from 'sweetalert';
import SearchBox from './searchBox/searchBox';
import Results from './results/results';
import './body.css';

export default class Body extends Component {
    constructor(props){
       super(props);
       this.state={
           searchTerm: '',
           searchResults: [],
       };
    }

    setSearchTerm(searchTerm){
        this.setState({ searchTerm });
    }

    fetchSearchResults(){
        if(this.state.searchTerm && this.state.searchTerm.length > 3) {
            fetch(`https://itunes.apple.com/search?term=${encodeURI(this.state.searchTerm)}&media=music&limit=6`)
            .then(resp => resp.json())
            .then(data => this.setState({searchResults: data.results}))
            .catch(err => console.err(err))
        } else {
            swal({
                title: "Inadequate Input!",
                text: "Please enter a proper search input greater than 3 characters",
                icon: "warning",
              });
        }        
    }

    clearAll(){
        this.setState({
           searchTerm: '',
           searchResults: []
        });
    }

    render(){
        return (
            <div className="Body-container">
               <SearchBox
                 searchTerm={this.state.searchTerm}
                 setSearchTerm={searchTerm => this.setSearchTerm(searchTerm)}
                 fetchSearchResults={() => this.fetchSearchResults()}
                 clearAll={() => this.clearAll()}
               />
               <hr />
               <Results results={this.state.searchResults} />
            </div>
        );
    }
}