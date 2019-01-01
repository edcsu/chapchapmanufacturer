import { Component, OnInit } from '@angular/core';

export interface Partition {
  title: string;
  sub: string;
  icon: string;
}

@Component({
  selector: 'app-chap-settings',
  templateUrl: './chap-settings.component.html',
  styleUrls: ['./chap-settings.component.scss']
})
export class ChapSettingsComponent implements OnInit {

  constructor() { }

  first: Partition[] = [
    {
      title: 'Manufacturer Number',
      sub: 'CCM00001',
      icon: 'account_circle'
    },
    {
      title: 'Full Name',
      sub: 'John Doe',
      icon: 'person_outline'
    },
    {
      title: 'Phone Number',
      sub: '256752000000',
      icon: 'call'
    },
    {
      title: 'Email Address',
      sub: 'johndoe@example.com',
      icon: 'mail_outline'
    }
  ];

  second: Partition[] = [
    {
      title: 'Password',
      sub: 'Reset your password',
      icon: 'vpn_key'
    },
    {
      title: 'Data Usage',
      sub: 'Internet',
      icon: 'donut_large'
    },
    {
      title: 'Enable Pin',
      sub: 'Not set',
      icon: 'lock_open'
    },
    {
      title: 'Update',
      sub: 'Version 1.0.0',
      icon: 'stay_current_portrait'
    }
  ];

  changeTheme() {
    if (document.body.classList.contains('chapchap-light-theme')) {
      document.body.classList.remove('chapchap-light-theme');
      document.body.classList.add('chapchap-dark-theme');
    } else {
      document.body.classList.remove('chapchap-dark-theme');
      document.body.classList.add('chapchap-light-theme');
    }
  }

  ngOnInit() {
  }

}
