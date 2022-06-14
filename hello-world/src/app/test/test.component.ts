import { Component, OnInit } from '@angular/core';

@Component({
  // Customized html header
  // selector: 'app-test',
  // Class selector
  // selector: '.app-test',
  // Attribute selector
  selector: '[app-test]',
  // templateUrl: './test.component.html',
  // Inline html template
  template: `<div>
                  Inline template
                </div>`,
  // styleUrls: ['./test.component.css']
  // Inline style
  styles: [`
    div {
      colour: red;
      }`
  ]

})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
