import { Action } from '@ngrx/store';
import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from 'app/shared/ingredient.model';

const INITIAL_STATE = {
    ingredients:[
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
    ]
};

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export function shoppingListReducer(state=INITIAL_STATE,action: ShoppingListActions.ShoppingListActions) {
    switch(action.type) {
        //case "ADD_INGREDIENT":
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients,action.payload]
            };
        default:
            return state;

    }
}