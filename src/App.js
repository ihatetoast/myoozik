import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

import './App.css';
require('dotenv').config();

const FormItem = Form.Item;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL =
      BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
    var accessToken = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN;
    var myHeaders = new Headers();
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
              <div className="artist-info">
                <div className="name">Sweet</div>
                <div className="info">
                  <p>
                    Lorem ipsum dolor amet tousled copper mug craft beer neutra
                    iceland lo-fi keytar. Flannel trust fund fixie 3 wolf moon
                    normcore salvia viral hella taxidermy godard. Pork belly
                    readymade drinking vinegar, humblebrag leggings thundercats
                    lomo hell of cred man bun echo park. Tbh crucifix green
                    juice bitters polaroid, art party vice VHS iPhone butcher
                    hoodie bespoke. Paleo pug hell of vape slow-carb, poutine
                    bushwick retro twee 90's four loko unicorn hashtag kitsch.{' '}
                  </p>
                </div>
              </div>
              <div className="albums">
                {
                  '. . .be expecting lots of album cover divs here, not not yet, old mate . . . '
                }
              </div>
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
