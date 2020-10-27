import React, { Component } from 'react'

export default class JilliansImpeccableIngredients extends Component {
    render() {
        return (
            <div>

                <input type="checkbox"/>
                    <label className="recipe-check-box"> {this.props.amount} {this.props.name} </label>

            </div>
        )
    }
}

