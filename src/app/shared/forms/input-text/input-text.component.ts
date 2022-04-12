import { AfterViewInit, Component, ElementRef, forwardRef, Input, OnInit, Renderer2, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, DefaultValueAccessor, NgControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
    providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent ),
      multi: true
    }
  ]
})
export class InputTextComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @ViewChild('input')
  private input!: ElementRef;

  @Input() placeholder: string = "";
  @Input() labelName: string = "";
  @Input() id: string = "";
  @Input() inputWidth: string = "50%";

  maxlength!: number;
  vlength!: number;

  value!: string;
  onChange = (value: string) => {};
  onTouched = () => {};





  constructor(
    // @Self() public controlDir: NgControl,
    private renderer2: Renderer2,
  ) {
    // controlDir.valueAccessor = this;
   }

  ngOnInit(): void {
    // console.log(this.input);
    this.maxlength = 10;
  }
  
  ngAfterViewInit(): void {
    // console.log(this.input);
    
  }
  
  /** ここからオーバーロードが必要なヤツ */
  writeValue(value: string): void {
    // this.renderer2.setProperty(this.input.nativeElement, 'value', value);
    this.value = value;
  }
  
  
  // onChange: (obj: any) => void;
  // private fnChange = (_: any) => { }
  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }
  
  
  // onTouched!: () => void;
  // private fnTouched = () => {};
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  disabled: boolean = false;
  setDisabledState(isDisabled: boolean){
    this.disabled = isDisabled;
  }


  // changeValue(num: number): void {
  //   this.input.nativeElement.value = num;
  //   this.fnChange(num)
  // }

  markAsTouched(): void {
    this.onTouched();
  }
  maskAsInput(e: any) {
    if(this.disabled) {
      return
    }
    this.vlength = this.input.nativeElement.value.length;
    this.value = e.target.value;
    this.onChange(this.value);
  }

}
