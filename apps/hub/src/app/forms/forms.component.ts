import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'emx-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  form = new FormGroup({
    opt1: new FormControl(),
    opt2: new FormControl(),
    opt3: new FormControl(),
    opt4: new FormControl(),
    opt5: new FormControl(),
    opt6: new FormControl(),
    opt7: new FormControl(),
    opt8: new FormControl(),
    opt9: new FormControl(),
  })
  constructor() { }

  ngOnInit() {
  }

}
