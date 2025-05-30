import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharingDataService {
  constructor() {}

  userObect = {
    id: 1,
    name: 'ram',
    userName: 'ramm',
    email: 'ram@yopmail.com',
    subscription: 'basic',
  };

  isEligiableForSubscription(): Boolean {
    if (
      this.userObect.subscription === 'basic' &&
      this.userObect.email.endsWith('@gmail.com')
    ) {
      return true;
    } else {
      return false;
    }
  }
}
