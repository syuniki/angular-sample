import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {
  readonly nameOption = {
    placeholder: "名前を入力してください",
    formControlName: "name",
    labelName: 'Name'
  }
  demo1Form = this.fb.group({
    name: ["", Validators.required],
    age: [18, Validators.required],
  });
  width: string = "50%";

  constructor(
    private fb: FormBuilder,
  )
   { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.demo1Form.value);
  }

}
