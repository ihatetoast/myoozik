import React, { Component } from 'react';
import './App.css';

class Artist extends Component {
  render() {
    let artist = {
      name: '',
      images: [{ url: '' }],
      followers: { total: '' },
      genres: []
    };

    //if the data returned is not null, set artist to be this.props.artist
    artist = this.props.artist !== null ? this.props.artist : artist;
    return (
      <div className="artist-info">
        <img src={artist.images[0].url} alt={`album cover of ${artist.name}`} />
        <div className="name">Artist/s: {artist.name} </div>

        <div className="info">
          <div className="genres">
            {artist.genres.map((genre, index) => {
              return (
                <div key={index} className="genres" id={`genre-${index}`}>
                  {genre}
                </div>
              );
            })}
          </div>
          <div className="followers">Followers: {artist.followers.total} </div>
        </div>
      </div>
    );
  }
}

export default Artist;
