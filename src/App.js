import React from 'react';
import './App.css';
import SydneysAmazingHeader from './SydneysAmazingHeader.js';
import RichardsIncredibleFooter from './RichardsIncredibleFooter.js';
import SuperAwesomeJeffBody from './SuperAwesomeJeffBody.js';
import IngredientsList from './IngredientsList.js';

export default class App extends React.Component {
  render() {
    return (
    <div>
      <SydneysAmazingHeader />
      <SuperAwesomeJeffBody />
      <IngredientsList />
      <RichardsIncredibleFooter />
    </div>
    );
  }
}
