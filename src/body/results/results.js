import React, { Component } from 'react';
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
            <div className="results-container">              
              { 
                 (results && results.length > 0) ? 
                 results.map((result,index) => (<Result key={index} data={result} />)):
                 <div className="no-results">No Results</div>
              }
            </div>
        );
    }


}