import { Injectable, Inject } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { FEATURE_MODULE_CONFIG, FeatureModuleConfig } from '../config';

@Injectable()
export class ProductApi {

  constructor(@Inject(FEATURE_MODULE_CONFIG) private config: FeatureModuleConfig) {
  }

  createProduct(product: Product): Observable<Product> {
    // make actual server side call using baseurl provided from config
    return of(product);
  }
}
