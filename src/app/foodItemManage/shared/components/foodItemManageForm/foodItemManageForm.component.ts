import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import {
  foodItemSelector,
  isSubmittingSelector,
} from 'src/app/foodItemManage/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';
import { FoodItemInputInterface } from 'src/app/shared/types/foodItemInput.interface';
import { ConfirmModalComponent } from 'src/app/foodItemManage/shared/components/confirmModal/confirmModal.component';

@Component({
  selector: 'fba-food-item-manage-form',
  templateUrl: './foodItemManageForm.component.html',
  styleUrls: ['./foodItemManageForm.component.scss'],
})
export class FoodItemManageFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  isEditMode = false;
  foodItemId: number;
  editFoodItemSub: Subscription;

  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('foodItemManageSubmit') foodItemManageSubmitEvent =
    new EventEmitter<FoodItemInputInterface>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<AppStateInterface>,
    public dialog: MatDialog
  ) {}

  ngOnDestroy(): void {
    if (this.editFoodItemSub) {
      this.editFoodItemSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.route.params.subscribe((params: Params) => {
      this.foodItemId = params['id'];
      this.isEditMode = !!this.foodItemId;
      this.initializeForm();
    });

    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  get ingredientsControls() {
    return (this.form.get('ingredients') as FormArray).controls;
  }

  initializeForm(): void {
    let foodItemName = '';
    let foodItemPrice = null;
    let foodItemImagePath = '';
    let foodItemDescription = '';
    let foodItemIngredients = new FormArray([]);

    if (this.isEditMode) {
      this.editFoodItemSub = this.store
        .pipe(select(foodItemSelector))
        .subscribe((foodItem: FoodItemInterface) => {
          if (foodItem) {
            foodItemName = foodItem.name;
            foodItemImagePath = foodItem.imagePath;
            foodItemDescription = foodItem.description;
            foodItemPrice = foodItem.price;
            if (foodItem['ingredients']) {
              for (let ingredient of foodItem.ingredients) {
                foodItemIngredients.push(
                  new FormGroup({
                    name: new FormControl(ingredient.name, Validators.required),
                    amount: new FormControl(ingredient.amount, [
                      Validators.required,
                      Validators.pattern(/^[1-9]+[0-9]*$/),
                    ]),
                  })
                );
              }
            }
          }
        });
    }

    this.form = this.fb.group({
      name: [foodItemName, [Validators.required]],
      description: [foodItemDescription, [Validators.required]],
      imagePath: [foodItemImagePath, [Validators.required]],
      price: [foodItemPrice, [Validators.required]],
      ingredients: foodItemIngredients,
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.foodItemManageSubmitEvent.emit(this.form.value);
  }

  onAddIngredient(): void {
    (this.form.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onDeleteIngredient(index: number): void {
    (this.form.get('ingredients') as FormArray).removeAt(index);
  }

  onOpenDialog(foodItemName: string): void {
    this.dialog.open(ConfirmModalComponent, {
      width: '250px',
      data: {
        foodItemNameProps: foodItemName,
        foodItemIdProps: this.foodItemId,
      },
    });
  }
}
