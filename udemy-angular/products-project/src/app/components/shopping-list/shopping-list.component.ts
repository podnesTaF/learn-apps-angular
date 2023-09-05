import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingService) {
    this.shoppingService.itemAdded.subscribe((ingredient: Ingredient) => {
      this.ingredients.push(ingredient);
    });
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
  }
}
