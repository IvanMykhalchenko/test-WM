import { LocalizationService } from "./../../services/localization/localization.service";
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() searchText: string;
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter();
  private eventSubs: Subscription;
  @ViewChild('input') input: ElementRef; 
  
  constructor(public l: LocalizationService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.eventSubs.unsubscribe();
  }

  ngAfterViewInit() {
    this.addEventInput();
  }

  private addEventInput() {
    this.eventSubs = fromEvent(this.input.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value.toLowerCase()),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(res => {
        this.searchText = res;
        this.searchTextChange.emit(res)
      })
  }

}
