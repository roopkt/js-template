import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'brd-nav-item',
  templateUrl: './nav-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent {
  @Input() routerLink: string | any[] = '/';
  @Input() icon: '';
  @Input() tooltip: '';
  @Output() navigate = new EventEmitter();
}
