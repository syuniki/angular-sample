import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputWidth]'
})
export class InputWidthDirective {
  @Input() inputWidth: string = "100%";

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    console.log(this.el.nativeElement);
    console.log(this.inputWidth);
  }
  
  ngAfterViewInit(): void {
    console.log(this.inputWidth);
    this.el.nativeElement.style.width = this.inputWidth;
  }

}
