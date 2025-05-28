import { Component } from '@angular/core';
import { SharingDataService } from '../sharing-data.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {


  dummyData : any;

  isEligiableForSubscription : Boolean;

  constructor(private _sharedData : SharingDataService ) {

    this.dummyData =  this._sharedData.userObect;

    this.isEligiableForSubscription = this._sharedData.isEligiableForSubscription();

  }

  //   userObect = {
  //   id: 1,
  //   name: 'ram',
  //   userName: 'ramm',
  //   email: 'ram@yopmail.com'
  // }


}
