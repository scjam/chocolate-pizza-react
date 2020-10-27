// eslint-disable-next-line
import React, { Component } from 'react';

import BryanasWonderfulButtons from './BryanasWonderfulButtons.js';

export default class SydneysAmazingHeader extends React.Component {
    render() {
        return (
            <div>
                <span> 
                    <img className='small-logo' src='./small-logo.png' alt="small logo with a fork" />
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