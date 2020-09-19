import { LocalizationService } from "./../../services/localization/localization.service";
import { Subscription } from "rxjs";
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChange, SimpleChanges, ViewChildren } from '@angular/core';
import { ICategory } from 'src/app/models/category.interface';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit, OnChanges {
  @Input() categories: ICategory[];
  @Input() loading: boolean;
  @Input() selectedCategoryId: number;
  @Output() selectedCategoryIdChange: EventEmitter<number> = new EventEmitter();

  constructor(public l: LocalizationService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.categories?.currentValue) {
      this.categories = this.l.getLocalizationItem(this.categories);
    } 
  }

  public selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.selectedCategoryIdChange.emit(id);
  }
}
