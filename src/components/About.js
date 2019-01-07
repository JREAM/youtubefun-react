import React, {Component} from 'react';
import Navbar from './Navbar';

export default class About extends Component {
  render() {
    return (
      <>
        <Navbar color="is-warning" size="is-medium" title="About" subtitle="We are happy people, sometimes :)" />
        <section className="section">
          <div className="container">
            <h1 className="title is-1">About</h1>
            <p>Hello, About Page!</p>
          </div>
        </section>
      </>
    )
  }
}
