import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipes.model'
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test', 'https://www.seriouseats.com/recipes/images/2016/09/20160926-shakshuka-17-1500x1125.jpg'),
  new Recipe('A Test Recipe', 'This is simply a test', 'https://www.seriouseats.com/recipes/images/2016/09/20160926-shakshuka-17-1500x1125.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

}
