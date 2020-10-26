import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class SydneysAmazingHeader extends Component {
    render() {
        return (
            <div>
                <span>
                    <img className="small-logo" src="" alt="small pointless logo"/>
                </span>
                <span className="delicious inblock">
                    <h1>DELICIOUS</h1>
                    <h2>THE BEST CHOCOLATE PIZZA EVER</h2>
                </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SydneysAmazingHeader)
