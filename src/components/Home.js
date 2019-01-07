import React, {Component} from 'react';
import Navbar from './Navbar';

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar color="is-info" size="is-large" title="Youtube" subtitle="Code is Fun... Sometimes :)" />
        <section className="section">
          <div className="container">
            <h1 className="title is-1">Home</h1>
            <p>Hello, Home Page!</p>
          </div>
        </section>
      </>
    )
  }
}
