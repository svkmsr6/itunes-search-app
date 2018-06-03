import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Result from './result/result';
import './results.css';

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        const {results} = this.props;
        return (
            // <div className="results-container"> 
              <Grid container spacing={8}>             
              { 
                 (results && results.length > 0) ? 
                 results.map((result,index) => (
                   <Grid key={index} item xs={12} sm={4} md={4}>
                        <Result key={index} data={result} />
                   </Grid>
                 )):
                 <div className="no-results">No Results</div>
              }
              </Grid>
            // </div>
        );
    }


}