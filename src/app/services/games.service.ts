import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { IGame } from '../models/game.interface';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  public getGames(): Observable<IGame[]> {
    return this.db.object('games').valueChanges() as Observable<IGame[]>
  }
}
