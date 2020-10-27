import React, { Component } from 'react'

export default class JilliansImpeccableIngredients extends Component {
    render() {
        return (
            <div>

                <input type="checkbox"/>
                    <label className="recipe-check-box" for="ingredient"> {this.props.ingredients} </label>

            </div>
        )
    }
}

