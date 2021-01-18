import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { emailValidator, matchingPasswords } from '../../@theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../@core/services/api.service';

interface TokenObj {
  token: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public settings: Settings;
  authForm = new FormGroup({
    username: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  registerMode = false;
  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    public appSettings: AppSettings,
    public fb: FormBuilder,
    public router: Router
  ){
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required, emailValidator])],
      username: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      first_name: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      last_name: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {validator: matchingPasswords('password', 'confirmPassword')});
  }
  // tslint:disable-next-line:ban-types
  public onSubmit(values: Object): void {
    if (this.form.valid) {
      this.router.navigate(['/pages/xcards']);
    }
  }

  registerUser() {
    if (!this.registerMode) {
      this.loginUser();
    } else {
      this.apiService.registerUser(this.authForm.value).subscribe(
        (result: TokenObj) => {
          this.cookieService.set('cr-token', result.token);
          this.router.navigate(['/pages/xcards']);
        },
        error => console.log(error)
      );
    }
  }
  loginUser() {
    this.apiService.loginUser(this.authForm.value).subscribe(
      (result: TokenObj) => {
        this.cookieService.set('cr-token', result.token);
        this.router.navigate(['/pages/xcards']);
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
    const crToken = this.cookieService.get('cr-token');
    if (crToken) {
      this.router.navigate(['/pages/xcards']);
    }
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(){
    setTimeout(() => {
      this.settings.loadingSpinner = false;
    });
  }
}
