import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-user',
  templateUrl: './store-user.component.html',
  styleUrls: ['./store-user.component.css']
})
export class StoreUserComponent implements OnInit {

  id: any
  constructor(private _activateDRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activateDRoute.params.subscribe((params) => {
      this.id = params['id'];
    })
  }


  onUpdate(){
    
  }
}
