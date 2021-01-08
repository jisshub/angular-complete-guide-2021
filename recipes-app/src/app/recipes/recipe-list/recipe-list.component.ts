import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipeList:Recipe[]= [
    new Recipe('Recipe One', 'Lorem ipsum is placeholder  ztext commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.', '/assets/images/meat-4813261_640.jpg'),
    new Recipe('Recipee Two', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/assets/images/raspberries-and-blackberries-5001160_640.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
