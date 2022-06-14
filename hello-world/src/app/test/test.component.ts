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
                  <h2>
                    Welcome {{name}}
                  </h2>
                  <h2>{{2+2}}</h2>
                  <h2>{{"Hello " +name}}</h2>
                  <h2>{{name.length}}</h2>
                  <h2>{{name.toUpperCase()}}</h2>
                  <h2>{{greetUser()}}</h2>
                  <h2>{{siteUrl}}</h2>
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

// Interporation
  // Class property
  public name = "Ray";
  // Access JS global variable
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hi " + this.name;
  }

}
