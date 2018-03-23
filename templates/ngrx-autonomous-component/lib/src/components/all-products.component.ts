import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Product } from '../models/product';

@Component({
    selector: 'pm-all-products',
    template: `
    <mat-card class="example-card" *ngFor="let product of products">
        <mat-card-title>{{product.name}}</mat-card-title>
        <mat-card-content>
            Price in $: {{product.price}}
        </mat-card-content>
    </mat-card>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
        .example-card {
            max-width: 400px;
          }
    `
    ]
})
export class AllProductsComponent {
    @Input() products: Product[];
    constructor() {

    }
}
