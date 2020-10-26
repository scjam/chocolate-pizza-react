// eslint-disable-next-line
import React, { Component } from 'react';
import SmallLogo from './assets/small-logo.png';
import BryanasWonderfulButtons from './BryanasWonderfulButtons.js';

export default class SydneysAmazingHeader extends React.Component {
    render() {
        return (
            <div>
                <span> 
                    <img className='small-logo' src={SmallLogo} alt="small logo with a fork" />
                </span>
                
                <span className='delicious inblock'>
                    <h1>DELICIOUS</h1>
                    <h2>THE BEST CHOCOLATE PIZZA EVER</h2>
                </span>
                <BryanasWonderfulButtons />
            </div>
        )
    }
}