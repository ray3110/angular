import { Component, OnInit } from '@angular/core';

@Component({
    selector: '[app-test]',
    template: `
      <h2>
        Welcome {{name}}
      </h2>
      <input [id]="myId" type="text" value="Ray">
      // Property binding
      // <input [disabled]="isDisabled" [id]="myId" type="text" value="Ray">
      // Alternative representation
      <input bind-disabled="isDisabled" [id]="myId" type="text" value="Ray">
      `,
    styles: []
})
export class TestComponent implements OnInit {

// Interporation
  // Class property
  public name = "Ray";
  public myId = "testId"
  public isDisabled = false

  constructor() { }

  ngOnInit(): void {
  }

}
