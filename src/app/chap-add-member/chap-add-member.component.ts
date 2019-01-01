import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chap-add-member',
  templateUrl: './chap-add-member.component.html',
  styleUrls: ['./chap-add-member.component.scss']
})
export class ChapAddMemberComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
