import { Lang } from "src/app/models/lang.interface";
import { LocalizationService } from "./localization/localization.service";
import { IFooter } from "./../models/footer.interface";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataListService {

  constructor(private l: LocalizationService) { }

  public getFooterNavLinks(): IFooter[] {
    return [
      {
        title: this.l.static.generalInfo,
        items: [
          {
            title: this.l.static.aboutUs
          },
          {
            title: this.l.static.bettingRules
          },
          {
            title: this.l.static.affiliates
          },
          {
            title: this.l.static.contactUs
          },        
        ]
      },
      {
        title: this.l.static.bestOff,
        items: [
          {
            title: this.l.static.promotions
          },
          {
            title: this.l.static.casiniGames
          },
          {
            title: this.l.static.results
          },
          {
            title: this.l.static.statistics
          },        
        ]
      },
      {
        title: this.l.static.securityAndPrivacy,
        items: [
          {
            title: this.l.static.termsAndConditions
          },
          {
            title: this.l.static.responsibGaming
          },
          {
            title: this.l.static.privacyAndCookie
          },
          {
            title: this.l.static.Security
          },        
        ]
      }
    ]
  }

  public getTextForFooter(): string {
    return this.l.static.footerText;
  }

  public getLangsList(): { id: string, name: string, selected?: boolean }[] {
    return [
      {
        id: Lang.RU,
        name: Lang.RU
      },
      {
        id: Lang.EN,
        name: Lang.EN
      }
    ]
  }

}
