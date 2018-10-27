import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

import './App.css';

import './Artist';
import Artist from './Artist';
import TopTracks from './TopTracks';
require('dotenv').config();

const FormItem = Form.Item;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const accessToken =
      'BQDv8PDBCXFfKgYFVOsDbJKY6NSHB5j6GEDzhTG2owz102a0f3ribhhyOqnUO9FP43ZrhfqK8wBAHo_uK2-rDPhwHM6QwSHm0igbgafRDdMv5YmLI4GNMAuecTluN3IWCYJjjZ-UEfBB0w';
    // const accessToken = process.env.SPOTIFY_ACCESS_TOKEN;
    // https://api.spotify.com/v1/artists/{id}/top-tracks
    // https://api.spotify.com/v1/artists/{id}/Songs
    // https://api.spotify.com/v1/artists/{id}/related-artists

    const BASE_URL = `https://api.spotify.com/v1/search?`;

    let FETCH_URL = `${BASE_URL}q=${this.state.query.replace(
      /\s/g,
      '+'
    )}&type=artist&limit=1`;
    const ARTISTS_URL = `https://api.spotify.com/v1/artists`;

    var options = {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json'
      })
    };
    fetch(FETCH_URL, options)
      .then(response => response.json())
      .then(json => {
        const artist = json.artists.items[0];
        console.log(artist);
        this.setState({ artist });
        //reset FETCH_URL from one to retrieve my query to one to get the top tracks
        FETCH_URL = `${ARTISTS_URL}/${artist.id}/top-tracks?country=US`;

        fetch(FETCH_URL, options)
          .then(response => response.json())
          .then(json => {
            //obj destructuring take tracks from json and make it our own with var of same name:
            const { tracks } = json;
            this.setState({ tracks });
            console.log(this.state.tracks);
          });
      });
    this.setState({ query: '' });
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Myoozik</h1>
        </header>
        <main>
          <section className="intro-section">
            <p>
              Brief intro for what do to. Instructions. Meep mop moop. Beep bop
              boop.
            </p>
          </section>
          <section className="form-section">
            <Form className="searchField" onSubmit={this.handleSubmit}>
              <FormItem>
                <Input
                  placeholder="enter artist/s"
                  value={this.state.query}
                  onChange={this.handleChange}
                />
              </FormItem>
              <Button type="primary" htmlType="submit">
                <Icon type="search" theme="outlined" />
              </Button>
            </Form>
          </section>
          <section className="results-section">
            <div className="searchResults">
              {/* do not render profile component if the state of artist is null */}
              {this.state.artist !== null ? (
                <div>
                  <Artist artist={this.state.artist} />
                  <TopTracks tracks={this.state.tracks} />
                </div>
              ) : (
                <div className="nullStatePlaceholder" />
              )}
            </div>
          </section>
        </main>
        <footer>
          <p>
            Katy Cassidy | ihatetoast | {new Date(Date.now()).getFullYear()}
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
