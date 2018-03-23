import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'brd-progress-bar-view',
    templateUrl: './progress-bar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
    .loader {
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        left:900px;
        top:350px;
        position:modal-dialog;
        position:absolute!important;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
        `
    ]
})
export class ProgressBarComponent {
    @Input() show: boolean;
}
