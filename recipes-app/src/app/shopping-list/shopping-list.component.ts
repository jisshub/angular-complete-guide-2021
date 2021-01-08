import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredientList: Ingredients[] = [
    new Ingredients('Ingredient One', 30),
    new Ingredients('Ingredient Two', 20)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
