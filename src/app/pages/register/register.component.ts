import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator, matchingPasswords } from '../../@theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../@core/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public settings: Settings;
  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    public appSettings: AppSettings,
    public fb: FormBuilder,
    public router: Router
  ){
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    },{validator: matchingPasswords('password', 'confirmPassword')});
  }

  public onSubmit(values:Object):void {
    if (this.form.valid) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    const crToken = this.cookieService.get('cr-token');
    if (crToken) {
      this.router.navigate(['/pages/xcards']);
    }
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.settings.loadingSpinner = false;
    });
  }
}
