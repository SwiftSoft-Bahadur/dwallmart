import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {


  users: any
  constructor(private _userSer: UsersService) { }

  ngOnInit(): void {
    this._userSer.GetUsers().subscribe((res: any) => this.users = res);
  }

  deleteUser(id: any) {
    this._userSer.deleteUser(id).subscribe(res => alert(res.message))
  }

}
