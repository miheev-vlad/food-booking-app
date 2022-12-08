import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodItemsService {
  constructor(private http: HttpClient) {}

  getFoodItems(): Observable<FoodItemInterface[]> {
    const url = `${environment.DB_URL}/recipes.json`;

    return this.http.get<any>(url).pipe(
      map((response: { [key: string]: any }) => {
        return Object.keys(response).map(key => ({
          ...response[key],
          id: key,
          ingredients: response[key].ingredients
            ? response[key].ingredients
            : [],
        }));
      })
    );
  }
}
