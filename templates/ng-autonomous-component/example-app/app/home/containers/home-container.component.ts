import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'wa-home-container',
  templateUrl: './home-container.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent {
  showSpinner$ = new Subject<boolean>();
}
