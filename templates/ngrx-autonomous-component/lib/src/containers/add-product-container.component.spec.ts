import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductContainerComponent } from './add-product-container.component';
import { ReactiveFormsModule } from '@angular/forms';

// todo fix test
xdescribe('Add Product Page', () => {
  let fixture: ComponentFixture<AddProductContainerComponent>;
  let component: AddProductContainerComponent;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
        declarations: [AddProductContainerComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

