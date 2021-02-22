import { Component, OnInit } from '@angular/core';
import { SimpleAuthService } from '../../services/simple-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private _simpleAuth: SimpleAuthService ) { }

  ngOnInit(): void {

  }

  login(){

  }

}
