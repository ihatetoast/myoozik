import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

import './App.css';
require('dotenv').config();
const Spotify = require('node-spotify-api');
const FormItem = Form.Item;

// var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });
const spotify = new Spotify({
  id: process.env.REACT_APP_SPOTIFY_ID,
  secret: process.env.REACT_APP_SPOTIFY_SECRET
});

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
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Myoozik</h1>
        </header>
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
        <div className="searchResults">
          <div className="artist-info">
            <div className="name">Sweet</div>
            <div className="info">meep mop moop</div>
          </div>
          <div className="albums">{'. . . '}</div>
        </div>
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
