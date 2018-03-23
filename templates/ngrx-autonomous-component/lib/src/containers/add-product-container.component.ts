import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Product } from '../models/product';
import { Observable } from 'rxjs/Observable';

import { Add, ValidateAddProduct } from '../actions/product-actions';
import {
  getAllProducts,
  State,
  isAddProductFormValid,
  addProductForm,
  isAddProductFormNameValid,
  isAddProductFormPriceValid
} from '../reducers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ManageSubscriptions, managedSubscriptions } from '../core/utility/managed-subscriptions';


@Component({
  selector: 'pm-add-product-container',
  template: `
          <pm-add-product (addProduct)="addProduct($event)"
            [form] ="form"
            [isPriceValid] = "isPriceValid$|async"
            [isNameValid] = "isNameValid$|async"
            [isFormValid]="isFormValid$|async">
          </pm-add-product>
          <br>
         <pm-all-products [products]="products$|async"></pm-all-products>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductContainerComponent implements OnInit, OnDestroy {
  allSubscriptions: ManageSubscriptions = managedSubscriptions();
  products$: Observable<Product[]>;
  isNameValid$: Observable<boolean>;
  isPriceValid$: Observable<boolean>;
  isFormValid$: Observable<boolean>;
  form$: Observable<Product>;
  form: FormGroup;
  formChanged$: Observable<Product>;

  constructor(
    private store: Store<State>,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.createForm();
    this.createObservables();
    this.subscribeObservables();
  }

  private createObservables() {
    this.products$ = this.store.pipe<Product[]>(select(getAllProducts));
    this.isFormValid$ = this.store.pipe<boolean>(select(isAddProductFormValid));
    this.form$ = this.store.pipe<Product>(select(addProductForm));
    this.isNameValid$ = this.store.pipe<boolean>(select(isAddProductFormNameValid));
    this.isPriceValid$ = this.store.pipe<boolean>(select(isAddProductFormPriceValid));
    this.formChanged$ = this.form.valueChanges.pipe<Product>(debounceTime(400));
  }


  private subscribeObservables() {
    this.allSubscriptions.addRange(
      this.form$.subscribe(this.onUpdateForm.bind(this)),
      this.formChanged$.subscribe(this.validateForm.bind(this))
    );
  }

  private createForm() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', []),
      price: this.formBuilder.control('', [])
    });
  }

  private onUpdateForm(product) {
    this.form.patchValue(product, { emitEvent: false });
  }

  private validateForm(product: Product) {
    this.store.dispatch(new ValidateAddProduct(product));
  }

  ngOnDestroy(): void {
    this.allSubscriptions.clear();
  }

  addProduct(product: Product): void {
    product.id = Date.now().toString();
    this.store.dispatch(new Add(product));
  }
}
