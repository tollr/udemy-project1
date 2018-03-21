import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientAdded = new EventEmitter<Ingredient[]>();
  recipeAdded = new EventEmitter<Recipe>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
  }
}
