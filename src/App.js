import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

import './App.css';

const FormItem = Form.Item;

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Myoozik</h1>
        </header>
        <Form className="searchField">
          <FormItem>
            <Input placeholder="enter artist/s" />
          </FormItem>
          <Button type="primary">
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
