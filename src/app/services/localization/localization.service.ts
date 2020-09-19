import { en } from "./en";
import { ru } from "./ru";
import { Lang } from "./../../models/lang.interface";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private _selectedLanguage: Lang;

  constructor(private router: Router) { }

  get selectedLanguage(): Lang {
    return this._selectedLanguage;
  }

  set selectedLanguage(lang: Lang) {
    this._selectedLanguage = lang;
  }

  get static() {
    return this.selectedLanguage === Lang.RU || this.router.url.includes(Lang.RU) ? ru : en;
  }

  public getLocalizationItem(items: any[]): any[] {
    return items.map(item => {      
      Object.keys(item).forEach(prop => {
        if (prop.includes(`_${this.selectedLanguage}`)) {
          item[prop.split('_')[0]] = item[prop];
        }
      })

      return item;
    })
  }
}
