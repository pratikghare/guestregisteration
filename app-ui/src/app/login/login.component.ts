import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userIdFormControl: FormControl = new FormControl('', [Validators.required]);
  passwordFormControl: FormControl = new FormControl('', [Validators.required]);
  emailIdFormControl: FormControl = new FormControl('', [Validators.email, Validators.required]);
  
  matcher = new MyErrorStateMatcher();
  userIdError: boolean = false;
  passwordError: boolean = false;

  userFormLabels = new UserLogin('Email/Phone', 'Password');
  userData: any = null;

  tabIndex: number = 0;

  userIdActiveState: boolean = true;
  showLoader: boolean = false;

  countDown: number = 5;
  resetOTP: string = 'Resend OTP';

  constructor(private router: Router) {
    
  }

  tabChange(index: number){
    this.tabIndex = index;
    this.resetFields();
    this.updateUserId();
  }

  updateUserId(flag: boolean = true){
    if(flag) this.userIdActiveState = true;
    this.userFormLabels = new UserLogin('Email/Phone', 'Password');
    this.countDown = 5;
  }
  
  userLogin(event: any){
    event.preventDefault();
    if(!this.passwordFormControl.valid && !this.userIdFormControl.valid) return;
    this.showLoader = true;
    setTimeout(() => {
      this.userIdActiveState ? this.checkUser() : this.login(this.passwordFormControl.value);
    }, 500);
  }

  checkUser(){
    this.showLoader = false;
    let result = this.fetchUserByUserId(this.userIdFormControl.value);
    if(!result){
      this.userIdError = true;
      this.userData = null;
    }
    else{
      this.userIdError = false;
      this.userIdActiveState = !this.userIdActiveState;
      this.userFormLabels.userIdLabel = result.type;
      this.userFormLabels.passwordLabel = result.type == 'Email' ? 'Password' : 'OTP';
      this.userData = { type: result.type, email: result.email, phone: result.phone };
    }
  }

  login(password: string): any{
    this.passwordError = false;
    if(!password){
      this.passwordError = true;
    }
    else{
      const user = this.fetchUserByUserId(this.userIdFormControl.value, this.userData.type, this.passwordFormControl.value);
      if(user){
        this.userData = user;
        this.passwordError = false;
        this.userIdError = false;
        localStorage.setItem('key', JSON.stringify(this.userData));
        this.router.navigate(['/', 'dashboard']);
      }
      else {
        this.passwordError = true;
      }
    }
    this.showLoader = false;
  }

  forgotPassword(event: any){
    this.countDown = 5;
    this.userLogin(event);
    let x = setInterval(() => {
      this.resetOTP = `Resend OTP in ${this.countDown--}...`;
      if(this.countDown <= 0){
        this.resetOTP = 'Resend OTP';
        clearInterval(x); 
      }
    }, 1000)

  }

  registerUser(){
    let user = {
      email: this.emailIdFormControl.value,
      password: this.passwordFormControl.value
    }
  }


  resetFields(flag: boolean = true){
    if(flag){
      this.userIdFormControl.reset();
      this.userIdError = false;
      this.passwordError = false;
    }
    this.emailIdFormControl.reset();
    this.passwordFormControl.reset();
    this.countDown = 5;
    
  }

  
  sendOTP(){
    
  }

  fetchUserByUserId(id: string, type?: string, password?: string): any{
    return users.find(user => {
      if(type && password){ // Login
        if(user.email === id && password === user.password) return user;
        else if(user.phone == id && password === user.otp) return user;
      }
      else{ // Check User
        if(user.email == id){
          user['type'] = 'Email';
          return user;
        }
        else if(user.phone == id){
          user['type'] = 'Phone';
          return user;
        }
      }
    })
  }
}

export class UserLogin{
  userIdLabel: string;
  passwordLabel: string;

  constructor(userIdLabel: string, passwordLabel: string){
    this.userIdLabel = userIdLabel;
    this.passwordLabel = passwordLabel;
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export const users: any[] = [
  {
    email: 'owner',
    password: 'password',
    phone: '9730070150',
    role: 'admin',
    otp: '1234'
  },
  {
    email: 'mh_police',
    password: 'password',
    // phone: '9730070150',
    role: 'police',
    // otp: '1234'
  }
]

export const users1: Array<any> = [
  {
    email: "pratikghare888@gmail.com",
    password: 'kitarperahg123',
    phone: '8149330176',
    role: "admin",
    otp: "190596",
    // type: ''
  },
  {
    email: "vicky2611@gmail.com",
    password: 'vicky2611',
    phone: '8087937924',
    role: "user",
    otp: "261196",
    // type: ''
  },
  {
    email: "rishirajmarne@gmail.com",
    password: 'ilovenintendo',
    phone: '7420956565',
    role: "user",
    otp: "190596",
    // type: ''
  },
  {
    email: "surendrapasalkar@gmail.com",
    password: 'spasalkar123',
    phone: '9730070150',
    role: "admin",
    otp: "190596",
    // type: ''
  },
  {
    email: "abhishekksingh748@gmail.com",
    password: 'oneplus3=4',
    phone: '8149330176',
    role: "admin",
    otp: "190596",
    // type: ''
  },
  {
    email: "maharashtra_police",
    password: 'mhpolice',
    phone: '8149330176',
    role: "police",
    otp: "190596",
    // type: ''
  }
]