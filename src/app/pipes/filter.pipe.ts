import { IGame } from "src/app/models/game.interface";
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(games: IGame[], ...args: [number, string]): IGame[] {
    return games ? games
      .filter(game =>  args[0] ? game.category_id === args[0] : game)
      .filter(game => game.title.toLowerCase().includes(args[1]))
      :
      null
  }

}
