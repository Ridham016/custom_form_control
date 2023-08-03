import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private router: Router
  ) { }
  isRememberME:any

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      isRememberME: new FormControl(false),
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      const isLoginSuccessful = true;

      const loading = await this.loadingController.create({
        message: 'Logging in...',
        spinner: 'dots',
        translucent: true,
      });


      await loading.present();

        if (isLoginSuccessful) {
          // this.router.navigate(['/home']);
          console.log(this.loginForm.value)
          console.log(this.isRememberME)
          loading.dismiss()
        } else {
          loading.dismiss()
        }
      }
  }
}
