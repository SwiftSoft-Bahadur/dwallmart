import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  userRef: any
  constructor(private _authSer: AuthService) { }

  ngOnInit(): void {
    this._authSer.me().subscribe((res) => this.userRef = res);
  }

}
