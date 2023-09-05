import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipeService],
})
export class RecipesComponent {
  selectedRecipe: Recipe = null;

  constructor(private recipeService: RecipeService) {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

  ngOnDestory() {
    this.recipeService.recipeSelected.unsubscribe();
  }

  onPickRepice(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
