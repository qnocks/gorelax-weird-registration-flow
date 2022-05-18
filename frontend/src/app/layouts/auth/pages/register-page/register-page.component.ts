import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'grlx-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent implements OnInit {
  readonly SUBMIT_LIMIT = 5;
  registerForm: FormGroup;
  submitCount = 0;

  constructor(
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      const request = this.registerForm.value;
      console.log(request);

      this.authService.register(request).subscribe({
        next: () => {
          console.log('User successfully registered');
        }
      });

      this.submitCount = 0;
    }
  }

  isFormValid(): boolean {
    return this.registerForm.valid &&
      this.registerForm.controls['password'].value ===
      this.registerForm.controls['confirmedPassword'].value &&
      this.submitCount++ > this.SUBMIT_LIMIT;
  }

  isUsernameNotValid(): boolean {
    return !this.registerForm.controls['username'].valid;
  }

  isPhoneNotValid(): boolean {
    return !this.registerForm.controls['phone'].valid;
  }

  isEmailNotValid(): boolean {
    return !this.registerForm.controls['email'].valid;
  }

  isPasswordNotValid(): boolean {
    return !this.registerForm.controls['password'].valid;
  }

  isConfirmedPasswordNotValid(): boolean {
    return !this.registerForm.controls['confirmedPassword'].valid;
  }

  private buildForm() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[А-Яа-яёЁ]+$')]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.pattern('^[0-9]*$')]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^[А-Яа-яёЁ]+$')]),
      confirmedPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^[А-Яа-яёЁ]+$')])
    });
  }
}
