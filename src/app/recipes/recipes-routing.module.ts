import {NgModule} from '@angular/core';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {AuthGuard} from '../auth/auth-gard.service';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipesComponent} from './recipes.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RouterModule, Routes} from '@angular/router';

const recipesRoute: Routes = [
  {path: '', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoute)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RecipesRoutingModule {}
