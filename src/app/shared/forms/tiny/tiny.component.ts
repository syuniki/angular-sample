import { Component, HostListener, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-tiny',
  template: `
    <p>
      {{ maxlength }} / {{ vlength }}
      <ng-content></ng-content>
    </p>
  `,
  styles: [
  ]
})
export class TinyComponent implements OnInit {
  @Input() maxlength!: number;
  @Input() vlength!: number;
  @Input() input!: any
  message: string = "";

  constructor(
    private ref: ElementRef,
  ) { }
  
  ngOnChange() {
    if (this.input.maxlength && this.input.value) {
      this.message = `${this.input.value} / ${this.input.maxlength}`;
    }
  }
    

  ngOnInit(): void {
    console.log(this.input);
  }
  ngAfterViewInit() {
    console.log(this.input);
  }
  
  ngAfterContentInit() {
    console.log(this.input);
  }

}
