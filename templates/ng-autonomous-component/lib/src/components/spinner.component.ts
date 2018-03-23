import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ui-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements OnInit {
    @Input() show: boolean;

    constructor() { }

    ngOnInit() { }
}




