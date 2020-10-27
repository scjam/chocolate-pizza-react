import React, { Component } from 'react'
import JilliansImpeccableIngredients from './JilliansImpeccableIngredients.js'

export default class IngredientsList extends Component {

    ingredients = [
        {
        name: 'milk',
        amount:'1 1/2 cups'
    }, 
        {name: 'mascarpone',
        amount: ''}, 
        {name: 'pink salt',
        amount: ''}, 
        {name: 'Black Mission Figs',
        amount: ''}, 
        {name: 'brown sugar',
        amount: ''}, 
        {name: 'water',
        amount: ''}, 
        {name: 'heavy cream',
        amount: ''}, 
        {name: 'granulated sugar',
        amount: ''}, 
        {name: 'egg yolks',
        amount: ''}, 
        {name: 'lemon, juiced',
        amount: ''}, 
        {name: 'butter',
        amount: ''}, 
        {name: 'honey roasted pecans, roughly chopped',
    amount: ''}] 
    // ingredientAmount = [, '1/2 cup ', '1/2 tsp ', '1 lb ', '1/2 cup ', '2-4 tbsp ', '1 1/2 cups ', '1/3 cup', '2 ', '1 ', '2 tbsp ', '1 cup ']

    render() {
        return (
            <div>
                {
                    this.ingredients.map((item, i) => {
                        return <JilliansImpeccableIngredients 
                        name={item.name}
                        amount={item.amount} 
                        key={i}
                        /> 
                     }) 
                    
                }
            </div>
        )
    }
}
