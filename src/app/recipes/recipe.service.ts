import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipesSelected = new Subject<Recipe>();

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

  constructor() {}

  getRecipe(id: number) {
    return this.recipes[id];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes);
  }

  // saveRecipe() {
  //   const headers = new Headers({'Content-Type': 'application/json'});
  //   return this.http.put(
  //     'https://udemy-course-project-844a5.firebaseio.com/data.json',
  //     this.recipes,
  //     {headers: headers});
  // }
}
