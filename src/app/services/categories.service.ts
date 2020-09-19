import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { ICategory } from '../models/category.interface';
import { AngularFireDatabase} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  public getCategories(): Observable<ICategory[]> {
    return this.db.object('categories').valueChanges() as Observable<ICategory[]>
  }
}