import { LocalizationService } from "./../../services/localization/localization.service";
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IGame } from 'src/app/models/game.interface';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
  
export class GamesListComponent implements OnInit {
  @Input() loading: boolean = true;
  @Input() games: IGame[];

  constructor(public l: LocalizationService) { }

  ngOnInit(): void {
  }

}
