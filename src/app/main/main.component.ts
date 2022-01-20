import { Component, OnInit } from '@angular/core';
import { SessionService } from '../shared/session/session.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  navlinks: any[] = [
    { name: 'Users', link: 'users', icon: 'fas fa-user fa-sm fa-fw mr-2 text-gray-400' },
    { name: 'Products', link: 'product', icon: 'fa-search mr-2 text-gray-400' },
    { name: 'Category', link: 'category', icon: 'fa-bars mr-2 text-gray-400' },
    { name: 'Settings', link: 'settings', icon: 'fas fa-cogs fa-sm fa-fw mr-2 text-gray-400' },
  ]
  userName:any;
  constructor(private _sessionService: SessionService) { }

  ngOnInit(): void {
    this.userName = this._sessionService.getAdmin();
  }

  logout() {
    this._sessionService.deleteUser();
  }

}