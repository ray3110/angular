import { Component, OnInit } from '@angular/core';

@Component({
  // Customized html tag selector
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
        color: red;
        }`
    ]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
