import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { emailValidator } from '../../@theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { ApiService } from '../../@core/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public form: FormGroup;
  public settings: Settings;
  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor(
    private apiService: ApiService,
    public appSettings: AppSettings,
    public fb: FormBuilder,
    public router: Router
  ){
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      rememberMe: false
    });
  }

  saveForm() {
    this.apiService.loginUser(this.authForm.value).subscribe(
      result => console.log(result),
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
