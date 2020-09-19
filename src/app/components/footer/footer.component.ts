import { LocalizationService } from "./../../services/localization/localization.service";
import { Component, OnInit } from '@angular/core';
import { DataListService } from 'src/app/services/data-list.service';
import { Lang } from 'src/app/models/lang.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footerLinks = this.dataList.getFooterNavLinks();
  public textFooter: string[] = Array.from({ length: 7 }).map((_, i) => this.dataList.getTextForFooter());
  public langsList: any[] = this.dataList.getLangsList();

  constructor(
    private dataList: DataListService,
    public local: LocalizationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onChange(lang: Lang) {
    this.router.navigate([this.local.selectedLanguage])
  }

}
