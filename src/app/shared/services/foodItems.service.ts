import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';
import { environment } from 'src/environments/environment';
import { FoodItemInputInterface } from 'src/app/shared/types/foodItemInput.interface';

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

  create(foodItemInput: FoodItemInputInterface): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      `${environment.DB_URL}/recipes.json`,
      foodItemInput
    );
  }

  getById(id: string): Observable<FoodItemInterface> {
    return this.http
      .get<FoodItemInterface>(`${environment.DB_URL}/recipes/${id}.json`)
      .pipe(
        map((foodItem: FoodItemInterface) => {
          return {
            ...foodItem,
            id,
          };
        })
      );
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.DB_URL}/recipes/${id}.json`);
  }

  update(
    id: string,
    foodItemInput: FoodItemInputInterface
  ): Observable<FoodItemInterface> {
    return this.http
      .patch<FoodItemInterface>(
        `${environment.DB_URL}/recipes/${id}.json`,
        foodItemInput
      )
      .pipe(
        map((foodItem: FoodItemInterface) => {
          return {
            ...foodItem,
            id,
          };
        })
      );
  }
}
