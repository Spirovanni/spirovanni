import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { emailValidator } from '../../@theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { ApiService } from '../../@core/services/api.service';
import { CookieService } from 'ngx-cookie-service';

interface TokenObj {
  token: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public settings: Settings;
  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router,
    public appSettings: AppSettings,
    public fb: FormBuilder
  ){
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      rememberMe: false
    });
  }
  ngOnInit() {
    const crToken = this.cookieService.get('cr-token');
    if (crToken) {
      this.router.navigate(['/pages']);
    }
  }

  saveForm() {
    this.apiService.loginUser(this.authForm.value).subscribe(
      (result: TokenObj) => {
        this.cookieService.set('cr-token', result.token);
        this.router.navigate(['/pages']);
      },
        error => console.log(error)
    );
  }

  // tslint:disable-next-line:ban-types
  public onSubmit(values: Object): void {
    if (this.form.valid) {
      this.router.navigate(['/']);
    }
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngAfterViewInit(){
    setTimeout(() => {
      this.settings.loadingSpinner = false;
    });
  }
}
