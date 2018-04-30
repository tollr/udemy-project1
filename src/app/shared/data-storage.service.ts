import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class DataStorageService {
    constructor(
      private http: HttpClient,
      private recipeService: RecipeService) {}

    storeRecipes() {
      // const headers = new HttpHeaders().set('Authorization', 'Bearer');
      /*return this.http.put(
          'https://udemy-course-project-844a5.firebaseio.com/recipes.json',
          this.recipeService.getRecipes(), {
          observe: 'body',
          params: new HttpParams().set('auth', token)
            // headers: headers;
        }
      );*/
      const req = new HttpRequest(
        'PUT',
        'https://udemy-course-project-844a5.firebaseio.com/recipes.json',
        this.recipeService.getRecipes(),
        {reportProgress: true }
      );

      return this.http.request(req);
    }

    getRecipes() {
      // this.http.get<Recipe[]>('https://udemy-course-project-844a5.firebaseio.com/recipes.json?auth=' + token)
      this.http.get<Recipe[]>('https://udemy-course-project-844a5.firebaseio.com/recipes.json')
        .map(
          (recipes) => {
            for (const recipe of recipes) {
              if (!recipe['ingredients']) {
                console.log(recipe);
                recipe['ingredients'] = [];
              }
            }
            return recipes;
          }
        )
        .subscribe(
          (recipes: Recipe[]) => {
            this.recipeService.setRecipes(recipes);
          }
        );
    }

}
