import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './forms/input-text/input-text.component';
import { InputNumberComponent } from './forms/input-number/input-number.component';
import { InputWidthDirective } from './directives/input-width.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DefaultValueAccessor } from '@angular/forms';
import { TinyComponent } from './forms/tiny/tiny.component';



@NgModule({
  declarations: [
    InputTextComponent,
    InputNumberComponent,
    InputWidthDirective,
    TinyComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    InputTextComponent,
    InputNumberComponent,
    InputWidthDirective
  ],
  providers: [
    DefaultValueAccessor
  ]
})
export class SharedModule { }
