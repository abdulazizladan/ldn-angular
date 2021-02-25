import { Component, OnInit } from '@angular/core';
import { SimpleAuthService } from '../../services/simple-auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm : FormGroup;

  constructor(
    private _simpleAuth: SimpleAuthService,
    private fb: FormBuilder){
      this.registrationForm = fb.group({
        firstName: [ '', [
          Validators.required
        ]],
        lastName: [ '', [
          Validators.required
        ]],
        email: [ '', [
          Validators.email,
          Validators.required
        ]],
        password: [ '', [
          Validators.minLength(8),
          Validators.required
        ]],
        passwordConfirm: [ '', [
          Validators.minLength(8),
          Validators.required
        ]]
      })
    }

  ngOnInit(): void {

  }

  register(){
    this._simpleAuth.register(this.registrationForm.value).subscribe(
      res=>{
        console.log('Registering...')
      },
      err=>{
        console.log('Unable to complete registration...')
      }
    )
  }

}
