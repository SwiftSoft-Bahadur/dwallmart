import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { SessionService } from 'src/app/shared/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alertDanger:boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private _sessionService: SessionService,
    private _authService: AuthService,
    private _router: Router
  ) { }

  userForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  })

  ngOnInit(): void {
    // check token  exist redrect to home
    let userExist = this._sessionService.getToken();
    if (userExist) {
      this._router.navigate(['dashboard']);
    }
  }
  
  submint() {
    let Ref = this.userForm.value;
    let ObjRef = {
      email: Ref.email,
      password: Ref.password,
    }
    
    this._authService.login(ObjRef).subscribe(
      res => {
        if (res.user.role === 'admin') {
          this._sessionService.setToken(res.token);
          this._sessionService.setAdmin(res.user.name);
          this._router.navigate(['dashboard']);
        } else {
          this.alertDanger = true;
        }

      },
      err => {
        if (err.status == 401) {
         this.alertDanger = true;
        }
      })
  }


}
