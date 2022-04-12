import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sample1RoutingModule } from './sample1-routing.module';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Demo1Component,
    Demo2Component,
  ],
  imports: [
    CommonModule,
    Sample1RoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
  ]
})
export class Sample1Module { }
