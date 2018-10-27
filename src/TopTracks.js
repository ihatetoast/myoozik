import React, { Component } from 'react';
import './App.css';
class TopTracks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      activeUrl: '',
      audio: null
    };
    this.previewTrack = this.previewTrack.bind(this);
  }

  previewTrack(audioUrl) {
    let audio = new Audio(audioUrl);

    //if nothing is playing, then play the audio.
    // then change the state to reflect this: playing is true, the audioUrl is now activeUrl, and audio is audio
    //if the audio is playing, either stop it or change it
    // clicking the same image/track "toggles" play to pause
    // clicking a different image stops one, and plays the other
    if (!this.state.playing) {
      audio.play();
      console.log('audio is playing');
      console.log(this.state);
      this.setState({ playing: true, activeUrl: audioUrl, audio });
    } else {
      if (this.state.activeUrl === audioUrl) {
        console.log('you clicked on the same image. it should pause.');
        console.log(this.state);
        this.state.audio.pause();
        this.setState({ playing: false });
      } else {
        //pause the one playing.
        this.state.audio.pause();
        console.log('The current one should be pausing.');
        console.log(this.state);

        this.setState({ playing: true, activeUrl: audioUrl, audio });
        audio.play();
        console.log('and the new one playing.');
        console.log(this.state);
      }
    }
  }
  render() {
    let { tracks } = this.props;

    return (
      <div className="tracks">
        {tracks.map((tracks, idx) => {
          const albumCover = tracks.album.images[0].url;
          return (
            <div
              key={idx}
              className="figureGroup"
              onClick={() => {
                this.previewTrack(tracks.preview_url);
              }}
            >
              <figure role="group" className="track" id={`track-${idx}`}>
                <img src={albumCover} alt="album cover of artist" />
                <figcaption>{tracks.name}</figcaption>
              </figure>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TopTracks;
