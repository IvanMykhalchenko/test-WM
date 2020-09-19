import { LocalizationService } from "./../../services/localization/localization.service";
import { IGame } from "src/app/models/game.interface";
import { GamesService } from "./../../services/games.service";
import { tap } from "rxjs/operators";
import { ICategory } from "src/app/models/category.interface";
import { Observable } from "rxjs";
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NavigationEnd, Router } from '@angular/router';
import { Lang } from 'src/app/models/lang.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public loadingCategories: boolean = true;
  public loadingGames: boolean = true;
  public searchText: string = '';
  public selectedCategoryId: number;
  public categories$: Observable<ICategory[]> = this.categoriesService.getCategories()
    .pipe(tap(res => this.loadingCategories = false));
  
  public games$: Observable<IGame[]> = this.gamesService.getGames()
    .pipe(tap(res => this.loadingGames = false))
  
  constructor(
    private categoriesService: CategoriesService,
    private gamesService: GamesService,
    private router: Router,
    public local: LocalizationService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.local.selectedLanguage = event.urlAfterRedirects.slice(1) as Lang;
      }
    })
  }

  ngOnInit() {

  }

}
