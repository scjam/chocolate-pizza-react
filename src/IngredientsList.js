import React, { Component } from 'react'
import JilliansImpeccableIngredients from './JilliansImpeccableIngredients'

export default class IngredientsList extends Component {

    foodIngredients = ['egg folks', 'cookie chokes', 'Beefy Tokes'] 

    render() {
        return (
            <div>
                {
                    this.foodIngredients.map(ingredient => {
                        return <JilliansImpeccableIngredients ingredients={ingredient}/> 
                     }) 

                }
            </div>
        )
    }
}
