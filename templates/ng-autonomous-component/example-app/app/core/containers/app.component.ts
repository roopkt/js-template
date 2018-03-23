import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  components: any[];
  constructor() { }

  ngOnInit() {
    this.components = [
      { name: 'demo spinner', path: '/spinner' }
    ];
  }
}
