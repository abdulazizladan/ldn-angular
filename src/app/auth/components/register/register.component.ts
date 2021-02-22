import { Component, OnInit } from '@angular/core';
import { SimpleAuthService } from '../../services/simple-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(  private _simpleAuth: SimpleAuthService ) { }

  ngOnInit(): void {
  }

}
