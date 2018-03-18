import { Action } from '@ngrx/store';
import { Product } from '../models/product';

export enum ProductActionTypes {
  ADD = '[@scci-servicename/featurename][Products] Add',
  ADD_SUCCESS = '[@scci-servicename/featurename][Products] Add Success',
  ADD_ERROR = '[@scci-servicename/featurename][Products] Add Error',
  VALIDATE_ADD_PRODUCT_FORM = '[@scci-servicename/featurename][Products] Validate Form',
}

export class Add implements Action {
  readonly type = ProductActionTypes.ADD;
  constructor(public payload: Product) { }
}

export class ValidateAddProduct implements Action {
  readonly type = ProductActionTypes.VALIDATE_ADD_PRODUCT_FORM;
  constructor(public payload: Product) { }
}

export class AddSuccess implements Action {
  readonly type = ProductActionTypes.ADD_SUCCESS;
  constructor(public payload: Product) { }
}

export class AddError implements Action {
  readonly type = ProductActionTypes.ADD_ERROR;
  constructor(public payload: string) { }
}

export type ProductActions = Add
  | ValidateAddProduct
  | AddError
  | AddSuccess;

