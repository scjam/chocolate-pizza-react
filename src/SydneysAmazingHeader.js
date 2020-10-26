import React, { Component } from 'react'

export default class SydneysAmazingHeader extends React.Component {
    render() {
        return (
            <div>
                <span>
                    <img className='small-logo' src="./assets/small-logo.png" alt='small pointless logo'/>
                </span>
                <span className='delicious inblock'>
                    <h1>DELICIOUS</h1>
                    <h2>THE BEST CHOCOLATE PIZZA EVER</h2>
                </span>
            </div>
        )
    }
}