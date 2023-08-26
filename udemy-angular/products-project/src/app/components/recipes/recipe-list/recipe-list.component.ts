import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Repice',
      'this is a test recipe',
      'https://img-global.cpcdn.com/recipes/89f58f060834c939/680x482cq70/chips-and-egg-repice-by-khadija-abbas-recipe-main-photo.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
