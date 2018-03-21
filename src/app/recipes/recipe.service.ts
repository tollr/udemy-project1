import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipeAdded = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pasta all denter',
      'The best pasta you could imagine',
    'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis',
    [
      new Ingredient('pasta', 3),
      new Ingredient('cream', 1),
    ]),
    new Recipe(
      'Yoghurt',
      'A very good yoghurt',
    'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis',
    [
      new Ingredient('cream', 3),
      new Ingredient('strawberry', 1),
    ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
