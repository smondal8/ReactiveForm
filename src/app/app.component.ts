import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { fbind } from 'q';
import { customNameValidator } from 'src/shared/userNameValidator';
import { confirmPassword } from 'src/shared/passwordValidator'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private fb : FormBuilder){

  }
  title = 'ReactiveForm';
  registrationForm = this.fb.group({
    userName : ['',[Validators.required,Validators.minLength(3),customNameValidator]],
    password : [],
    confirmPassword : [''],
    address : this.fb.group({
      city : [],
      state : [],
      postalCode : []
    })
  },{Validators : confirmPassword});
  // registrationForm = new FormGroup({
  //   userName : new FormControl('Soumya'),
  //   password : new FormControl(),
  //   confirmPassword : new FormControl(),
  //   address : new FormGroup({
  //     city : new FormControl(),
  //     state : new FormControl(),
  //     postalCode : new FormControl()
  //   })
  // });
  ResetForm(){
    this.registrationForm.setValue({
      userName : '',
      password : '',
      confirmPassword : '',
      address : {
        city : '',
        state : '',
        postalCode : ''
      }
    })
  }
  ResetAddress(){
    this.registrationForm.patchValue({
      address : {
        city : '',
        state : '',
        postalCode : ''
      }
    });
  }
}
