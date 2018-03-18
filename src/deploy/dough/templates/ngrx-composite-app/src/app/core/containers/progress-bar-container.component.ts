import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, isShowProgressBar } from '../../reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'brd-progress-bar',
  template: '<brd-progress-bar-view [show]="show$|async"></brd-progress-bar-view>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarContainerComponent {
  show$: Observable<boolean>;
  constructor(private store: Store<State>) {
    this.show$ = this.store.pipe(select(isShowProgressBar));
  }
}

