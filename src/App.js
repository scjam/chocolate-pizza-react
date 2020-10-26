import React from 'react';
import './App.css';
import SydneysAmazingHeader from './SydneysAmazingHeader.js';
import RichardsIncredibleFooter from './RichardsIncredibleFooter.js';

export default class App extends React.Component {
  render() {
    return (
    <div>
      <SydneysAmazingHeader />
      <RichardsIncredibleFooter />
    </div>
    );
  }
}
