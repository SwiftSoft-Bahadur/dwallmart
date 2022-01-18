import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: any
  constructor(private _userSer: UsersService) { }

  ngOnInit(): void {
    this._userSer.GetUsers().subscribe((res: any) => this.users = res);
  }

  deleteUser(id: any) {
    this._userSer.deleteUser(id).subscribe(res => alert(res))
  }

}
