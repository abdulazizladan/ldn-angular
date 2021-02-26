import { Component, OnInit } from '@angular/core';
import { SimpleAuthService } from '../../services/simple-auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(
    private _simpleAuth: SimpleAuthService,
    private fb: FormBuilder ){
      this.loginForm = fb.group({
        email: ['', [
          Validators.email,
          Validators.required
        ]],
        password: ['', [
          Validators.required
        ]]
      })
    }

  ngOnInit(): void {

  }

  login(){
    this._simpleAuth.login(this.loginForm.value).subscribe(
      res=>{
        console.log('Logging in...')
      },
      err=>{
        console.log('Unable to login')
      }
    )
  }
}
