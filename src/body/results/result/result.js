import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import { formatTitle } from '../../../utils/string-utils';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './result.css';

export default class Result extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const {data} = this.props;
        return (
            <Card className="result-container">
            <CardMedia
              className="result-img"
              image={data.artworkUrl100}
              title={data.trackName}
            />
            <CardContent>
              <Typography variant="title" component="p">
                {formatTitle(`${data.trackName}`)}
              </Typography>
              <Typography variant="caption" gutterBottom component="p">
                {formatTitle(`${data.artistName}`)}
              </Typography>
              <Typography variant="button"  gutterBottom component="p">
                {formatTitle(`${data.collectionName}`)}
              </Typography>
              <Typography variant="subheading" paragraph component="div">
                {`Track available at a price of ${data.currency} ${data.trackPrice}`}
              </Typography>
              <Typography variant="subheading" component="div">
                {`Grab the entire collection at a price of ${data.currency} ${data.collectionPrice}`}
              </Typography>
            </CardContent>
            <div className="audio-section">
                <span className="track-preview-text">Preview your track below</span>
                <audio
                id="track-preview"
                controls
                src={data.previewUrl}
                >
                Audio not available!
                </audio>
            </div>
          </Card>
        );
    }
}
