import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm! : FormGroup;
  hide: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email : new FormControl('', [Validators.required, Validators.email]),
        password : new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    );
  }

  onLogin(){
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }
  }

