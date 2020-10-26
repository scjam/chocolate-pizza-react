// eslint-disable-next-line
import React, { Component } from 'react';
import van from './assets/van-pic.png'; 

export default class RichardsIncredibleFooter extends React.Component {
    render() {
        return (
            <div>
                <img src={van} className="headshot" alt='author' />
                <h3>Vanessa Stevenson</h3>
                <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                <p>Delcious © 2013 · All Rights Reserved. Proudly published with Ghost.</p>
            </div>
        )
    }
}